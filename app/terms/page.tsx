import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | MemoLogs",
  description:
    "Terms and Conditions for MEMO AI, Inc. and the MemoLogs website and services.",
  alternates: { canonical: "https://memologs.ai/terms" },
};

const sections = [
  {
    id: "agreement",
    label: "Agreement",
    title: "Agreement to these terms",
    content: (
      <>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern access to and
          use of the websites, products, features, content, forms, and services
          provided by MEMO AI, Inc. (doing business as MemoLogs)
          (&quot;MEMO AI,&quot; &quot;MemoLogs,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using MemoLogs, creating an account, requesting a
          pilot, or clicking to accept these Terms, you agree to be bound by
          them. If you use MemoLogs on behalf of a company or other entity, you
          represent that you have authority to bind that entity, and
          &quot;you&quot; refers to that entity.
        </p>
        <p>
          If you or your organization has a separate written agreement with
          MEMO AI, that agreement controls to the extent it conflicts with these
          Terms for the applicable services.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    label: "Accounts",
    title: "Accounts and responsibilities",
    content: (
      <>
        <p>
          You may need an account to use certain MemoLogs features. You agree to
          provide accurate, current, and complete information and to keep that
          information updated.
        </p>
        <ul>
          <li>
            You are responsible for maintaining the confidentiality of account
            credentials and for all activity that occurs under your account.
          </li>
          <li>
            You must promptly notify us if you suspect unauthorized access,
            credential compromise, or misuse of your account.
          </li>
          <li>
            You are responsible for the users, permissions, integrations, data
            sources, and destinations that you authorize.
          </li>
          <li>
            You may not share accounts in a way that avoids license, security,
            or access controls.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "access",
    label: "Access",
    title: "Access to the site and services",
    content: (
      <>
        <p>
          Subject to these Terms, MEMO AI grants you a limited, revocable,
          non-exclusive, non-transferable, non-sublicensable right to access and
          use MemoLogs for your internal business purposes.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>Copy, modify, distribute, sell, lease, or sublicense MemoLogs.</li>
          <li>
            Reverse engineer, decompile, disassemble, or attempt to discover
            source code or underlying models except where law permits.
          </li>
          <li>
            Interfere with, disrupt, overload, scrape, crawl, probe, scan, or
            test the vulnerability of MemoLogs without authorization.
          </li>
          <li>
            Bypass usage limits, access controls, security features, or
            authentication systems.
          </li>
          <li>
            Use MemoLogs to build a competing product or benchmark MemoLogs for
            publication without our written consent.
          </li>
          <li>
            Use MemoLogs in violation of applicable laws, platform terms,
            advertising policies, privacy obligations, or third-party rights.
          </li>
        </ul>
        <p>
          We may modify, suspend, or discontinue any part of MemoLogs at any
          time. We are not obligated to provide maintenance or support unless a
          written agreement says otherwise.
        </p>
      </>
    ),
  },
  {
    id: "services-ai",
    label: "AI services",
    title: "AI features, outputs, and marketing decisions",
    content: (
      <>
        <p>
          MemoLogs provides AI-powered marketing intelligence, including causal
          measurement, creative analysis, audience intelligence, recommendations,
          reporting, alerts, and decision memory. AI-generated outputs may be
          probabilistic and can contain errors, omissions, or outdated
          information.
        </p>
        <ul>
          <li>
            You are responsible for reviewing outputs before relying on them or
            using them in campaigns, budgets, customer communications, or
            business decisions.
          </li>
          <li>
            MemoLogs does not provide legal, financial, tax, medical, or other
            regulated professional advice.
          </li>
          <li>
            You remain responsible for compliance with advertising platform
            rules, privacy laws, consumer protection laws, and your own
            obligations to customers and users.
          </li>
          <li>
            Unless separately agreed, we do not use customer integration data or
            customer confidential information to train generalized AI or machine
            learning models.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "customer-data",
    label: "User content",
    title: "User content, customer data, and integrations",
    content: (
      <>
        <p>
          &quot;User Content&quot; means information, data, files, prompts,
          instructions, creative assets, campaign data, audience data,
          conversion data, customer data, warehouse data, feedback, and other
          materials submitted to or made available through MemoLogs by you or on
          your behalf.
        </p>
        <p>
          You retain ownership of your User Content. You grant MEMO AI a
          worldwide, non-exclusive, royalty-free license to host, process,
          transmit, reproduce, display, modify, and use User Content as needed
          to provide, secure, support, maintain, and improve MemoLogs and as
          otherwise permitted by your agreement with us.
        </p>
        <p>You represent and warrant that:</p>
        <ul>
          <li>
            You have all rights, permissions, notices, consents, and legal bases
            necessary to provide User Content to MemoLogs.
          </li>
          <li>
            Your use of integrations and destinations complies with applicable
            third-party terms and privacy obligations.
          </li>
          <li>
            User Content does not infringe, misappropriate, or violate any
            intellectual property, privacy, publicity, contractual, or other
            right.
          </li>
          <li>
            You will not provide sensitive, regulated, or restricted data unless
            it is necessary for the services and allowed under your agreement
            with MEMO AI.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    label: "Acceptable use",
    title: "Acceptable use policy",
    content: (
      <>
        <p>You may not use MemoLogs to:</p>
        <ul>
          <li>Violate laws, regulations, sanctions, export controls, or rights.</li>
          <li>
            Send spam, deceptive communications, malware, phishing content, or
            harmful code.
          </li>
          <li>
            Harass, abuse, discriminate, defame, threaten, exploit, or harm
            others.
          </li>
          <li>
            Generate, support, or optimize unlawful, deceptive, discriminatory,
            or harmful advertising practices.
          </li>
          <li>
            Process personal information without required rights, notices,
            consents, contracts, or legal bases.
          </li>
          <li>
            Attempt to extract model weights, system prompts, hidden
            instructions, security controls, or non-public platform information.
          </li>
          <li>
            Use automated access, scraping, data mining, or load testing without
            written authorization.
          </li>
        </ul>
        <p>
          We may investigate suspected violations and may suspend or terminate
          access where we reasonably believe continued use creates risk to MEMO
          AI, customers, third parties, or the public.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    label: "Third parties",
    title: "Third-party services, links, and data sources",
    content: (
      <>
        <p>
          MemoLogs may connect to or interoperate with third-party services such
          as advertising platforms, analytics providers, commerce systems, data
          warehouses, CRMs, cloud services, identity providers, payment
          processors, and AI infrastructure providers.
        </p>
        <p>
          Third-party services are not controlled by MEMO AI. Your use of them
          may be governed by separate terms, privacy policies, API rules,
          platform policies, fees, access limits, and data restrictions. MEMO AI
          is not responsible for third-party services, content, data, policies,
          acts, omissions, or availability.
        </p>
      </>
    ),
  },
  {
    id: "ownership",
    label: "Ownership",
    title: "Ownership, intellectual property, and feedback",
    content: (
      <>
        <p>
          MemoLogs, including software, interfaces, designs, models, workflows,
          content, documentation, trade names, trademarks, service marks, and
          other technology, is owned by MEMO AI or its licensors and is
          protected by intellectual property and other laws.
        </p>
        <p>
          Except for the limited access rights expressly granted in these Terms,
          MEMO AI reserves all rights in MemoLogs. You may not remove, obscure,
          or alter proprietary notices.
        </p>
        <p>
          If you provide feedback, suggestions, or ideas, you grant MEMO AI a
          perpetual, irrevocable, worldwide, royalty-free license to use that
          feedback without restriction or compensation.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    label: "Payments",
    title: "Fees, payment, and taxes",
    content: (
      <>
        <p>
          Some MemoLogs services may be provided under an order form, pilot
          agreement, subscription, or other written agreement. Fees, billing
          terms, renewal terms, taxes, and cancellation rights are governed by
          the applicable agreement or checkout flow.
        </p>
        <p>
          Unless stated otherwise, fees are non-refundable and exclude taxes,
          duties, levies, and similar assessments. You are responsible for taxes
          other than taxes based on MEMO AI&apos;s net income.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    label: "Privacy",
    title: "Privacy and data protection",
    content: (
      <>
        <p>
          Our collection and use of personal information is described in the{" "}
          <Link href="/privacy">MemoLogs Privacy Policy</Link>. Customer data
          processing may also be governed by a data processing agreement,
          customer agreement, or other written terms between you and MEMO AI.
        </p>
        <p>
          You are responsible for providing legally required notices, obtaining
          legally required consents, and honoring legally required privacy
          choices for personal information that you provide to MemoLogs.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    label: "Disclaimers",
    title: "Disclaimers",
    content: (
      <>
        <p>
          MemoLogs is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. To the maximum extent permitted by law, MEMO AI
          disclaims all warranties, whether express, implied, statutory, or
          otherwise, including warranties of merchantability, fitness for a
          particular purpose, title, non-infringement, accuracy, availability,
          security, and uninterrupted or error-free operation.
        </p>
        <p>
          MEMO AI does not warrant that MemoLogs, AI outputs, recommendations,
          measurements, forecasts, reports, integrations, or third-party data
          will be accurate, complete, current, secure, or suitable for your
          particular use case. You are responsible for independently evaluating
          results and maintaining appropriate backups and controls.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    label: "Liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, MEMO AI and its officers,
          directors, employees, contractors, affiliates, licensors, and service
          providers will not be liable for indirect, incidental, special,
          consequential, exemplary, or punitive damages, or for lost profits,
          lost revenue, lost data, lost goodwill, business interruption, or
          substitute services.
        </p>
        <p>
          To the maximum extent permitted by law, MEMO AI&apos;s total liability
          for any claim arising out of or relating to these Terms or MemoLogs
          will not exceed the greater of (a) the amounts you paid to MEMO AI for
          the service giving rise to the claim in the twelve months before the
          event giving rise to liability, or (b) one hundred U.S. dollars.
        </p>
        <p>
          These limits apply regardless of the legal theory and even if a remedy
          fails of its essential purpose. Some jurisdictions do not allow certain
          limitations, so some limitations may not apply to you.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    label: "Indemnity",
    title: "Indemnification",
    content: (
      <>
        <p>
          You will defend, indemnify, and hold harmless MEMO AI and its
          officers, directors, employees, contractors, affiliates, licensors, and
          service providers from and against claims, damages, losses,
          liabilities, costs, and expenses, including reasonable attorneys&apos;
          fees, arising out of or related to:
        </p>
        <ul>
          <li>Your use of MemoLogs or AI outputs.</li>
          <li>Your User Content, integrations, destinations, or instructions.</li>
          <li>Your violation of these Terms or applicable law.</li>
          <li>
            Your infringement or violation of third-party intellectual property,
            privacy, publicity, contractual, or other rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    label: "Termination",
    title: "Term and termination",
    content: (
      <>
        <p>
          These Terms remain in effect while you access or use MemoLogs. You may
          stop using MemoLogs at any time. We may suspend or terminate your
          access if you violate these Terms, create risk, fail to pay amounts
          owed, or if we discontinue the applicable service.
        </p>
        <p>
          Upon termination, your right to access MemoLogs ends immediately. Any
          provisions that by their nature should survive termination will
          survive, including ownership, disclaimers, limitations of liability,
          indemnification, dispute resolution, and general provisions.
        </p>
      </>
    ),
  },
  {
    id: "copyright",
    label: "Copyright",
    title: "Copyright and intellectual property complaints",
    content: (
      <>
        <p>
          If you believe content available through MemoLogs infringes your
          copyright or other intellectual property rights, contact us at{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a> with
          enough information for us to evaluate the claim, including the work
          claimed to be infringed, the allegedly infringing material, your
          contact information, and statements required by applicable law.
        </p>
        <p>
          We may remove or disable access to material we believe may infringe
          rights and may terminate repeat infringers where appropriate.
        </p>
      </>
    ),
  },
  {
    id: "disputes",
    label: "Disputes",
    title: "Governing law and dispute resolution",
    content: (
      <>
        <p>
          Except where prohibited by law or where a separate written agreement
          states otherwise, these Terms are governed by the laws of the State of
          California, without regard to conflict-of-law rules.
        </p>
        <p>
          Before filing a formal claim, you and MEMO AI agree to try to resolve
          the dispute informally by emailing{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a>. If the
          dispute is not resolved within 30 days, either party may start binding
          arbitration, except for claims that may be brought in small claims
          court or for equitable relief related to intellectual property,
          confidentiality, or unauthorized access.
        </p>
        <p>
          Arbitration will be conducted on an individual basis. You and MEMO AI
          waive the right to a jury trial and the right to participate in a
          class action, class arbitration, private attorney general action, or
          other representative proceeding to the fullest extent permitted by
          law.
        </p>
        <p>
          You may opt out of this arbitration agreement within 30 days after you
          first accept these Terms by emailing{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a> with your
          name, organization, the email associated with your account, and a clear
          statement that you opt out of arbitration.
        </p>
      </>
    ),
  },
  {
    id: "general",
    label: "General",
    title: "General terms and contact",
    content: (
      <>
        <p>
          We may update these Terms from time to time. The updated version will
          be indicated by the &quot;Last updated&quot; date and will be
          effective when posted unless a later effective date is stated.
          Continued use of MemoLogs after updated Terms become effective means
          you accept the updated Terms.
        </p>
        <p>
          You may not assign these Terms without our written consent. We may
          assign these Terms in connection with a merger, acquisition,
          reorganization, financing, sale of assets, or by operation of law.
        </p>
        <p>
          If any provision is found unenforceable, the remaining provisions will
          remain in effect. Failure to enforce a provision is not a waiver. These
          Terms, together with any applicable written agreement and policies
          referenced here, are the entire agreement between you and MEMO AI for
          the subject matter covered.
        </p>
        <p>
          For questions about these Terms, contact MEMO AI, Inc. at{" "}
          <a href="mailto:hello@memologs.com">hello@memologs.com</a>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="privacy-page">
      <section className="subpage-hero privacy-hero">
        <div className="wrap">
          <div className="sp-breadcrumb">
            <Link href="/">MemoLogs</Link> <span>›</span> Terms
          </div>
          <div className="eyebrow">
            <span className="dot"></span> MEMO AI, Inc.
          </div>
          <h1>
            Terms and Conditions for <em>MemoLogs.</em>
          </h1>
          <p className="lede">
            These Terms govern access to the MemoLogs website, products,
            integrations, AI features, and related services provided by MEMO AI,
            Inc.
          </p>
          <div className="privacy-meta" aria-label="Terms metadata">
            <span>Version 1.0</span>
            <span>Last updated July 14, 2026</span>
            <a href="mailto:hello@memologs.com">hello@memologs.com</a>
          </div>
        </div>
      </section>

      <section className="sp-section privacy-section">
        <div className="wrap privacy-layout">
          <aside className="privacy-toc" aria-label="Terms sections">
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
