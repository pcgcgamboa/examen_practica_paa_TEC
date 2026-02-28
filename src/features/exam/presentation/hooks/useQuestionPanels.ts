import { useState } from 'react';

export const useQuestionPanels = () => {
  const [showHint, setShowHint] = useState(false);
  const [showFormulas, setShowFormulas] = useState(false);

  return {
    showHint,
    showFormulas,
    toggleHint: () => setShowHint((value) => !value),
    toggleFormulas: () => setShowFormulas((value) => !value),
  };
};
