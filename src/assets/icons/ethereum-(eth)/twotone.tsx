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
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M10.45 3.05L6.72 7.71c-.85 1.06-.55 2.42.66 3.02l3.73 1.87c.49.24 1.29.24 1.78 0l3.73-1.87c1.21-.61 1.51-1.97.66-3.02l-3.73-4.66c-.85-1.07-2.25-1.07-3.1 0zM12 2.3v5.26"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M7.8 10.71L12 7.56l4.2 3.15"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.77 14.43l1.61.72a4 4 0 003.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0L7 16.75c-1.01-1.22.32-2.96 1.77-2.32z"
        opacity="0.4"
      ></path>
    </svg>
  );
};
