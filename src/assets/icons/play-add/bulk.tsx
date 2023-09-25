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
        opacity="0.4"
        d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        fill="#292D32"
      />
      <path
        d="M9.37988 12V10.61C9.37988 8.89001 10.5999 8.18001 12.0899 9.04001L13.2899 9.73001L14.4899 10.42C15.9799 11.28 15.9799 12.69 14.4899 13.55L13.2899 14.24L12.0899 14.93C10.5999 15.79 9.37988 15.09 9.37988 13.36V12Z"
        fill="#292D32"
      />
      <path
        d="M19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM20.5 19.73H19.75V20.51C19.75 20.92 19.41 21.26 19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V19.73H17.5C17.09 19.73 16.75 19.39 16.75 18.98C16.75 18.57 17.09 18.23 17.5 18.23H18.25V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V18.23H20.5C20.91 18.23 21.25 18.57 21.25 18.98C21.25 19.39 20.91 19.73 20.5 19.73Z"
        fill="#292D32"
      />
    </svg>
  );
};