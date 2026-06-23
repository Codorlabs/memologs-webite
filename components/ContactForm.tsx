'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/submitLead';
import { analytics } from '@/lib/analytics';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [spend, setSpend] = useState('');
  const [broken, setBroken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const result = await submitLead({
      firstName,
      lastName,
      email,
      phone,
      organization: company,
      spend,
      message: broken,
    });

    setIsLoading(false);
    if (result.ok) {
      analytics.track(
        'Lead',
        { contentName: 'Contact Form — Book a Call', currency: 'USD', spend },
        { email, phone, firstName, lastName },
      );
      setSubmitted(true);
    } else {
      setErrorMessage(result.error || 'Failed to submit. Please try again.');
    }
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
          <span>First name</span>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value); setErrorMessage(''); }}
            placeholder="Jane"
            required
            autoComplete="given-name"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Last name</span>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value); setErrorMessage(''); }}
            placeholder="Doe"
            required
            autoComplete="family-name"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Work email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }}
            placeholder="you@company.com"
            required
            autoComplete="email"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Phone <em>(optional)</em></span>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErrorMessage(''); }}
            placeholder="+1 555 123 4567"
            autoComplete="tel"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Company</span>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => { setCompany(e.target.value); setErrorMessage(''); }}
            placeholder="Acme, Inc."
            required
            autoComplete="organization"
            disabled={isLoading}
          />
        </label>

        <label>
          <span>Monthly media spend</span>
          <select
            name="spend"
            value={spend}
            onChange={(e) => { setSpend(e.target.value); setErrorMessage(''); }}
            required
            disabled={isLoading}
          >
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
            value={broken}
            onChange={(e) => { setBroken(e.target.value); setErrorMessage(''); }}
            placeholder="CPA up 40%. Can't tell why. Attribution's a mess."
            disabled={isLoading}
          ></textarea>
        </label>

        {errorMessage && (
          <div className="cc-error" role="alert">
            <p>{errorMessage}</p>
          </div>
        )}

        <button type="submit" className="btn btn-primary cc-submit" disabled={isLoading}>
          {isLoading ? 'Submitting…' : 'Book the call →'}
        </button>
        <p className="cc-fine">We respond within one business day. No sequences, no bots.</p>
      </div>
    </form>
  );
}
