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
        d="M17 3.75H10.28C8.86999 3.75 7.52999 4.34 6.57999 5.39L3.04999 9.27C1.63999 10.82 1.63999 13.18 3.04999 14.73L6.57999 18.61C7.52999 19.65 8.86999 20.25 10.28 20.25H17C19.76 20.25 22 18.01 22 15.25V8.75C22 5.99 19.76 3.75 17 3.75ZM16.53 13.94C16.82 14.23 16.82 14.71 16.53 15C16.38 15.15 16.19 15.22 16 15.22C15.81 15.22 15.62 15.15 15.47 15L13.53 13.06L11.59 15C11.44 15.15 11.25 15.22 11.06 15.22C10.87 15.22 10.68 15.15 10.53 15C10.24 14.71 10.24 14.23 10.53 13.94L12.47 12L10.53 10.06C10.24 9.77 10.24 9.29 10.53 9C10.82 8.71 11.3 8.71 11.59 9L13.53 10.94L15.47 9C15.76 8.71 16.24 8.71 16.53 9C16.82 9.29 16.82 9.77 16.53 10.06L14.59 12L16.53 13.94Z"
        fill="#292D32"
      />
    </svg>
  );
};
