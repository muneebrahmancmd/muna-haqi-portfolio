"use client";

import { useEffect, useState } from "react";

// Header clock: current time in Pakistan (Asia/Karachi), HH:MM, updated every 30s.
function pkTime(): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
}

export function Clock() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    setTime(pkTime());
    const id = setInterval(() => setTime(pkTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <span className="lg:hidden p-2 uppercase transition-colors duration-300 ease-out motion-reduce:transition-none">
        <span>{time}</span>
      </span>
      <span className="hidden lg:inline p-2 uppercase">
        <span>GMT+5 PK {time}</span>
      </span>
    </>
  );
}
