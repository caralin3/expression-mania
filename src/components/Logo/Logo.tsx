import React from 'react';
import classNames from 'classnames';

import { ReactComponent as LogoSvg } from './logo.svg';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  size: LogoSize;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const logoClasses = (size: LogoSize) =>
    classNames({
      'w-96 h-96': !size || size === 'xl',
      'w-48 h-48': size === 'lg',
      'w-16 h-16': size === 'md',
      'w-12 h-12': size === 'sm',
      'fill-current animate-spin-slow': true,
    });

  return (
    <div className="text-blue-300">
      <LogoSvg className={logoClasses(props.size)} />
    </div>
  );
};
