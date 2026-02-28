import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';

interface MathJaxProviderProps {
  children: React.ReactNode;
}

const mathJaxConfig = {
  loader: { load: ['[tex]/html'] },
  tex: {
    packages: { '[+]': ['html'] },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
  },
  startup: {
    typeset: false,
  },
};

const MathJaxProvider: React.FC<MathJaxProviderProps> = ({ children }) => {
  return (
    <MathJaxContext version={3} config={mathJaxConfig}>
      {children}
    </MathJaxContext>
  );
};

export default MathJaxProvider;
