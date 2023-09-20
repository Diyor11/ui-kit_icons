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
        d="M11.2501 3.89998V12.92C11.2501 13.25 11.0901 13.55 10.8201 13.74L3.61005 18.79C3.02005 19.2 2.18005 18.88 2.05005 18.17C1.90005 17.31 2.10005 16.3 2.70005 15.21L5.82005 9.59998L8.76005 4.30998C8.99005 3.89998 9.24005 3.53998 9.50005 3.22998C10.1001 2.52998 11.2501 2.97998 11.2501 3.89998Z"
        fill="#292D32"
      />
      <path
        d="M20.39 18.79L13.18 13.74C12.91 13.55 12.75 13.25 12.75 12.92V3.89998C12.75 2.97998 13.9 2.52998 14.5 3.22998C14.76 3.53998 15.01 3.89998 15.24 4.30998L18.18 9.59998L21.3 15.21C21.9 16.3 22.1 17.31 21.95 18.17C21.82 18.88 20.98 19.2 20.39 18.79Z"
        fill="#292D32"
      />
      <path
        d="M5.26006 19.14L11.4101 15.04C11.7401 14.82 12.2801 14.82 12.6101 15.04L18.7601 19.14C20.3901 20.23 20.1201 21.12 18.1601 21.12H5.85006C3.90006 21.11 3.63006 20.22 5.26006 19.14Z"
        fill="#292D32"
      />
    </svg>
  );
};
