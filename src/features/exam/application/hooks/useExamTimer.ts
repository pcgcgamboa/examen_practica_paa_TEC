import { useEffect, useState } from 'react';

export const useExamTimer = (initialTime: number, isRunning: boolean, onTimeUp: () => void) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setTimeRemaining((currentTime) => {
        if (currentTime <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }

        return currentTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, onTimeUp]);

  return timeRemaining;
};
