import React from 'react';
import cn from 'classnames';

interface IArrow {
  type: string
  time: Date
}

const Arrow: React.FC<IArrow> = ({ type, time }: IArrow) => {
  const classNameArrow: string = cn(`${type}_arrow`);

  const getRotationString = (): string => {
    switch (type) {
      case 'hour': {
        return `rotateZ(${time.getHours() * 30}deg)`;
      }
      case 'min': {
        return `rotateZ(${time.getMinutes() * 6}deg)`;
      }
      case 'sec': {
        return `rotateZ(${time.getSeconds() * 6}deg)`;
      }
      default: {
        return '';
      }
    }
  };
  return (
    <div
      className={classNameArrow}
      style={{ transform: getRotationString() }}
    />
  );
};

export default Arrow;
