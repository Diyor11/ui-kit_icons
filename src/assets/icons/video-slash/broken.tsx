import { FC } from "react";

interface IBrokenProps {
  className?: string;
}

export const Broken: FC<IBrokenProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 12.15v4.06c0 1.26.38 2.53 1.37 3.34L4 20M16.63 7.58s.03-.95 0-1.26c-.17-2.04-1.5-2.74-4.11-2.74H6.21C3.05 3.58 2 4.63 2 7.79M16.74 10.95v5.26c0 3.16-1.05 4.21-4.21 4.21H7.26M22 6.74v9.07c0 1.67-1.12 2.25-2.48 1.29l-2.78-1.95M22.02 2.19l-20 20"
      ></path>
    </svg>
  );
};
