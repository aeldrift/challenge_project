import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg
    className={className}
    width="36"
    height="53"
    viewBox="0 0 36 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3328 52.2527C21.6447 52.3151 25.7161 51.1987 28.7005 49.1987C29.4193 48.717 30.0751 48.1838 30.656 47.6039C34.7858 43.4774 36.1041 36.2806 34.2727 27.8594C32.3339 18.9451 26.9919 9.32527 19.2307 0.772948C18.9366 0.449172 18.5218 0.261797 18.0847 0.255296C17.6475 0.249344 17.2268 0.424838 16.9245 0.739611C8.91872 9.064 3.30002 18.5245 1.10372 27.3786C-0.971028 35.7431 0.138613 42.9739 4.14818 47.2171C7.05346 50.2925 11.9822 52.1749 17.3328 52.2527Z"
      fill="currentColor"
    />
  </svg>
);

export default Logo;
