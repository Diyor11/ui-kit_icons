import { FC } from "react";

interface ITwoTOneProps {
  className?: string;
}

export const TwoTOne: FC<ITwoTOneProps> = ({ className }) => {
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
        d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.21 16A5.831 5.831 0 0012 18.5c1.98 0 3.73-.99 4.79-2.5"
        opacity="0.34"
      ></path>
    </svg>
  );
};
