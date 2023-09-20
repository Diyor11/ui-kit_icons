import { FC } from "react";

interface IBoldProps {
  className?: string;
}

export const Bold: FC<IBoldProps> = ({ className }) => {
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
        d="M17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L4.41 18.55L18.55 4.41L17.02 2.88Z"
        fill="#292D32"
      />
      <path
        d="M21.12 6.97997L19.61 5.46997L5.46997 19.61L6.97997 21.12C7.45997 21.6 8.41997 22 9.09997 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.09997C22 8.41997 21.6 7.45997 21.12 6.97997Z"
        fill="#292D32"
      />
      <path
        d="M2.49002 20.47C2.20002 20.76 2.20002 21.24 2.49002 21.53C2.64002 21.68 2.83002 21.75 3.02002 21.75C3.21002 21.75 3.40002 21.68 3.55002 21.53L5.47002 19.61L4.41002 18.55L2.49002 20.47Z"
        fill="#292D32"
      />
      <path
        d="M21.53 3.55002C21.82 3.26002 21.82 2.78002 21.53 2.49002C21.24 2.20002 20.76 2.20002 20.47 2.49002L18.55 4.41002L19.61 5.47002L21.53 3.55002Z"
        fill="#292D32"
      />
    </svg>
  );
};
