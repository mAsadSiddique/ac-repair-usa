/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PHONE_DISPLAY, PHONE_TEL_HREF } from "../data/phone";

interface LegalSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageProps {
  variant: "terms" | "privacy";
  onNavigate: (tab: string) => void;
}

const TERMS_SECTIONS: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using the getacrepair website (the \"Site\"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Site.",
      "getacrepair USA Inc. (\"getacrepair,\" \"we,\" \"us,\" or \"our\") operates this Site as a marketing and dispatch information resource for air conditioning and HVAC-related services across the United States."
    ]
  },
  {
    title: "2. Services Described on This Site",
    paragraphs: [
      "The Site describes HVAC repair, installation, maintenance, and related services that may be arranged through our dispatch hotline. Service availability, response times, and pricing may vary by location, time of day, technician availability, and job scope.",
      "Calling our hotline does not guarantee an immediate appointment or a specific price until a dispatch representative confirms coverage and provides an estimate for your situation."
    ]
  },
  {
    title: "3. No Online Self-Scheduling",
    paragraphs: [
      "This Site does not offer online booking, account registration, or self-service scheduling. Requests for service are handled by phone through our dispatch line. Any estimated costs or wait times displayed online are informational only and are not binding quotes."
    ]
  },
  {
    title: "4. Estimates, Workmanship & Payments",
    paragraphs: [
      "Where applicable, technicians or dispatch partners may provide a verbal or written estimate before work begins. Final pricing may change if additional repairs, parts, or safety conditions are discovered on site.",
      "Payment terms, warranties, and service guarantees are provided by the servicing contractor at the time of service and may be governed by a separate agreement between you and the technician or company that performs the work."
    ]
  },
  {
    title: "5. Partner Network",
    paragraphs: [
      "getacrepair may connect callers with licensed independent contractors or affiliated service providers in your area. Those providers are responsible for licensing, insurance, workmanship, and compliance with local codes. getacrepair is not liable for acts or omissions of independent third-party technicians except to the extent required by applicable law."
    ]
  },
  {
    title: "6. Website Content & Accuracy",
    paragraphs: [
      "We strive to keep city listings, educational content, and service information accurate. Climate tips, cost ranges, and diagnostic guidance are general in nature and do not replace professional on-site evaluation.",
      "The Site and its content are provided \"as is\" without warranties of any kind, express or implied, including merchantability or fitness for a particular purpose."
    ]
  },
  {
    title: "7. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, getacrepair and its officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on information published here.",
      "Nothing in these Terms limits liability that cannot be limited under applicable law, including for fraud or personal injury caused by negligence where such limitations are prohibited."
    ]
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "All Site branding, layout, text, graphics, and logos are owned by getacrepair or its licensors. You may not copy, scrape, republish, or commercially exploit Site materials without our prior written consent."
    ]
  },
  {
    title: "9. Acceptable Use",
    paragraphs: [
      "You agree not to misuse the Site, including attempting to disrupt services, introduce malware, harvest data programmatically, submit false information, or use the Site for unlawful purposes."
    ]
  },
  {
    title: "10. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the United States and the state in which getacrepair principally operates its dispatch operations, without regard to conflict-of-law principles. Venue for disputes shall be in courts with competent jurisdiction in that state, except where consumer protection laws require otherwise."
    ]
  },
  {
    title: "11. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. The \"Last updated\" date at the top of this page will reflect material changes. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms."
    ]
  },
  {
    title: "12. Contact",
    paragraphs: [
      `For questions about these Terms, contact getacrepair dispatch at ${PHONE_DISPLAY} or through the contact options published on this Site.`
    ]
  }
];

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "This Privacy Policy explains how getacrepair USA Inc. (\"getacrepair,\" \"we,\" \"us,\" or \"our\") collects, uses, and protects information when you visit our website or contact us for HVAC-related services.",
      "By using the Site, you acknowledge this Policy. If you do not agree, please discontinue use of the Site."
    ]
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Depending on how you interact with us, we may collect:"
    ],
    bullets: [
      "Contact details you provide by phone (such as name, phone number, service address, and problem description).",
      "Information you voluntarily submit on the Site (for example, customer review comments stored locally in your browser).",
      "Technical data such as browser type, device type, approximate location derived from IP address, pages viewed, and referring URLs collected via standard web analytics or hosting logs.",
      "Cookies or similar technologies used by our hosting provider or analytics tools for site performance and traffic measurement."
    ]
  },
  {
    title: "3. How We Use Information",
    paragraphs: [
      "We use information to:"
    ],
    bullets: [
      "Connect you with dispatch and service professionals in your area.",
      "Respond to inquiries and provide estimates or service advice by phone.",
      "Improve Site content, performance, and user experience.",
      "Comply with legal obligations and protect against fraud or abuse."
    ]
  },
  {
    title: "4. Local Browser Storage",
    paragraphs: [
      "Certain features (such as reviews displayed in your session) may store data in your browser's localStorage. That data stays on your device and is not automatically uploaded to getacrepair servers. Clearing your browser storage will remove that locally saved information."
    ]
  },
  {
    title: "5. Sharing of Information",
    paragraphs: [
      "We may share service-related contact details with licensed technicians or dispatch partners solely to fulfill your service request.",
      "We do not sell personal information. We may disclose information if required by law, court order, or to protect rights, safety, and security.",
      "Service providers that host this Site or provide analytics may process limited technical data under their own privacy practices."
    ]
  },
  {
    title: "6. Phone Communications",
    paragraphs: [
      `When you call ${PHONE_DISPLAY}, your conversation may be recorded or monitored for quality assurance and training, where permitted by law. Please notify the operator if you prefer not to be recorded when such an option is available.`
    ]
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "Phone and dispatch records are retained only as long as needed for service fulfillment, dispute resolution, legal compliance, and legitimate business purposes. Web analytics logs are retained according to our hosting and analytics providers' defaults unless we configure shorter periods."
    ]
  },
  {
    title: "8. Security",
    paragraphs: [
      "We use reasonable administrative and technical measures appropriate for a marketing website. No method of transmission or storage is 100% secure; please avoid sending sensitive financial information through unsecured channels."
    ]
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "The Site is intended for adults seeking HVAC services. We do not knowingly collect personal information from children under 13. If you believe a child has provided information to us, contact us and we will take appropriate steps to delete it."
    ]
  },
  {
    title: "10. Your Choices & Rights",
    paragraphs: [
      "Depending on your state of residence, you may have rights to request access to, correction of, or deletion of certain personal information we maintain, or to opt out of certain processing. To exercise applicable rights, call our dispatch line and ask for a privacy request.",
      "You can control cookies through your browser settings. Disabling cookies may affect Site analytics but will not prevent you from calling for service."
    ]
  },
  {
    title: "11. Third-Party Links",
    paragraphs: [
      "The Site may reference third-party resources. We are not responsible for the privacy practices of external websites. Review their policies before providing personal information."
    ]
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. The \"Last updated\" date will change when we do. Continued use of the Site after an update means you accept the revised Policy."
    ]
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      `For privacy questions or requests, contact getacrepair at ${PHONE_DISPLAY}.`
    ]
  }
];

export default function LegalPage({ variant, onNavigate }: LegalPageProps) {
  const isTerms = variant === "terms";
  const title = isTerms ? "Terms & Conditions" : "Privacy Policy";
  const subtitle = isTerms
    ? "Please read these terms carefully before using the getacrepair website or requesting service by phone."
    : "How getacrepair collects, uses, and protects information when you visit our site or call for HVAC service.";
  const sections = isTerms ? TERMS_SECTIONS : PRIVACY_SECTIONS;
  const otherLabel = isTerms ? "Privacy Policy" : "Terms & Conditions";
  const otherTab = isTerms ? "privacy" : "terms";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id={`legal-${variant}`}>
      <div className="space-y-3 mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
        <p className="text-xs text-slate-500 font-mono">Last updated: July 16, 2026</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed">
                {p.includes(PHONE_DISPLAY) ? (
                  <>
                    {p.split(PHONE_DISPLAY)[0]}
                    <a href={PHONE_TEL_HREF} className="text-sky-600 font-semibold hover:text-sky-700 underline-offset-2 hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                    {p.split(PHONE_DISPLAY)[1] || ""}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed">
                {section.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
        <button
          type="button"
          onClick={() => {
            onNavigate(otherTab);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sky-600 hover:text-sky-700 font-semibold cursor-pointer"
        >
          View {otherLabel} →
        </button>
        <button
          type="button"
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
