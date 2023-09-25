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
        d="M5.01 3C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.43 0 2.01-.54 2.01-1.89V4.89c0-1.35-.57-1.89-2.01-1.89M18.99 21c1.43 0 2.01-.54 2.01-1.89V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89"
      ></path>
    </svg>
  );
};
