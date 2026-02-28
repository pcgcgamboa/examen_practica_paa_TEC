import React from 'react';
import { MathJax } from 'better-react-mathjax';
import DOMPurify from 'dompurify';

interface MathJaxHtmlProps {
  text: string;
  className?: string;
  allowHtml?: boolean;
}

const MathJaxHtml: React.FC<MathJaxHtmlProps> = ({
  text,
  className,
  allowHtml = true,
}) => {
  if (!text) {
    return <span className={className}></span>;
  }

  const sanitizeHtml = (html: string) => {
    if (typeof window !== 'undefined') {
      return DOMPurify.sanitize(html);
    }

    return html;
  };

  const hasMathJax = /\\\(.*?\\\)|\\\[.*?\\\]|\$.*?\$|\\begin\{.*?\}/.test(text);

  if (allowHtml && (text.includes('<') || text.includes('&lt;'))) {
    const sanitizedHtml = sanitizeHtml(text);

    if (hasMathJax) {
      return (
        <MathJax className={className} dynamic>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </MathJax>
      );
    }

    return <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
  }

  return (
    <MathJax className={className} dynamic>
      {text}
    </MathJax>
  );
};

export default MathJaxHtml;
