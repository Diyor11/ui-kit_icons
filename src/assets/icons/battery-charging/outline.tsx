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
        d="M20.5 15.25C20.09 15.25 19.75 14.91 19.75 14.5C19.75 14.09 20.09 13.75 20.5 13.75C21.09 13.75 21.22 13.66 21.23 13.66C21.25 13.6 21.25 13.25 21.25 13V11C21.25 10.75 21.25 10.41 21.21 10.32C21.2 10.33 21.05 10.25 20.5 10.25C20.09 10.25 19.75 9.91 19.75 9.5C19.75 9.09 20.09 8.75 20.5 8.75C22.58 8.75 22.75 9.77 22.75 11V13C22.75 14.23 22.58 15.25 20.5 15.25Z"
        fill="#292D32"
      />
      <path
        d="M10 16.75C9.83002 16.75 9.65002 16.69 9.51002 16.57C9.20002 16.3 9.16002 15.83 9.43002 15.51L11.51 13.08C11.54 12.99 11.51 12.91 11.49 12.87C11.46 12.82 11.4 12.75 11.27 12.75H8.97002C8.34002 12.75 7.77002 12.42 7.45002 11.88C7.13002 11.34 7.13002 10.68 7.45002 10.13L9.40002 7.55C9.65002 7.22 10.12 7.15 10.45 7.4C10.78 7.65 10.85 8.12 10.6 8.45L8.71002 10.95C8.70002 10.98 8.74002 11.07 8.76002 11.12C8.79002 11.17 8.85002 11.24 8.98002 11.24H11.28C11.91 11.24 12.48 11.57 12.8 12.11C13.12 12.65 13.12 13.31 12.8 13.86C12.78 13.9 12.75 13.94 12.72 13.97L10.58 16.47C10.42 16.66 10.21 16.75 10 16.75Z"
        fill="#292D32"
      />
      <path
        d="M7 19.75C2.59 19.75 1.25 18.41 1.25 14V10C1.25 5.59 2.59 4.25 7 4.25C7.41 4.25 7.75 4.59 7.75 5C7.75 5.41 7.41 5.75 7 5.75C3.43 5.75 2.75 6.43 2.75 10V14C2.75 17.57 3.43 18.25 7 18.25C7.41 18.25 7.75 18.59 7.75 19C7.75 19.41 7.41 19.75 7 19.75Z"
        fill="#292D32"
      />
      <path
        d="M13 19.75C12.59 19.75 12.25 19.41 12.25 19C12.25 18.59 12.59 18.25 13 18.25C16.57 18.25 17.25 17.57 17.25 14V10C17.25 6.43 16.57 5.75 13 5.75C12.59 5.75 12.25 5.41 12.25 5C12.25 4.59 12.59 4.25 13 4.25C17.41 4.25 18.75 5.59 18.75 10V14C18.75 18.41 17.41 19.75 13 19.75Z"
        fill="#292D32"
      />
    </svg>
  );
};