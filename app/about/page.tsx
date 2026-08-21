import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — The Marketing Decision Platform",
  description:
    "MemoLogs is a marketing decision platform built on causal proof and institutional memory. Why we exist, what we build, and the principles we build against.",
  openGraph: {
    type: "website",
    url: "/about",
    title: "About MemoLogs — The Marketing Decision Platform",
    description:
      "Marketing's tools got great at measuring. They never learned to remember. Why MemoLogs exists, and the principles behind it.",
  },
};

// AboutPage schema pointing back at the Organization node declared in the root
// layout — keeps the entity single-sourced so answer engines attribute these
// claims to the same company, not a second, unlinked one.
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://memologs.com/about#aboutpage",
  url: "https://memologs.com/about",
  name: "About MemoLogs",
  description:
    "MemoLogs is a marketing decision platform built on causal proof and institutional memory.",
  isPartOf: { "@id": "https://memologs.com/#website" },
  mainEntity: { "@id": "https://memologs.com/#organization" },
};

const PRODUCTS = [
  { n: "01", href: "/incrementality-iq", name: "Incrementality IQ", line: "Tri-model causal measurement — GeoTwin, CausalCore, and DiffLens have to agree before a number ships." },
  { n: "02", href: "/creative-iq", name: "Creative IQ", line: "Nine-signal fatigue scoring that catches a dying asset weeks before CPA reports the funeral." },
  { n: "03", href: "/audience-iq", name: "Audience IQ", line: "Causal-LTV agents that grade real buyers and sync to platforms — no identity graph required." },
  { n: "04", href: "/copilot", name: "AI Co-Pilot", line: "Source-cited answers on your own data, which decline to answer when the data can't support them." },
  { n: "05", href: "/memory-iq", name: "Memory IQ", line: "The decision record underneath it all — it warns you before you repeat a failure you already paid for." },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="subpage-hero" aria-labelledby="about-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">MemoLogs</Link> <span>›</span> About</div>

          <div className="eyebrow"><span className="dot"></span> About MemoLogs</div>
          <h1 id="about-h1">We built the decision layer <em>marketing was missing.</em></h1>
          <p className="lede">
            MemoLogs is a marketing decision platform built on two things the category never put together: <em>causal proof</em> and <em>institutional memory</em>. We exist because marketing&apos;s tools got extraordinarily good at measuring — and never learned to decide, or to remember what they decided last time.
          </p>
          <div className="iq-feature-chips">
            <span className="iq-fchip"><span className="iq-fchip-dot"></span>Causal by default</span>
            <span className="iq-fchip"><span className="iq-fchip-dot"></span>Flat fee, never % of spend</span>
            <span className="iq-fchip"><span className="iq-fchip-dot"></span>Memory that compounds</span>
          </div>
          <div className="cta-row iq-cta-row">
            <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot →</PilotCTA>
            <Link href="/how-it-works" className="btn btn-ghost btn-lg">See how it works</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY WE EXIST ═══════════ */}
      <section className="sp-section" aria-labelledby="about-why">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">01</span> Why we exist</span>
            <h2 className="section-title" id="about-why">Marketing&apos;s tools got great at measuring.<br />They never learned to <em>remember.</em></h2>
            <p className="section-sub">
              A modern marketing team runs more instrumentation than a mid-size bank — and still argues about what worked. Three failures compound underneath, and every one of them charges you twice: once when it happens, and again when it happens next year.
            </p>
          </div>

          <div className="sp-feats">
            <article className="sp-feat">
              <div className="sp-feat-num">01 — INFLATED</div>
              <h4>The number is wrong before you use it.</h4>
              <p>Platforms grade their own homework, so reported conversions arrive structurally over-counted. Every downstream budget call inherits that error — you aren&apos;t optimizing, you&apos;re calibrating on fiction.</p>
            </article>
            <article className="sp-feat">
              <div className="sp-feat-num">02 — LATE</div>
              <h4>The proof arrives after it matters.</h4>
              <p>Traditional media-mix modeling explains last quarter to this quarter&apos;s meeting. By readout day the market has moved twice, and the answer has already expired.</p>
            </article>
            <article className="sp-feat">
              <div className="sp-feat-num">03 — FORGOTTEN</div>
              <h4>The learning walks out the door.</h4>
              <p>The reasoning behind a call lives in a deck, a thread, and one person&apos;s head. When that person leaves, the organization pays full price to discover the same thing again.</p>
            </article>
          </div>

          <div className="about-thesis">
            <div className="about-thesis-tag">Our thesis</div>
            <p>
              Measurement without memory is a treadmill. Prove what actually worked, keep the reasoning attached to the result, and every quarter should start smarter than the last one — <em>that</em> is the product.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE BUILD ═══════════ */}
      <section className="sp-section alt" aria-labelledby="about-build">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">02</span> What we build</span>
            <h2 className="section-title" id="about-build">Five products. One signal graph.<br /><em>One memory.</em></h2>
            <p className="section-sub">
              Not five tools sold as a suite — five products reading and writing to the same causal record. Every verdict one product reaches becomes context the other four are allowed to use.
            </p>
          </div>

          <div className="about-stack">
            {PRODUCTS.map((p) => (
              <Link key={p.href} href={p.href} className="about-stack-item">
                <span className="about-pill">{p.n}</span>
                <span className="about-stack-body">
                  <b>{p.name}</b>
                  <em>{p.line}</em>
                </span>
                <span className="about-stack-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRINCIPLES ═══════════ */}
      <section className="sp-section" aria-labelledby="about-principles">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">03</span> Principles</span>
            <h2 className="section-title" id="about-principles">Five convictions we <em>build against.</em></h2>
            <p className="section-sub">
              These aren&apos;t values on a wall. Each one shows up as something the product refuses to do.
            </p>
          </div>

          <div className="sp-method">
            <h3>What we hold to</h3>
            <ol>
              <li>
                <div>
                  <b>Correlation is not a budget decision.</b>
                  <p>Every recommendation traces back to an experiment or a causal model — never to a last-click credit a platform assigned itself. If we can&apos;t show the counterfactual, we don&apos;t call it lift.</p>
                </div>
              </li>
              <li>
                <div>
                  <b>A system that can&apos;t be wrong can&apos;t be trusted.</b>
                  <p>Every verdict carries a trust state, and the platform declines when the data can&apos;t defend a conclusion. A confident answer on thin evidence is the most expensive thing software can hand a marketer.</p>
                </div>
              </li>
              <li>
                <div>
                  <b>The decision is the asset — not the dashboard.</b>
                  <p>We record what was decided, what it was based on, and how it turned out. Charts describe the past; a decision record is what lets the next person inherit judgment instead of re-deriving it.</p>
                </div>
              </li>
              <li>
                <div>
                  <b>Our incentives shouldn&apos;t move your budget.</b>
                  <p>Flat fee, never a percentage of media spend. We get paid identically whether the honest answer is to scale a channel or to shut it off — which is the only way &ldquo;spend less here&rdquo; stays a sentence we can say.</p>
                </div>
              </li>
              <li>
                <div>
                  <b>Your data trains your memory, not our model.</b>
                  <p>Customer integration data is not used to train generalized AI or machine-learning models unless a customer separately agrees to it. What your account teaches the system stays yours.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW WE OPERATE ═══════════ */}
      <section className="sp-section alt" aria-labelledby="about-operate">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">04</span> How we operate</span>
            <h2 className="section-title" id="about-operate">Easier to judge us by what we <em>won&apos;t</em> do.</h2>
            <p className="section-sub">
              Most of what shapes a platform is decided by what it rules out. Here are both columns, plainly.
            </p>
          </div>

          <div className="about-stance">
            <div className="about-stance-col about-stance-do">
              <div className="about-stance-title"><span className="about-stance-mark">✓</span> What we do</div>
              <ul className="about-stance-list">
                <li><b>Wire the integrations ourselves.</b> API-first, no rip-and-replace, no engineering sprint on your side.</li>
                <li><b>Prove it on your own account.</b> A 90-day pilot with a causal verdict inside five weeks, not a twelve-week readout.</li>
                <li><b>Show our work.</b> Source-cited answers, per-channel measured-vs-claimed lift, and the assumptions behind both.</li>
                <li><b>Price flat.</b> One fee, no seat licenses, no percentage of spend.</li>
                <li><b>Stay reversible.</b> Rollback anytime in the first 30 days, and GDPR-ready from day one.</li>
              </ul>
            </div>
            <div className="about-stance-col about-stance-dont">
              <div className="about-stance-title"><span className="about-stance-mark">✕</span> What we won&apos;t do</div>
              <ul className="about-stance-list">
                <li><b>Take a cut of your media spend.</b> It quietly pays us to tell you to spend more.</li>
                <li><b>Build or sell an identity graph.</b> Audience work is done causally, without one.</li>
                <li><b>Train generalized models on your data.</b> Not without your separate, explicit agreement.</li>
                <li><b>Ship a number the model can&apos;t defend.</b> We would rather return &ldquo;not enough signal&rdquo; than a confident guess.</li>
                <li><b>Sell a dashboard and call it a decision.</b> If it doesn&apos;t change what you do next, it isn&apos;t the product.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MANIFESTO LINE ═══════════ */}
      <section className="sp-section" aria-label="What we are for">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>Know what actually works. Every campaign. Every dollar.</p>
            <cite>The MemoLogs operating principle</cite>
          </blockquote>
        </div>
      </section>

      {/* ═══════════ THE COMPANY ═══════════ */}
      <section className="sp-section alt" aria-labelledby="about-company">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">05</span> The company</span>
            <h2 className="section-title" id="about-company">The details, on the record.</h2>
          </div>

          <dl className="about-facts">
            <div className="about-fact">
              <dt>Legal entity</dt>
              <dd>MEMO AI, Inc.</dd>
            </div>
            <div className="about-fact">
              <dt>Operating as</dt>
              <dd>MemoLogs</dd>
            </div>
            <div className="about-fact">
              <dt>Category</dt>
              <dd>Marketing decision platform</dd>
            </div>
            <div className="about-fact">
              <dt>Engagement model</dt>
              <dd>90-day pilot, flat fee</dd>
            </div>
            <div className="about-fact">
              <dt>Deployment</dt>
              <dd>API-first · GDPR-ready</dd>
            </div>
            <div className="about-fact">
              <dt>General enquiries</dt>
              <dd><a href="mailto:hello@memologs.com">hello@memologs.com</a></dd>
            </div>
          </dl>

          <p className="about-legal-note">
            How we handle data is written down, not implied — see the <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms and Conditions</Link>.
          </p>

          <div className="sp-cta-inline">
            <div>
              <h3>See it run on your own numbers.</h3>
              <p>A 30-minute scoping call, then a 90-day pilot measured the same way every case study on this site was.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg">Book a pilot →</PilotCTA>
          </div>

          <div className="sp-nav-next">
            <span>Next → <Link href="/how-it-works">How it works</Link></span>
            <span><Link href="/case-studies">Case studies</Link></span>
          </div>
        </div>
      </section>
    </>
  );
}
