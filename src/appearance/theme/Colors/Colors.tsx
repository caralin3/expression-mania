import React from 'react';
import theme from '../theme';

import './Colors.css';

export const Colors: React.FC = () => {
  const colorList = Object.keys(theme.colors);

  return (
    <div className="grid grid-cols-4 gap-3">
      {colorList.map((key) => {
        const color = (theme.colors as any)[key];
        return typeof color === 'string' ? (
          <div className="flex flex-row items-center" key={key}>
            <div
              className={`bg-${key} h-12 w-12 border rounded shadow-inner`}
            />
            <p className="pl-3">
              {key}
              <br />
              <span className="text-gray-500 text-sm">
                {(theme.colors as any)[key]}
              </span>
            </p>
          </div>
        ) : (
          Object.keys(color).map((val) => (
            <div className="flex flex-row items-center" key={val}>
              <div
                className={`bg-${key}-${val} h-12 w-12 border rounded shadow-inner`}
              />
              <p className="pl-3">
                {key}-{val}
                <br />
                <span className="text-gray-500 text-sm">{color[val]}</span>
              </p>
            </div>
          ))
        );
      })}
    </div>
  );
};
