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
        d="M17.79 10.47v7.32A4.21 4.21 0 0113.58 22H6.21C3.89 22 2 20.11 2 17.79v-7.32a4.21 4.21 0 014.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21zM5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0122 13.16zM2 12h15.51"
      ></path>
    </svg>
  );
};
