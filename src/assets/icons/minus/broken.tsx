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
        d="M16 12h2M6 12h5.66"
      ></path>
    </svg>
  );
};
