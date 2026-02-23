// MathJaxText.tsx
import React from 'react';
import { MathJax } from 'better-react-mathjax';
import DOMPurify from 'dompurify';

interface MathJaxHtmlTextProps {
  text: string;
  className?: string;
  allowHtml?: boolean;
}

const MathJaxHtmlText: React.FC<MathJaxHtmlTextProps> = ({ 
  text, 
  className, 
  allowHtml = true 
}) => {
  // NUEVO: Validar que text existe y no es null/undefined
  if (!text || text === null || text === undefined) {
    return <span className={className}></span>;
  }

  // Sanitizar HTML para prevenir XSS
  const sanitizeHtml = (html: string) => {
    if (typeof window !== 'undefined') {
      return DOMPurify.sanitize(html);
    }
    return html; // Para SSR
  };

  // Detectar si el texto contiene expresiones MathJax
  const hasMathJax = /\\\(.*?\\\)|\\\[.*?\\\]|\$.*?\$|\\begin\{.*?\}/.test(text);

  if (allowHtml && (text.includes('<') || text.includes('&lt;'))) {
    // Contiene HTML, procesar con sanitización
    const sanitizedHtml = sanitizeHtml(text);
    
    if (hasMathJax) {
      // Si también tiene MathJax, usar MathJax con HTML
      return (
        <MathJax className={className} dynamic>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </MathJax>
      );
    }
    
    // Solo HTML
    return (
      <div 
        className={className}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }} 
      />
    );
  }

  // Solo texto/MathJax
  return (
    <MathJax className={className} dynamic>
      {text}
    </MathJax>
  );
};

export default MathJaxHtmlText;