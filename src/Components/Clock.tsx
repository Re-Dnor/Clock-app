import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Arrow from './Arrow';

const timeNumers: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  const getCurrentTime = (): string => {
    const sec = time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;
    const min = time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
    const hour = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
    return `${hour}:${min}:${sec}`;
  };

  useEffect(() => {
    const timerId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  return (
    <>
      <h2>
        Время:
        {getCurrentTime()}
      </h2>
      <div className="clock">
        <Arrow type="hour" time={time} />
        <Arrow type="min" time={time} />
        <Arrow type="sec" time={time} />
        {timeNumers.map((num, index) => <span key={_.uniqueId('clock_')} className={num}>{index + 1}</span>)}
      </div>
    </>
  );
};

export default Clock;
