import { FC } from "react";

interface IBulkProps {
  className?: string;
}

export const Bulk: FC<IBulkProps> = ({ className }) => {
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
        d="M21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C16.43 22.31 17.63 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 17.64 22.32 16.44 21.28 15.72ZM20.6 20.58C20.45 20.73 20.26 20.8 20.07 20.8C19.88 20.8 19.69 20.73 19.54 20.58L19.01 20.05L18.46 20.6C18.31 20.75 18.12 20.82 17.93 20.82C17.74 20.82 17.55 20.75 17.4 20.6C17.11 20.31 17.11 19.83 17.4 19.54L17.95 18.99L17.42 18.46C17.13 18.17 17.13 17.69 17.42 17.4C17.71 17.11 18.19 17.11 18.48 17.4L19.01 17.93L19.51 17.43C19.8 17.14 20.28 17.14 20.57 17.43C20.86 17.72 20.86 18.2 20.57 18.49L20.07 18.99L20.6 19.52C20.89 19.81 20.89 20.28 20.6 20.58Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        fill="#292D32"
      />
      <path
        d="M9.37988 12V10.61C9.37988 8.89001 10.5999 8.18001 12.0899 9.04001L13.2899 9.73001L14.4899 10.42C15.9799 11.28 15.9799 12.69 14.4899 13.55L13.2899 14.24L12.0899 14.93C10.5999 15.79 9.37988 15.09 9.37988 13.36V12Z"
        fill="#292D32"
      />
    </svg>
  );
};