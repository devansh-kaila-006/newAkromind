/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="verticals/akrotution" element={<AkrotutionPage />} />
          <Route path="verticals/akroplacement" element={<AkroplacementPage />} />
          <Route path="verticals/akroholidays" element={<AkroholidaysPage />} />
          <Route path="verticals/akromind" element={<AkromindPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          {/* Add other routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
