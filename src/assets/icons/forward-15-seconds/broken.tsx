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
        d="M13.98 4.47L12 2M20.01 16.96a8.89 8.89 0 01-16.9-3.85A8.89 8.89 0 0112 4.22c.68 0 1.34.09 1.98.24M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 110 3.06h-2.29M9.54 16.17v-5.34l-1.5 1.67"
      ></path>
    </svg>
  );
};
