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
        d="M13 19.75H7C2.59 19.75 1.25 18.41 1.25 14V10C1.25 5.59 2.59 4.25 7 4.25H13C17.41 4.25 18.75 5.59 18.75 10V14C18.75 18.41 17.41 19.75 13 19.75ZM7 5.75C3.42 5.75 2.75 6.43 2.75 10V14C2.75 17.57 3.42 18.25 7 18.25H13C16.58 18.25 17.25 17.57 17.25 14V10C17.25 6.43 16.58 5.75 13 5.75H7Z"
        fill="#292D32"
      />
      <path
        d="M20.5 15.25C20.09 15.25 19.75 14.91 19.75 14.5C19.75 14.09 20.09 13.75 20.5 13.75C21.09 13.75 21.22 13.66 21.23 13.66C21.25 13.6 21.25 13.25 21.25 13V11C21.25 10.75 21.25 10.41 21.21 10.32C21.2 10.33 21.05 10.25 20.5 10.25C20.09 10.25 19.75 9.91 19.75 9.5C19.75 9.09 20.09 8.75 20.5 8.75C22.58 8.75 22.75 9.77 22.75 11V13C22.75 14.23 22.58 15.25 20.5 15.25Z"
        fill="#292D32"
      />
      <path
        d="M6.38001 14.75C6.32001 14.75 6.26001 14.74 6.20001 14.73C5.80001 14.63 5.55001 14.22 5.65001 13.82C5.95001 12.63 5.95001 11.37 5.65001 10.18C5.55001 9.78001 5.79001 9.37001 6.20001 9.27001C6.59001 9.17001 7.00001 9.42001 7.10001 9.82001C7.46001 11.25 7.46001 12.76 7.10001 14.18C7.02001 14.52 6.71001 14.75 6.38001 14.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
