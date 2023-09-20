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
        d="M11.82 6.9C14.68 6.28 17.58 6.19 20.45 6.66C18.68 3.86 15.56 2 12 2C8.89002 2 6.11002 3.42 4.27002 5.65C4.71002 6.95 5.27002 8.19 5.94002 9.37C6.32002 10.05 7.29002 10.02 7.68002 9.35C8.53002 7.92 10.06 6.96 11.82 6.9Z"
        fill="#292D32"
      />
      <path
        d="M7.72002 14.72C5.72002 12.58 4.16002 10.14 3.09002 7.44C1.59002 10.4 1.60002 14.03 3.43002 17.08C5.03002 19.75 7.67002 21.41 10.53 21.84C11.42 20.79 12.2 19.67 12.87 18.5C13.26 17.82 12.73 17.01 11.95 17.01C10.28 17.02 8.67002 16.2 7.72002 14.72Z"
        fill="#292D32"
      />
      <path
        d="M8.57001 12C8.57001 12.61 8.72001 13.18 9.03001 13.72C9.64001 14.77 10.77 15.43 11.99 15.43C13.21 15.43 14.35 14.77 14.95 13.72C15.26 13.18 15.42 12.61 15.42 12C15.42 10.11 13.88 8.58 11.99 8.58C10.11 8.57 8.57001 10.11 8.57001 12Z"
        fill="#292D32"
      />
      <path
        d="M21.34 8.41998C19.97 8.12998 18.58 7.96998 17.2 7.94998C16.41 7.93998 15.96 8.79998 16.35 9.48998C16.75 10.2 16.98 11.02 16.98 11.89C16.98 12.73 16.76 13.56 16.35 14.3C15.41 17.18 14.01 19.74 12.16 22C17.61 21.91 22 17.47 22 12C22 10.74 21.77 9.52998 21.34 8.41998Z"
        fill="#292D32"
      />
    </svg>
  );
};
