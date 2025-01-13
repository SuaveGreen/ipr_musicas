// AppIcon.tsx
import React, { useState } from 'react';

interface AppIconProps {
  defaultIcon: string;
  activeIcon: string;
}

const AppIcon: React.FC<AppIconProps> = ({ defaultIcon, activeIcon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`w-48 h-48 bg-center bg-cover cursor-pointer ${isActive ? 'bg-active-icon' : 'bg-default-icon'}`}
      onClick={() => setIsActive(!isActive)}
      style={{
        backgroundImage: `url(${isActive ? activeIcon : defaultIcon})`
      }}
    ></div>
  );
};

export default AppIcon;
