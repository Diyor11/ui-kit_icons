import { FC } from "react";

interface IOutlineProps {
  className?: string;
}

export const Outline: FC<IOutlineProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3599 22.75H5.58987C4.06987 22.75 2.67987 21.98 1.87987 20.68C1.07987 19.38 1.00987 17.8 1.68987 16.43L3.40987 12.98C3.96987 11.86 4.86987 11.16 5.87987 11.05C6.88987 10.94 7.91987 11.44 8.69987 12.41L8.91987 12.69C9.35987 13.23 9.86987 13.52 10.3699 13.47C10.8699 13.43 11.3299 13.07 11.6699 12.46L13.5599 9.04999C14.3399 7.63999 15.3799 6.90999 16.5099 6.95999C17.6299 7.01999 18.5899 7.85999 19.2299 9.33999L22.3599 16.65C22.9399 18 22.7999 19.54 21.9899 20.77C21.1899 22.02 19.8299 22.75 18.3599 22.75ZM6.15987 12.55C6.11987 12.55 6.07987 12.55 6.03987 12.56C5.53987 12.61 5.07987 13.01 4.74987 13.66L3.02987 17.11C2.57987 18 2.62987 19.05 3.14987 19.9C3.66987 20.75 4.58987 21.26 5.58987 21.26H18.3499C19.3299 21.26 20.1999 20.79 20.7399 19.97C21.2799 19.15 21.3699 18.17 20.9799 17.27L17.8499 9.95999C17.4699 9.05999 16.9399 8.50999 16.4299 8.48999C15.9599 8.45999 15.3499 8.95999 14.8699 9.80999L12.9799 13.22C12.3999 14.26 11.4899 14.91 10.4999 15C9.50987 15.08 8.49987 14.6 7.74987 13.66L7.52987 13.38C7.10987 12.83 6.62987 12.55 6.15987 12.55Z"
        fill="#292D32"
      />
      <path
        d="M6.97021 8.75C4.91021 8.75 3.22021 7.07 3.22021 5C3.22021 2.93 4.90021 1.25 6.97021 1.25C9.04021 1.25 10.7202 2.93 10.7202 5C10.7202 7.07 9.04021 8.75 6.97021 8.75ZM6.97021 2.75C5.73021 2.75 4.72021 3.76 4.72021 5C4.72021 6.24 5.73021 7.25 6.97021 7.25C8.21021 7.25 9.22021 6.24 9.22021 5C9.22021 3.76 8.21021 2.75 6.97021 2.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
