import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Container, Theme } from './settings/types';
import { NavigationProvider } from './components/context/NavigationContext';
import { WaitlistProvider } from './components/context/WaitlistContext';
import { WaitlistModal } from './components/waitlist/WaitlistModal';
import { LandingPage } from './components/generated/LandingPage';
import { AboutPage } from './components/pages/AboutPage';
import { CareersPage } from './components/pages/CareersPage';
import { PressPage } from './components/pages/PressPage';
import { ContactPage } from './components/pages/ContactPage';
import { DocumentationPage } from './components/pages/DocumentationPage';
import { HelpCenterPage } from './components/pages/HelpCenterPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/pages/TermsOfServicePage';
import { CookiePolicyPage } from './components/pages/CookiePolicyPage';
import { GdprPage } from './components/pages/GdprPage';
import { ScrollToTop } from './components/utils/ScrollToTop';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const appContent = useMemo(() => {
    return (
      <WaitlistProvider>
        <NavigationProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/gdpr" element={<GdprPage />} />
            </Routes>
          </Router>
          <WaitlistModal />
          <Toaster position="top-center" richColors />
        </NavigationProvider>
      </WaitlistProvider>
    );
  }, []);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {appContent}
      </div>
    );
  } else {
    return appContent;
  }
}

export default App;