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
        d="M6 9.86v4.29M9 8.43v7.14M12 14.99V17M12 7v4.95M15 8.43v7.14M18 9.86v4.29M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      ></path>
    </svg>
  );
};
