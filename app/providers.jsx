'use client';

import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { WaitlistModalProvider } from '@/src_12/contexts/WaitlistModalContext';

function PostHogInit() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        defaults: '2025-05-24',
        capture_exceptions: true,
      });
    }
  }, []);
  return null;
}

export default function Providers({ children }) {
  return (
    <WaitlistModalProvider>
      <PostHogInit />
      {children}
    </WaitlistModalProvider>
  );
}
