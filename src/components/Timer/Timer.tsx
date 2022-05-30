import React from 'react';
import moment from 'moment';

import './Timer.css';

export interface TimerProps {
  duration?: number;
}

export const Timer: React.FC<TimerProps> = ({ duration = 5 }) => {
  let intervalId: NodeJS.Timer;

  React.useEffect(() => {
    countdown();
  }, []);

  const [time, setTime] = React.useState(`0${duration}:00`);

  function countdown() {
    const start = new Date().getTime();
    const end = moment(start).add(duration, 'minutes').valueOf();
    intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = end - now;

      setTime(moment(moment(distance), 'milliseconds').format('mm:ss'));

      if (distance < 0) {
        clearInterval(intervalId);
        setTime('00:00');
      }
    }, 1000);
  }

  return (
    <div className="border-4 border-blue-aero inline-block shadow-inner text-center text-lg text-white">
      <div className="border-8 border-green-sea px-4 py-2">{time}</div>
    </div>
  );
};
