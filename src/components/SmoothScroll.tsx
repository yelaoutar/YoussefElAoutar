
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Cleanup
    return () => {
      AOS.refresh();
    };
  }, []);

  return <>{children}</>;
};
