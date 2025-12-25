import React from 'react';

type SoccerBallIconProps = React.SVGProps<SVGSVGElement>;

const SoccerBallIcon: React.FC<SoccerBallIconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7l3 2-1 3h-4l-1-3 3-2z" />
      <path d="M12 7V2" />
      <path d="M15 9l6-2" />
      <path d="M14 12l4 6" />
      <path d="M10 12l-4 6" />
      <path d="M9 9L3 7" />
    </svg>
  );
};

export default SoccerBallIcon;

