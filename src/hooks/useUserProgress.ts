import { useState, useEffect } from "react";

export function useUserProgress() {
  const [userLevel, setUserLevel] = useState(1);
  const [userProgress, setUserProgress] = useState(0);

  useEffect(() => {
    // Load user progress from localStorage on component mount
    const savedLevel = localStorage.getItem("userLevel");
    const savedProgress = localStorage.getItem("userProgress");
    if (savedLevel) setUserLevel(parseInt(savedLevel, 10));
    if (savedProgress) setUserProgress(parseInt(savedProgress, 10));
  }, []);

  const updateUserProgress = (newProgress: number, newLevel?: number) => {
    setUserProgress(newProgress);
    localStorage.setItem("userProgress", newProgress.toString());

    if (newLevel) {
      setUserLevel(newLevel);
      localStorage.setItem("userLevel", newLevel.toString());
    }
  };

  return { userLevel, userProgress, updateUserProgress };
}
