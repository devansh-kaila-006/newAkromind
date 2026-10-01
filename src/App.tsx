/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import AkrotutionPage from './pages/AkrotutionPage';
import AkroplacementPage from './pages/AkroplacementPage';
import AkroholidaysPage from './pages/AkroholidaysPage';
import AkromindPage from './pages/AkromindPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="why-us" element={<Navigate to="/why-choose-us" replace />} />
          <Route path="whyus" element={<Navigate to="/why-choose-us" replace />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Canonical Verticals */}
          <Route path="verticals/akrotution" element={<AkrotutionPage />} />
          <Route path="verticals/akroplacement" element={<AkroplacementPage />} />
          <Route path="verticals/akroholidays" element={<AkroholidaysPage />} />
          <Route path="verticals/akromind" element={<AkromindPage />} />

          {/* Helpful Short URL Redirects for Direct Access & Marketing Links */}
          <Route path="akromind" element={<Navigate to="/verticals/akromind" replace />} />
          <Route path="akrotution" element={<Navigate to="/verticals/akrotution" replace />} />
          <Route path="akroplacement" element={<Navigate to="/verticals/akroplacement" replace />} />
          <Route path="akroholidays" element={<Navigate to="/verticals/akroholidays" replace />} />
          <Route path="counseling" element={<Navigate to="/verticals/akromind" replace />} />
          <Route path="counselling" element={<Navigate to="/verticals/akromind" replace />} />
          <Route path="career-counselling" element={<Navigate to="/verticals/akromind" replace />} />
          <Route path="tuition" element={<Navigate to="/verticals/akrotution" replace />} />
          <Route path="tution" element={<Navigate to="/verticals/akrotution" replace />} />
          <Route path="placement" element={<Navigate to="/verticals/akroplacement" replace />} />
          <Route path="jobs" element={<Navigate to="/verticals/akroplacement" replace />} />
          <Route path="holidays" element={<Navigate to="/verticals/akroholidays" replace />} />
          <Route path="trips" element={<Navigate to="/verticals/akroholidays" replace />} />
          <Route path="stranger-trips" element={<Navigate to="/verticals/akroholidays" replace />} />

          {/* Legal Pages */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />

          {/* Fallback Catch-all: Redirect unknown routes cleanly to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
