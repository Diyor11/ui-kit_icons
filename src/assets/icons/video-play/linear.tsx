import { FC } from "react";

interface ILinearProps {
  className?: string;
}

export const Linear: FC<ILinearProps> = ({ className }) => {
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
        d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7zM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.75 14.45v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4v-1.2 0z"
      ></path>
    </svg>
  );
};
