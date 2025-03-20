import { useEffect, useState } from "react";

interface Props {
  endDate: Date;
}

export default function ExpiryCountdown({ endDate }: Props) {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();
      if (diff <= 0) {
        setRemainingTime("");
        return;
      }
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setRemainingTime(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return <>{remainingTime}</>;
}
