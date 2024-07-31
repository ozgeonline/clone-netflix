"use client"
import React, { Suspense, useState, useEffect } from 'react';

interface SuspenseWithDelayProps {
  delay?: number;
  fallback: React.ReactNode;
  children: React.ReactNode;
}

const SuspenseWithDelay: React.FC<SuspenseWithDelayProps> = ({ delay, fallback, children }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Suspense fallback={showFallback ? fallback : null}>
      {children}
    </Suspense>
  );
};

export default SuspenseWithDelay;
