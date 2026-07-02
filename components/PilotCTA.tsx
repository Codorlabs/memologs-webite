'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { submitLead } from '@/lib/submitLead';

type Props = {
  className?: string;
  children: React.ReactNode;
  modalTitle?: string;
  modalSubtitle?: string;
};

export default function PilotCTA({
  className,
  children,
  modalTitle = 'Start a 90-day pilot',
  modalSubtitle = "Tell us about your account. We'll reach out within one business day to scope a pilot.",
}: Props) {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [spend, setSpend] = useState('');
  const [broken, setBroken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  function close() {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setErrorMessage('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setCompany('');
      setSpend('');
      setBroken('');
    }, 200);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const result = await submitLead({
      firstName,
      lastName,
      email,
      organization: company,
      spend,
      message: broken,
    });

    setIsLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.error || 'Failed to submit. Please try again.');
    }
  }

  // Portal the modal to document.body so the fixed-position overlay
  // always covers the full viewport — never trapped inside a card's
  // stacking context (transform / overflow / etc).
  const modal =
    open && typeof document !== 'undefined'
      ? createPortal(
          <div className="pm-overlay" onClick={close} role="dialog" aria-modal="true" aria-label={modalTitle}>
            <div className="pm-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pm-close" onClick={close} aria-label="Close">×</button>

            {submitted ? (
              <div className="cc-thank">
                <div className="cc-thank-icon">✓</div>
                <h3>You&apos;re on the list.</h3>
                <p>We&apos;ll reach out within one business day to schedule your audit call.</p>
                <button type="button" className="btn btn-ghost pm-thank-close" onClick={close}>Close</button>
              </div>
            ) : (
              <>
                <div className="pm-head">
                  <h3 className="pm-title">{modalTitle}</h3>
                  <p className="pm-sub">{modalSubtitle}</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="cc-fields">
                    <label>
                      <span>First name</span>
                      <input
                        type="text"
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
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }}
                        placeholder="you@company.com"
                        required
                        autoComplete="email"
                        disabled={isLoading}
                      />
                    </label>

                    <label>
                      <span>Company</span>
                      <input
                        type="text"
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
                        rows={3}
                        value={broken}
                        onChange={(e) => { setBroken(e.target.value); setErrorMessage(''); }}
                        placeholder="CPA up 40%. Can't tell why."
                        disabled={isLoading}
                      ></textarea>
                    </label>

                    {errorMessage && (
                      <div className="cc-error" role="alert"><p>{errorMessage}</p></div>
                    )}

                    <button type="submit" className="btn btn-primary cc-submit" disabled={isLoading}>
                      {isLoading ? 'Submitting…' : 'Book the call →'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body,
      )
      : null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {modal}
    </>
  );
}
