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
        d="M2 12.98V15c0 5 2 7 7 7h2M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9M15.27 22a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 19.6v-5.64c0-1.2-.75-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.82"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.56 21.04a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88zM16.71 16.43L22 14.99"
      ></path>
    </svg>
  );
};
