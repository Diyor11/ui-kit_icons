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
        d="M21.7699 2.23C21.4699 1.93 20.9799 1.93 20.6799 2.23L2.22988 20.69C1.92988 20.99 1.92988 21.48 2.22988 21.78C2.37988 21.92 2.56988 22 2.76988 22C2.96988 22 3.15988 21.92 3.30988 21.77L21.7699 3.31C22.0799 3.01 22.0799 2.53 21.7699 2.23Z"
        fill="#292D32"
      />
      <path
        d="M16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.82017 19.1 3.03017 19.89 3.48017 20.52L18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11ZM9.50017 10.75H6.50017C6.09017 10.75 5.75017 10.41 5.75017 10C5.75017 9.59 6.09017 9.25 6.50017 9.25H9.50017C9.91017 9.25 10.2502 9.59 10.2502 10C10.2502 10.41 9.91017 10.75 9.50017 10.75Z"
        fill="#292D32"
      />
      <path
        d="M21.7498 9.99L21.2298 18.25C21.0998 20.31 19.9998 22 17.2398 22H7.40977C6.51977 22 6.06977 20.92 6.69977 20.29L9.16977 17.82C9.47977 17.51 9.95977 17.47 10.3498 17.69C11.0398 18.08 11.8698 18.23 12.7498 18.04C14.0198 17.77 15.0498 16.73 15.2998 15.45C15.4698 14.59 15.3198 13.78 14.9398 13.11C14.7198 12.72 14.7498 12.23 15.0698 11.92L19.5698 7.42C19.9798 7.01 20.6698 7.06 21.0198 7.53C21.5398 8.21 21.8098 9.07 21.7498 9.99Z"
        fill="#292D32"
      />
    </svg>
  );
};