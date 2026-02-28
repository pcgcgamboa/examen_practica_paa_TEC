import React from 'react';
import MathJaxProvider from './providers/MathJaxProvider';
import AppShell from './AppShell';
import CookieConsent from '../shared/components/CookieConsent/CookieConsent';

const App: React.FC = () => {
  return (
    <MathJaxProvider>
      <AppShell />
      <CookieConsent />
    </MathJaxProvider>
  );
};

export default App;
