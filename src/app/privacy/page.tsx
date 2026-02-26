"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function PrivacyPolicy() {
  return (
    <>
      {/* ===============================================================
          HERO HEADER
          =============================================================== */}
      <SectionWrapper padding="lg" bg="primary">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Legal
          </span>
          <h1
            className="mt-4 font-display font-semibold text-text-primary leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-6 text-text-secondary text-lg leading-relaxed">
            How Ruby Roo Ltd collects, uses, and protects your personal data.
            Written in plain English, not legalese.
          </p>
          <p className="mt-4 font-mono text-sm text-text-tertiary">
            Last updated: February 2026
          </p>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          1 — WHO WE ARE
          =============================================================== */}
      <SectionWrapper padding="md" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            1. Who we are
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              Ruby Roo Ltd is a UK-based education and business consultancy. We
              are the data controller for any personal information we collect
              through our website, communications, and services.
            </p>
            <div className="p-6 rounded-xl bg-bg-primary border border-border">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4 font-semibold">
                Data Controller
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>
                  <span className="text-text-tertiary">Company:</span>{" "}
                  Ruby Roo Ltd
                </li>
                <li>
                  <span className="text-text-tertiary">Owner:</span>{" "}
                  Kim Watts
                </li>
                <li>
                  <span className="text-text-tertiary">Email:</span>{" "}
                  <a
                    href="mailto:kim@rubyroo.uk"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    kim@rubyroo.uk
                  </a>
                </li>
                <li>
                  <span className="text-text-tertiary">WhatsApp:</span>{" "}
                  07367 212 240
                </li>
                <li>
                  <span className="text-text-tertiary">Website:</span>{" "}
                  <a
                    href="https://rubyroo.uk"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    rubyroo.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          2 — WHAT WE COLLECT AND WHY
          =============================================================== */}
      <SectionWrapper padding="md" bg="primary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            2. What we collect and why
          </h2>
          <div className="mt-6 space-y-6 text-text-secondary text-base leading-relaxed">
            <p>
              We only collect personal data when there is a clear reason to do
              so. Here is exactly what we collect, why, and on what legal basis
              under the UK GDPR.
            </p>

            {/* Newsletter */}
            <div className="p-6 rounded-xl bg-bg-secondary border border-border space-y-3">
              <h3 className="font-display font-semibold text-text-primary text-lg">
                Newsletter &amp; email opt-in
              </h3>
              <p>
                When you sign up for our newsletter, we collect your{" "}
                <span className="text-text-primary font-medium">
                  email address
                </span>{" "}
                and, optionally, your{" "}
                <span className="text-text-primary font-medium">
                  first name
                </span>
                .
              </p>
              <p>
                We use a double opt-in process: after you submit the signup
                form, you will receive a confirmation email. Your subscription
                is only active once you click the link in that email. This
                ensures your consent is explicit and verifiable.
              </p>
              <p className="text-sm text-text-tertiary">
                <span className="text-accent font-mono text-xs">
                  Lawful basis:
                </span>{" "}
                Consent (Article 6(1)(a) UK GDPR)
              </p>
            </div>

            {/* Contact form */}
            <div className="p-6 rounded-xl bg-bg-secondary border border-border space-y-3">
              <h3 className="font-display font-semibold text-text-primary text-lg">
                Contact form
              </h3>
              <p>
                When you get in touch through our website, we collect your{" "}
                <span className="text-text-primary font-medium">name</span>,{" "}
                <span className="text-text-primary font-medium">
                  email address
                </span>
                , and{" "}
                <span className="text-text-primary font-medium">
                  message content
                </span>
                . We use this only to respond to your enquiry and, where
                appropriate, to follow up on a potential working relationship.
              </p>
              <p className="text-sm text-text-tertiary">
                <span className="text-accent font-mono text-xs">
                  Lawful basis:
                </span>{" "}
                Legitimate interest (Article 6(1)(f) UK GDPR) &mdash; you
                contacted us and reasonably expect a response.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-xl bg-bg-secondary border border-border space-y-3">
              <h3 className="font-display font-semibold text-text-primary text-lg">
                WhatsApp communication
              </h3>
              <p>
                If you contact us via WhatsApp, we will see your{" "}
                <span className="text-text-primary font-medium">
                  phone number
                </span>
                ,{" "}
                <span className="text-text-primary font-medium">
                  profile name
                </span>
                , and{" "}
                <span className="text-text-primary font-medium">
                  message content
                </span>
                . WhatsApp messages are end-to-end encrypted by default.
                We use this data solely to communicate with you about our
                services.
              </p>
              <p>
                Please be aware that WhatsApp is operated by Meta Platforms, Inc.
                and their own privacy policy applies to the platform itself. We
                have no control over how Meta processes data on their
                infrastructure.
              </p>
              <p className="text-sm text-text-tertiary">
                <span className="text-accent font-mono text-xs">
                  Lawful basis:
                </span>{" "}
                Legitimate interest (Article 6(1)(f) UK GDPR) &mdash; you
                initiated the conversation.
              </p>
            </div>

            {/* Client work */}
            <div className="p-6 rounded-xl bg-bg-secondary border border-border space-y-3">
              <h3 className="font-display font-semibold text-text-primary text-lg">
                Client engagements
              </h3>
              <p>
                When you become a client, we may collect additional details such
                as your{" "}
                <span className="text-text-primary font-medium">
                  business name
                </span>
                ,{" "}
                <span className="text-text-primary font-medium">
                  billing address
                </span>
                , and{" "}
                <span className="text-text-primary font-medium">
                  payment information
                </span>{" "}
                as needed to deliver our services and meet legal obligations
                (such as invoicing and tax records).
              </p>
              <p className="text-sm text-text-tertiary">
                <span className="text-accent font-mono text-xs">
                  Lawful basis:
                </span>{" "}
                Contract (Article 6(1)(b) UK GDPR) and Legal obligation
                (Article 6(1)(c) UK GDPR)
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          3 — COOKIES
          =============================================================== */}
      <SectionWrapper padding="md" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            3. Cookies
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              Cookies are small text files stored on your device when you visit a
              website. We use them sparingly and only where necessary.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-border rounded-lg overflow-hidden">
                <thead className="bg-bg-primary">
                  <tr>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold border-b border-border">
                      Type
                    </th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold border-b border-border">
                      Purpose
                    </th>
                    <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold border-b border-border">
                      Required?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-5 py-3 text-text-primary font-medium">
                      Essential
                    </td>
                    <td className="px-5 py-3 text-text-secondary">
                      Keep the site working &mdash; things like remembering your
                      cookie preferences and maintaining sessions.
                    </td>
                    <td className="px-5 py-3 text-text-tertiary">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-text-primary font-medium">
                      Analytics
                    </td>
                    <td className="px-5 py-3 text-text-secondary">
                      Help us understand how people use the site so we can
                      improve it. Data is anonymised where possible.
                    </td>
                    <td className="px-5 py-3 text-text-tertiary">
                      No &mdash; opt-in only
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-text-primary font-medium">
                      Marketing
                    </td>
                    <td className="px-5 py-3 text-text-secondary">
                      Used by third-party platforms (if any) for targeted
                      advertising. We currently do not use marketing cookies.
                    </td>
                    <td className="px-5 py-3 text-text-tertiary">
                      No &mdash; opt-in only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              You can manage or withdraw cookie consent at any time through your
              browser settings or our cookie banner. Disabling essential cookies
              may affect how the site functions.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          4 — THIRD-PARTY SERVICES
          =============================================================== */}
      <SectionWrapper padding="md" bg="primary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            4. Third-party services
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              We use a small number of trusted third-party services to run our
              website and communications. Each has its own privacy policy, and we
              encourage you to review them.
            </p>
            <ul className="space-y-3">
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  Analytics
                </span>{" "}
                &mdash; We may use tools such as Google Analytics or Plausible
                to understand website traffic. Where Google Analytics is used,
                IP anonymisation is enabled.
              </li>
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  Email marketing
                </span>{" "}
                &mdash; We use an email marketing platform (such as Mailchimp,
                MailerLite, or similar) to send newsletters. Your email address
                and name are stored on their servers for this purpose only.
              </li>
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  Hosting
                </span>{" "}
                &mdash; Our website is hosted by a third-party provider. Server
                logs may temporarily record your IP address and browser
                information as part of normal operations.
              </li>
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  WhatsApp (Meta)
                </span>{" "}
                &mdash; If you contact us via WhatsApp, Meta&apos;s privacy policy
                governs the platform. We only use WhatsApp for direct
                communication you initiate.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal data to any third
              party. Ever.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          5 — HOW LONG WE KEEP YOUR DATA
          =============================================================== */}
      <SectionWrapper padding="md" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            5. How long we keep your data
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              We do not keep data longer than necessary. Here are our retention
              periods:
            </p>
            <ul className="space-y-3">
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  Newsletter subscribers
                </span>{" "}
                &mdash; Until you unsubscribe. When you unsubscribe, your data is
                deleted from our mailing list within 30 days.
              </li>
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  Contact form enquiries
                </span>{" "}
                &mdash; Up to 12 months after the last communication, unless the
                enquiry leads to a client engagement.
              </li>
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  Client records
                </span>{" "}
                &mdash; 6 years after the end of the engagement, in line with
                HMRC requirements for financial records.
              </li>
              <li className="pl-5 border-l-2 border-border">
                <span className="text-text-primary font-medium">
                  WhatsApp messages
                </span>{" "}
                &mdash; We do not systematically archive WhatsApp conversations.
                Messages may be retained on your device and ours as part of
                normal use.
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          6 — YOUR RIGHTS
          =============================================================== */}
      <SectionWrapper padding="md" bg="primary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            6. Your rights under UK GDPR
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              You have clear, enforceable rights over your personal data. Here
              they are:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  right: "Access",
                  description:
                    "Request a copy of the personal data we hold about you.",
                },
                {
                  right: "Rectification",
                  description:
                    "Ask us to correct any data that is inaccurate or incomplete.",
                },
                {
                  right: "Erasure",
                  description:
                    "Ask us to delete your data (the \"right to be forgotten\").",
                },
                {
                  right: "Restrict processing",
                  description:
                    "Ask us to limit how we use your data in certain circumstances.",
                },
                {
                  right: "Data portability",
                  description:
                    "Receive your data in a structured, commonly used format.",
                },
                {
                  right: "Object",
                  description:
                    "Object to processing based on legitimate interest.",
                },
                {
                  right: "Withdraw consent",
                  description:
                    "Where processing is based on consent, withdraw it at any time.",
                },
              ].map((item) => (
                <div
                  key={item.right}
                  className="p-4 rounded-lg bg-bg-secondary border border-border"
                >
                  <p className="font-display font-semibold text-text-primary text-sm mb-1">
                    Right to {item.right.toLowerCase()}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:kim@rubyroo.uk"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                kim@rubyroo.uk
              </a>
              . We will respond within one calendar month, as required by law.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          7 — WITHDRAWING CONSENT
          =============================================================== */}
      <SectionWrapper padding="md" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            7. Withdrawing consent
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              Where we process your data based on consent (for example, our
              newsletter), you can withdraw that consent at any time. This
              will not affect the lawfulness of any processing carried out
              before you withdrew consent.
            </p>
            <p>You can withdraw consent by:</p>
            <ul className="space-y-2 ml-1">
              <li className="pl-5 border-l-2 border-border">
                Clicking the &ldquo;unsubscribe&rdquo; link in any marketing
                email we send you
              </li>
              <li className="pl-5 border-l-2 border-border">
                Emailing us directly at{" "}
                <a
                  href="mailto:kim@rubyroo.uk"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  kim@rubyroo.uk
                </a>
              </li>
              <li className="pl-5 border-l-2 border-border">
                Messaging us on WhatsApp at 07367 212 240
              </li>
            </ul>
            <p>
              Once you withdraw consent, we will stop the relevant processing
              and delete your data within 30 days, unless we have another lawful
              basis for retaining it.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          8 — SUBJECT ACCESS REQUESTS
          =============================================================== */}
      <SectionWrapper padding="md" bg="primary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            8. Subject access requests
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              You have the right to request a copy of all personal data we hold
              about you. This is called a Subject Access Request (SAR).
            </p>
            <div className="p-6 rounded-xl bg-bg-secondary border border-border space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-2 font-semibold">
                How to make a SAR
              </p>
              <p>
                Send an email to{" "}
                <a
                  href="mailto:kim@rubyroo.uk"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  kim@rubyroo.uk
                </a>{" "}
                with the subject line{" "}
                <span className="font-mono text-text-primary text-sm bg-bg-primary px-2 py-0.5 rounded">
                  Subject Access Request
                </span>
                . Include enough information for us to verify your identity and
                locate your data.
              </p>
              <p className="text-sm text-text-tertiary">
                We will respond within one calendar month. There is no fee for
                a standard SAR. If your request is manifestly unfounded or
                excessive, we may charge a reasonable fee or refuse to act on it
                &mdash; but we will always explain why.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          9 — DATA SECURITY
          =============================================================== */}
      <SectionWrapper padding="md" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            9. Data security
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              We take reasonable technical and organisational measures to protect
              your personal data against unauthorised access, loss, or
              destruction. This includes:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="pl-5 border-l-2 border-border">
                SSL/TLS encryption on our website
              </li>
              <li className="pl-5 border-l-2 border-border">
                Secure, password-protected access to systems that store personal
                data
              </li>
              <li className="pl-5 border-l-2 border-border">
                Regular review of data access and retention practices
              </li>
              <li className="pl-5 border-l-2 border-border">
                Use of reputable, GDPR-compliant third-party service providers
              </li>
            </ul>
            <p>
              No system is completely secure. If we ever become aware of a data
              breach that poses a risk to your rights and freedoms, we will
              notify you and the ICO without undue delay, as required by law.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          10 — CHILDREN'S DATA
          =============================================================== */}
      <SectionWrapper padding="md" bg="primary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            10. Children&apos;s data
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              Our website and services are not directed at children under the age
              of 16. We do not knowingly collect personal data from anyone under
              16. If you believe we have inadvertently collected data from a
              child, please contact us at{" "}
              <a
                href="mailto:kim@rubyroo.uk"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                kim@rubyroo.uk
              </a>{" "}
              and we will delete it promptly.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          11 — CHANGES TO THIS POLICY
          =============================================================== */}
      <SectionWrapper padding="md" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            11. Changes to this policy
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices, services, or the law. When we make
              significant changes, we will update the &ldquo;last updated&rdquo;
              date at the top of this page. If changes materially affect how we
              use your data, we will make reasonable efforts to notify you (for
              example, via email if you are a subscriber).
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          12 — RIGHT TO COMPLAIN
          =============================================================== */}
      <SectionWrapper padding="md" bg="primary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            12. Your right to complain
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              If you are unhappy with how we have handled your personal data,
              we would appreciate the chance to put it right. Please contact us
              first at{" "}
              <a
                href="mailto:kim@rubyroo.uk"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                kim@rubyroo.uk
              </a>
              .
            </p>
            <p>
              If you are not satisfied with our response, you have the right to
              lodge a complaint with the UK&apos;s supervisory authority:
            </p>
            <div className="p-6 rounded-xl bg-bg-secondary border border-border">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4 font-semibold">
                Information Commissioner&apos;s Office (ICO)
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>
                  <span className="text-text-tertiary">Website:</span>{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    ico.org.uk
                  </a>
                </li>
                <li>
                  <span className="text-text-tertiary">Helpline:</span>{" "}
                  0303 123 1113
                </li>
                <li>
                  <span className="text-text-tertiary">Address:</span>{" "}
                  Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===============================================================
          13 — CONTACT US
          =============================================================== */}
      <SectionWrapper padding="lg" bg="secondary">
        <div className="max-w-3xl">
          <h2 className="font-display font-semibold text-text-primary text-xl md:text-2xl">
            13. Contact us
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              If you have any questions about this privacy policy, your data, or
              your rights, get in touch. We are a small team and Kim reads every
              email personally.
            </p>
            <div className="p-6 rounded-xl bg-bg-primary border border-border">
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>
                  <span className="text-text-tertiary">Email:</span>{" "}
                  <a
                    href="mailto:kim@rubyroo.uk"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    kim@rubyroo.uk
                  </a>
                </li>
                <li>
                  <span className="text-text-tertiary">WhatsApp:</span>{" "}
                  07367 212 240
                </li>
                <li>
                  <span className="text-text-tertiary">Website:</span>{" "}
                  <a
                    href="https://rubyroo.uk"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    rubyroo.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
