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
        d="M16.05 20.59C15.26 20.59 14.39 20.31 13.52 19.76L10.6 17.93C10.4 17.81 10.17 17.74 9.94 17.74H8.5C6.08 17.74 4.75 16.41 4.75 13.99V9.99001C4.75 7.57001 6.08 6.24001 8.5 6.24001H9.93C10.16 6.24001 10.39 6.17001 10.59 6.05001L13.51 4.22001C14.97 3.31001 16.39 3.14001 17.51 3.76001C18.63 4.38001 19.24 5.67001 19.24 7.40001V16.57C19.24 18.29 18.62 19.59 17.51 20.21C17.07 20.47 16.57 20.59 16.05 20.59ZM8.5 7.75001C6.92 7.75001 6.25 8.42001 6.25 10V14C6.25 15.58 6.92 16.25 8.5 16.25H9.93C10.45 16.25 10.95 16.39 11.39 16.67L14.31 18.5C15.28 19.1 16.18 19.26 16.79 18.92C17.4 18.58 17.75 17.73 17.75 16.6V7.41001C17.75 6.27001 17.4 5.42001 16.79 5.09001C16.18 4.75001 15.28 4.90001 14.31 5.51001L11.39 7.34001C10.95 7.61001 10.45 7.76001 9.93 7.76001H8.5V7.75001Z"
        fill="#292D32"
      />
    </svg>
  );
};
