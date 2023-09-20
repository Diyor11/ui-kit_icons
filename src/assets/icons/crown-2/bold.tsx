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
        d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
        fill="#292D32"
      />
      <path
        d="M20.35 5.51998L16.35 8.37998C15.82 8.75998 15.06 8.52998 14.83 7.91998L12.94 2.87998C12.62 2.00998 11.39 2.00998 11.07 2.87998L9.16998 7.90998C8.93998 8.52998 8.18997 8.75998 7.65998 8.36998L3.65998 5.50998C2.85998 4.94998 1.79998 5.73998 2.12998 6.66998L6.28998 18.32C6.42998 18.72 6.80998 18.98 7.22998 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.66998C22.2 5.73998 21.14 4.94998 20.35 5.51998ZM14.5 14.75H9.49998C9.08998 14.75 8.74998 14.41 8.74998 14C8.74998 13.59 9.08998 13.25 9.49998 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
        fill="#292D32"
      />
    </svg>
  );
};