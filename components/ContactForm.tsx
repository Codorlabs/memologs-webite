'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="cc-form cc-thank">
        <div className="cc-thank-icon">✓</div>
        <h3>You&apos;re on the list.</h3>
        <p>We&apos;ll reach out within one business day to schedule your audit call. Expect a short prep email first so you get the most from the 30 minutes.</p>
      </div>
    );
  }

  return (
    <form className="cc-form" onSubmit={handleSubmit} noValidate>
      <div className="cc-fields">
        <label>
          <span>Work email</span>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            autoComplete="email"
          />
        </label>

        <label>
          <span>Company</span>
          <input
            type="text"
            name="company"
            placeholder="Acme, Inc."
            required
            autoComplete="organization"
          />
        </label>

        <label>
          <span>Monthly media spend</span>
          <select name="spend" required>
            <option value="">Select range</option>
            <option value="100-250k">$100K – $250K</option>
            <option value="250-500k">$250K – $500K</option>
            <option value="500k-1m">$500K – $1M</option>
            <option value="1m-3m">$1M – $3M</option>
            <option value="3m+">$3M+</option>
          </select>
        </label>

        <label>
          <span>What&apos;s broken? <em>(optional)</em></span>
          <textarea
            name="broken"
            rows={4}
            placeholder="CPA up 40%. Can't tell why. Attribution's a mess."
          ></textarea>
        </label>

        <button type="submit" className="btn btn-primary cc-submit">
            Book the call →
        </button>
        <p className="cc-fine">We respond within one business day. No sequences, no bots.</p>
      </div>

      
    </form>
  );
}
