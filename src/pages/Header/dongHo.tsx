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
    <div className="flex items-center justify-center gap-4  py-4 px-8 bg-white rounded-xl">
      {timeItems.map((item, index) => (
        <div className="flex items-center gap-6">
          <div key={index} className="text-center ">
            <div className=" text-gray-700 rounded-xl text-5xl font-bold">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-md font-semibold text-black mt-1">{item.label}</div>
          </div>
          <span className=" text-5xl text-black pb-4">:</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
