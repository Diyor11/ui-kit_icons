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
        d="M22 9v6c0 .22 0 .44-.02.65A4.46 4.46 0 0018.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0014 18.5c0 1.41.64 2.66 1.65 3.48-.21.02-.43.02-.65.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7zM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M23 18.5c0 1.35-.6 2.55-1.53 3.38-.8.69-1.83 1.12-2.97 1.12-1.08 0-2.08-.38-2.85-1.02A4.46 4.46 0 0114 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0118.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M18.78 17.09v1.69l-1.4.84"
      ></path>
    </svg>
  );
};
