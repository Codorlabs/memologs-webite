import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for MEMO AI, Inc., the company behind MemoLogs.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "summary",
    label: "Summary",
    title: "Summary of key points",
    content: (
      <>
        <p>
          This Privacy Policy explains how MEMO AI, Inc. (doing business as
          MemoLogs) collects, uses, shares, and protects information when you
          visit our website, contact us, request a pilot, or use services that
          link to this policy.
        </p>
        <ul>
          <li>
            We collect contact, business, device, usage, cookie, and integration
            data needed to operate MemoLogs and respond to customers.
          </li>
          <li>
            We use information to provide the platform, generate marketing
            intelligence, operate AI features, secure our services, communicate
            with you, and measure our own marketing.
          </li>
          <li>
            We share information with service providers, integration partners
            you authorize, analytics and advertising partners, legal authorities
            when required, and parties involved in business transactions.
          </li>
          <li>
            We do not use customer integration data to train generalized AI or
            machine learning models unless a customer separately agrees.
          </li>
          <li>
            You can contact us at{" "}
            <a href="mailto:hello@memologs.com">hello@memologs.com</a> to
            exercise applicable privacy rights or ask questions.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "information",
    label: "Information we collect",
    title: "What information do we collect?",
    content: (
      <>
        <p>
          We collect personal information that you provide to us, information
          collected automatically, and information made available through
          customer-authorized integrations.
        </p>
        <h3>Information you provide</h3>
        <ul>
          <li>
            Contact details such as name, work email, phone number, company,
            title, website, mailing address, and communication preferences.
          </li>
          <li>
            Account information such as usernames, passwords, authentication
            data, team roles, and account settings if you create an account.
          </li>
          <li>
            Business context such as monthly media spend, active channels,
            marketing objectives, pilot requirements, support requests, feedback,
            and messages you send us.
          </li>
          <li>
            Payment and billing information if paid services are enabled. We may
            use payment processors such as Stripe and do not need to store full
            payment card numbers ourselves.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            Log and usage data such as IP address, browser type, device type,
            operating system, pages viewed, links clicked, referring URLs,
            timestamps, session activity, and diagnostic data.
          </li>
          <li>
            Device and location signals such as device identifiers, advertising
            identifiers, approximate country, region, and time zone.
          </li>
          <li>
            Cookies, pixels, local storage, analytics identifiers, ad click
            identifiers, and similar technologies described below.
          </li>
        </ul>
        <h3>Customer and integration data</h3>
        <p>
          MemoLogs is an AI marketing intelligence platform. If you authorize us
          to connect to advertising, analytics, commerce, data warehouse, CRM,
          collaboration, or other business systems, we process the data you make
          available so we can provide the requested services. This may include
          campaign, spend, conversion, creative, audience, customer, sales,
          attribution, warehouse, experiment, and decision-history data.
        </p>
      </>
    ),
  },
  {
    id: "sensitive",
    label: "Sensitive information",
    title: "Do we process sensitive information?",
    content: (
      <>
        <p>
          We do not seek to collect sensitive personal information through the
          website. Customer-authorized integrations may contain information that
          a customer controls. Customers are responsible for configuring their
          systems and integrations so they do not provide data to MemoLogs that
          is unnecessary for the agreed services.
        </p>
        <p>
          If we need to process sensitive information to provide a contracted
          service, we will do so only as permitted by applicable law and the
          relevant customer agreement.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    label: "How we use data",
    title: "How do we process your information?",
    content: (
      <>
        <p>We process information for the following purposes:</p>
        <ul>
          <li>Creating and managing accounts, users, roles, and authentication.</li>
          <li>Responding to inquiries, qualifying pilots, and providing support.</li>
          <li>
            Operating MemoLogs features, including causal measurement, creative
            intelligence, audience intelligence, AI co-pilot, alerts, reporting,
            recommendations, and decision memory.
          </li>
          <li>
            Measuring site performance, attribution, conversion events, and the
            effectiveness of our own marketing.
          </li>
          <li>
            Personalizing communications, sending administrative notices, and
            sending marketing communications where permitted.
          </li>
          <li>
            Training, testing, and improving our services using aggregated,
            de-identified, or customer-authorized data.
          </li>
          <li>
            Detecting, preventing, and responding to security incidents, fraud,
            abuse, misuse, and technical issues.
          </li>
          <li>
            Complying with legal obligations, enforcing agreements, and
            protecting the rights, safety, and security of MEMO AI, our users,
            customers, partners, and the public.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-bases",
    label: "Legal bases",
    title: "What legal bases do we rely on?",
    content: (
      <>
        <p>
          Where laws such as the GDPR or UK GDPR apply, we rely on one or more
          of the following legal bases:
        </p>
        <ul>
          <li>
            <strong>Consent.</strong> We may process information when you have
            given us permission, such as for certain cookies or marketing
            communications. You may withdraw consent where applicable.
          </li>
          <li>
            <strong>Contract.</strong> We process information when necessary to
            provide services, manage accounts, support customers, or take steps
            before entering into an agreement.
          </li>
          <li>
            <strong>Legitimate interests.</strong> We process information for
            interests such as improving our products, securing our systems,
            preventing fraud, analyzing usage, and marketing our services, where
            those interests are not overridden by your rights.
          </li>
          <li>
            <strong>Legal obligations.</strong> We process information when
            required to comply with law, legal process, tax, accounting,
            regulatory, or government requests.
          </li>
          <li>
            <strong>Vital interests.</strong> We may process information when
            necessary to protect someone&apos;s life, safety, or security.
          </li>
        </ul>
        <p>
          If Canadian privacy law applies, we generally rely on express or
          implied consent, except where applicable law permits processing without
          consent.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    label: "Sharing",
    title: "When and with whom do we share information?",
    content: (
      <>
        <p>
          We share information only as needed for the purposes described in this
          policy, our agreements, or as required by law.
        </p>
        <h3>Service providers and vendors</h3>
        <p>
          We may share information with vendors that provide hosting, cloud
          infrastructure, data storage, security, analytics, customer support,
          communications, marketing, payment processing, accounting, legal, and
          operational services.
        </p>
        <h3>Analytics, advertising, and measurement partners</h3>
        <p>
          We may share limited website, event, and identifier data with
          analytics and advertising partners to measure performance, attribute
          conversions, understand audiences, and improve campaigns. Depending on
          your location, some of this activity may be considered targeted
          advertising, cross-context behavioral advertising, or sharing under
          applicable privacy law.
        </p>
        <h3>Authorized integrations and destinations</h3>
        <p>
          If you connect MemoLogs to third-party systems or instruct us to send
          data to a destination, we share information as needed to complete that
          connection or instruction.
        </p>
        <h3>Business transfers and legal needs</h3>
        <p>
          We may share information in connection with a merger, financing,
          acquisition, reorganization, bankruptcy, sale of assets, or similar
          transaction. We may also share information to comply with law, respond
          to legal process, enforce agreements, protect rights and safety, or
          investigate security, fraud, or abuse.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    label: "Cookies",
    title: "Do we use cookies and tracking technologies?",
    content: (
      <>
        <p>
          Yes. We use cookies, pixels, tags, local storage, web beacons, and
          similar technologies to operate the website, remember preferences,
          measure traffic, debug issues, understand campaign performance, and
          improve our services.
        </p>
        <p>
          These technologies may include first-party identifiers, browser
          storage, Meta Pixel identifiers, advertising click identifiers, country
          signals, and locally stored lead-matching information after a form
          submission. Depending on configuration, we may use services such as
          Meta, Google Analytics, Google Ads, TikTok, Cloudflare, and Zaraz for
          measurement, analytics, infrastructure, and advertising operations.
        </p>
        <p>
          You can usually manage cookies and similar technologies through your
          browser settings. Blocking or deleting cookies may affect website
          functionality, attribution, and measurement accuracy.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    label: "AI products",
    title: "Do we offer artificial intelligence-based products?",
    content: (
      <>
        <p>
          Yes. MemoLogs uses artificial intelligence and machine learning to
          analyze marketing performance, generate insights, detect trends,
          recommend actions, summarize decisions, create reports, and support
          AI-assisted workflows.
        </p>
        <p>
          AI features may process prompts, inputs, outputs, files, campaign
          data, creative data, audience data, performance data, decision logs,
          and other information you provide or authorize. We may use third-party
          AI infrastructure providers to help deliver these features.
        </p>
        <p>
          We do not use customer integration data, Google API data, or customer
          confidential information to train generalized AI or machine learning
          models unless the relevant customer separately agrees. Information
          received from Google APIs is used to provide and improve user-facing
          MemoLogs features for the authorizing customer or user and is handled
          in accordance with applicable Google API Services User Data Policy
          Limited Use requirements.
        </p>
        <p>
          AI outputs may be inaccurate, incomplete, or require human review. You
          are responsible for evaluating outputs before relying on them for
          business decisions.
        </p>
      </>
    ),
  },
  {
    id: "social-logins",
    label: "Social logins",
    title: "How do we handle social logins?",
    content: (
      <>
        <p>
          If we offer account registration or login through a third-party
          provider, such as Google, Microsoft, or another identity provider, we
          may receive profile information from that provider. This can include
          your name, email address, profile image, account identifier, and other
          information made available by the provider and your account settings.
        </p>
        <p>
          We use this information to create, authenticate, and secure your
          account. Your relationship with the third-party provider is governed
          by that provider&apos;s own terms and privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    label: "Retention",
    title: "How long do we keep information?",
    content: (
      <>
        <p>
          We keep information for as long as reasonably necessary to fulfill the
          purposes described in this policy, provide services, maintain business
          records, resolve disputes, enforce agreements, comply with legal
          obligations, and protect against fraud, abuse, and security incidents.
        </p>
        <p>
          When we no longer have a legitimate business need to process personal
          information, we will delete, anonymize, or securely store and isolate
          it until deletion is possible. Customer data retention may also be
          governed by the customer&apos;s agreement with MEMO AI.
        </p>
      </>
    ),
  },
  {
    id: "security",
    label: "Security",
    title: "How do we keep information safe?",
    content: (
      <>
        <p>
          We use administrative, technical, and organizational safeguards
          designed to protect information from unauthorized access, disclosure,
          alteration, and destruction. These safeguards may include access
          controls, encryption, logging, monitoring, vendor review, and internal
          policies.
        </p>
        <p>
          No internet-based service can be guaranteed to be completely secure.
          You should use appropriate safeguards for your own account, including
          strong passwords, secure devices, and careful management of authorized
          integrations.
        </p>
      </>
    ),
  },
  {
    id: "minors",
    label: "Minors",
    title: "Do we collect information from minors?",
    content: (
      <>
        <p>
          MemoLogs is intended for business users and is not directed to
          children under 18. We do not knowingly collect personal information
          from children under 18 or market to children. If you believe a child
          has provided personal information to us, contact us and we will take
          appropriate steps to delete it.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    label: "Privacy rights",
    title: "What are your privacy rights?",
    content: (
      <>
        <p>
          Depending on where you live, you may have rights to request access,
          correction, deletion, portability, restriction, objection, withdrawal
          of consent, or opt-out of certain processing. You may also have the
          right to appeal a decision about your request.
        </p>
        <p>
          You can unsubscribe from marketing emails by using the unsubscribe
          instructions in those messages or by contacting us. Transactional or
          administrative messages may still be sent where necessary.
        </p>
        <p>
          To submit a privacy request, contact{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a>. We may
          need to verify your identity and authority before completing a
          request. If you are an end user of a MemoLogs customer, we may direct
          you to that customer because the customer controls the relevant data.
        </p>
      </>
    ),
  },
  {
    id: "us-rights",
    label: "U.S. state rights",
    title: "Do United States residents have specific privacy rights?",
    content: (
      <>
        <p>
          Certain U.S. state privacy laws may give residents additional rights,
          including the right to know, access, correct, delete, obtain a copy of
          personal information, opt out of targeted advertising, opt out of the
          sale or sharing of personal information, limit certain uses of
          sensitive personal information, and not be discriminated against for
          exercising privacy rights.
        </p>
        <p>
          Depending on your interaction with us, we may collect the following
          categories of personal information: identifiers, commercial
          information, internet or network activity, approximate geolocation,
          professional or employment-related information, inferences, account
          access credentials, and information you submit in communications,
          forms, or integrations.
        </p>
        <p>
          We do not knowingly sell personal information for money. Some website
          analytics, advertising, and measurement activities may be considered a
          sale, sharing, or targeted advertising under certain state laws. You
          may submit an opt-out request by contacting{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a>.
        </p>
        <p>
          You may use an authorized agent to submit a request where permitted by
          law. We may require proof of authorization and may ask you to verify
          your identity directly with us.
        </p>
      </>
    ),
  },
  {
    id: "dnt",
    label: "Do Not Track",
    title: "Controls for Do Not Track features",
    content: (
      <>
        <p>
          Some browsers and devices offer Do Not Track or similar signals. There
          is not yet a uniform industry standard for responding to these
          signals, so we do not currently respond to Do Not Track browser
          signals. If a legally recognized universal opt-out mechanism applies
          to us, we will honor it as required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "updates-contact",
    label: "Updates and contact",
    title: "How can you contact us about this notice?",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be indicated by the &quot;Last updated&quot; date and
          will be effective when posted unless a later effective date is stated.
        </p>
        <p>
          If you have questions, comments, or requests about this policy or our
          privacy practices, contact MEMO AI, Inc. at{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="subpage-hero privacy-hero">
        <div className="wrap">
          <div className="sp-breadcrumb">
            <Link href="/">MemoLogs</Link> <span>›</span> Privacy
          </div>
          <div className="eyebrow">
            <span className="dot"></span> MEMO AI, Inc.
          </div>
          <h1>
            Privacy Policy for <em>MemoLogs.</em>
          </h1>
          <p className="lede">
            This notice explains how MEMO AI, Inc. collects, uses, discloses,
            and protects personal information across MemoLogs websites,
            products, integrations, and AI-powered services.
          </p>
          <div className="privacy-meta" aria-label="Privacy policy metadata">
            <span>Last updated July 14, 2026</span>
            <a href="mailto:hello@memologs.com">hello@memologs.com</a>
          </div>
        </div>
      </section>

      <section className="sp-section privacy-section">
        <div className="wrap privacy-layout">
          <aside className="privacy-toc" aria-label="Privacy policy sections">
            <span className="privacy-toc-title">Sections</span>
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.label}
              </a>
            ))}
          </aside>

          <div className="privacy-content">
            {sections.map((section, index) => (
              <article id={section.id} className="privacy-card" key={section.id}>
                <span className="privacy-kicker">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
                {section.content}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
