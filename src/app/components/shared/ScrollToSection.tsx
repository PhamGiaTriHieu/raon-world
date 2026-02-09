'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const ScrollToSection = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const sectionId = hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});

          // Remove hash from URL after scrolling
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname);
          }, 500);
        }
      }, 100);
    }
  }, [router]);

  return null;
};

export default ScrollToSection;
