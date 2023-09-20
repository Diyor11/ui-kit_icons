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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.59 12.26a5.13 5.13 0 100-10.26 5.13 5.13 0 000 10.26zM6.36 19.44a3.08 3.08 0 100-6.16 3.08 3.08 0 000 6.16zM16.62 22a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z"
      ></path>
    </svg>
  );
};
