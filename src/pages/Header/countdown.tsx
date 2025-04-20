import React, { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (!updated) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="text-center text-xl text-red-500">Đã hết thời gian!</div>
    );
  }

  const timeItems = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-x-4 md:gap-x-8 py-3 md:py-6 px-6 md:px-14 bg-white rounded-xl ">
      {timeItems.map((item, index) => (
        <div className="flex items-center gap-x-4 md:gap-x-8 justify-center">
          <div key={index} className="text-center w-11 md:w-24">
            <div className=" text-black font-playfair text-4xl md:text-6xl font-black">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-base font-bold text-black mt-3">
              {item.label}
            </div>
          </div>
          {index < timeItems.length - 1 && (
            <span className=" text-5xl text-black pb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
