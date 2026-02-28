import React from 'react';
import MathJaxProvider from './providers/MathJaxProvider';
import AppShell from './AppShell';

const App: React.FC = () => {
  return (
    <MathJaxProvider>
      <AppShell />
    </MathJaxProvider>
  );
};

export default App;
