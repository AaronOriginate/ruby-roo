"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccessibilitySettings {
  fontSize: "small" | "medium" | "large";
  highContrast: boolean;
  reducedMotion: boolean;
  bionicReading: boolean;
  highlightLinks: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: "medium",
  highContrast: false,
  reducedMotion: false,
  bionicReading: false,
  highlightLinks: false,
};

const STORAGE_KEY = "rubyroo-a11y";

function loadSettings(): AccessibilitySettings {
  if (typeof window === "undefined") return defaultSettings;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Migrate old dyslexiaFont key
      if ("dyslexiaFont" in parsed) {
        parsed.bionicReading = parsed.dyslexiaFont;
        delete parsed.dyslexiaFont;
      }
      return { ...defaultSettings, ...parsed };
    }
  } catch {
    // ignore
  }
  return defaultSettings;
}

function saveSettings(settings: AccessibilitySettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}

/** Process text nodes to bold the first half of each word (Bionic Reading) */
function processBionicReading(enable: boolean) {
  if (enable) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          // Skip interactive, code, and already-processed elements
          if (parent.closest("button, input, textarea, select, script, style, code, pre, nav, [data-bionic]"))
            return NodeFilter.FILTER_REJECT;
          if (parent.hasAttribute("data-bionic")) return NodeFilter.FILTER_REJECT;
          // Skip very short text
          if (!node.textContent || node.textContent.trim().length < 2) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );

    const textNodes: Text[] = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode as Text);
    }

    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      if (!text || !text.trim()) return;

      const span = document.createElement("span");
      span.setAttribute("data-bionic", "true");

      // Split into words and whitespace
      const parts = text.split(/(\s+)/);
      parts.forEach((part) => {
        if (/^\s+$/.test(part) || part.length === 0) {
          span.appendChild(document.createTextNode(part));
        } else {
          const mid = Math.ceil(part.length * 0.5);
          const bold = document.createElement("b");
          bold.textContent = part.slice(0, mid);
          span.appendChild(bold);
          span.appendChild(document.createTextNode(part.slice(mid)));
        }
      });

      textNode.parentNode?.replaceChild(span, textNode);
    });
  } else {
    // Restore: replace bionic spans with plain text
    const bionicSpans = document.querySelectorAll("[data-bionic]");
    bionicSpans.forEach((span) => {
      const text = span.textContent || "";
      const textNode = document.createTextNode(text);
      span.parentNode?.replaceChild(textNode, span);
    });
  }
}

function applySettings(settings: AccessibilitySettings) {
  const html = document.documentElement;

  // Font size
  html.classList.remove("font-size-small", "font-size-medium", "font-size-large");
  html.classList.add(`font-size-${settings.fontSize}`);

  // High contrast
  html.classList.toggle("high-contrast", settings.highContrast);

  // Bionic reading
  html.classList.toggle("bionic-reading", settings.bionicReading);
  processBionicReading(settings.bionicReading);

  // Link highlighting
  html.classList.toggle("highlight-links", settings.highlightLinks);

  // Reduced motion
  html.classList.toggle("reduce-motion", settings.reducedMotion);
  if (settings.reducedMotion) {
    html.style.setProperty("--motion-duration", "0.01ms");
  } else {
    html.style.removeProperty("--motion-duration");
  }
}

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettings(loaded);
    setMounted(true);
  }, []);

  const updateSetting = useCallback(
    <K extends keyof AccessibilitySettings>(
      key: K,
      value: AccessibilitySettings[K]
    ) => {
      setSettings((prev) => {
        const next = { ...prev, [key]: value };
        saveSettings(next);
        applySettings(next);
        return next;
      });
    },
    []
  );

  const resetAll = useCallback(() => {
    // Disable bionic reading before resetting (to clean up DOM)
    processBionicReading(false);
    setSettings(defaultSettings);
    saveSettings(defaultSettings);
    applySettings(defaultSettings);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "absolute bottom-14 left-0 w-72",
              "rounded-lg border border-border bg-bg-secondary",
              "p-5 shadow-xl"
            )}
            role="dialog"
            aria-label="Accessibility settings"
          >
            <h2 className="font-display text-base font-semibold text-text-primary mb-4">
              Accessibility
            </h2>

            {/* Font Size */}
            <div className="mb-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-2">
                Font Size
              </label>
              <div className="flex gap-2">
                {(["small", "medium", "large"] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => updateSetting("fontSize", size)}
                    className={cn(
                      "flex-1 rounded px-3 py-1.5 text-sm font-medium transition-colors",
                      settings.fontSize === size
                        ? "bg-accent text-white"
                        : "bg-bg-tertiary text-text-secondary hover:text-text-primary"
                    )}
                    aria-pressed={settings.fontSize === size}
                  >
                    {size === "small" ? "S" : size === "medium" ? "M" : "L"}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle controls */}
            <div className="space-y-3">
              <ToggleControl
                label="High Contrast"
                checked={settings.highContrast}
                onChange={(v) => updateSetting("highContrast", v)}
              />
              <ToggleControl
                label="Reduced Motion"
                checked={settings.reducedMotion}
                onChange={(v) => updateSetting("reducedMotion", v)}
              />
              <ToggleControl
                label="Bionic Reading"
                checked={settings.bionicReading}
                onChange={(v) => updateSetting("bionicReading", v)}
              />
              <ToggleControl
                label="Highlight Links"
                checked={settings.highlightLinks}
                onChange={(v) => updateSetting("highlightLinks", v)}
              />
            </div>

            {/* Reset */}
            <button
              onClick={resetAll}
              className={cn(
                "mt-4 w-full rounded px-3 py-2 text-sm font-medium",
                "border border-border text-text-secondary",
                "hover:border-accent hover:text-accent transition-colors"
              )}
            >
              Reset All
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full",
          "bg-bg-secondary border border-border",
          "text-text-secondary hover:text-accent hover:border-accent",
          "transition-colors duration-200 shadow-lg",
          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        )}
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        {/* Universal access icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="4" r="1" />
          <path d="M7 8l5 0 5 0" />
          <path d="M12 8v4" />
          <path d="M10 16l2-4 2 4" />
          <path d="M8 20l2-4" />
          <path d="M16 20l-2-4" />
        </svg>
      </button>
    </div>
  );
}

/** Internal toggle switch component */
function ToggleControl({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-text-secondary">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors duration-200",
          checked ? "bg-accent" : "bg-bg-tertiary"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}
