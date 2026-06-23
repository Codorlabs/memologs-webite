'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from '@/lib/analytics';

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Load enabled platform pixels once on mount.
  useEffect(() => {
    analytics.load();
  }, []);

  // Fire a deduplicated PageView on first load and on every client-side route change.
  useEffect(() => {
    analytics.pageView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsProvider() {
  // useSearchParams must be wrapped in Suspense in the App Router.
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
