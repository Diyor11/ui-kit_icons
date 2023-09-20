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
        d="M6 5.12C5.59 5.12 5.25 4.78 5.25 4.37V2.61999C5.25 2.21 5.59 1.87 6 1.87C6.41 1.87 6.75 2.21 6.75 2.61999V4.37C6.75 4.79 6.41 5.12 6 5.12Z"
        fill="#292D32"
      />
      <path
        d="M10 5.12C9.59 5.12 9.25 4.78 9.25 4.37V2.61999C9.25 2.21 9.59 1.87 10 1.87C10.41 1.87 10.75 2.21 10.75 2.61999V4.37C10.75 4.79 10.41 5.12 10 5.12Z"
        fill="#292D32"
      />
      <path
        d="M14 5.12C13.59 5.12 13.25 4.78 13.25 4.37V2.61999C13.25 2.21 13.59 1.87 14 1.87C14.41 1.87 14.75 2.21 14.75 2.61999V4.37C14.75 4.79 14.41 5.12 14 5.12Z"
        fill="#292D32"
      />
      <path
        d="M22.25 13.25C22.25 10.63 20.22 8.51001 17.66 8.29001C16.92 7.08001 15.6 6.26001 14.08 6.26001H6.71C4.39 6.26001 2.5 8.15001 2.5 10.47V11H18.29V10.47C18.29 10.28 18.26 10.09 18.23 9.91001C19.68 10.34 20.75 11.66 20.75 13.25C20.75 14.82 19.71 16.13 18.29 16.57V12H2.5V17.79C2.5 20.11 4.39 22 6.71 22H14.08C16.28 22 18.07 20.3 18.25 18.14C20.53 17.68 22.25 15.66 22.25 13.25Z"
        fill="#292D32"
      />
    </svg>
  );
};