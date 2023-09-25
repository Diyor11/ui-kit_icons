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
        d="M21.8502 10.25C21.0702 5.79998 17.2402 2.34998 12.7302 2.02998C6.63021 1.58998 1.59021 6.63998 2.03021 12.73C2.35021 17.24 5.80021 21.06 10.2502 21.84C11.4002 22.04 12.5202 22.04 13.5902 21.86C13.9002 21.81 14.0802 21.47 13.9602 21.19C13.6602 20.51 13.5002 19.76 13.5002 18.99C13.5002 17.3 14.2502 15.74 15.5702 14.7C16.5402 13.92 17.7602 13.49 19.0002 13.49C19.7802 13.49 20.5202 13.65 21.1902 13.95C21.4802 14.08 21.8102 13.89 21.8702 13.58C22.0502 12.52 22.0502 11.4 21.8502 10.25ZM14.5002 13.57L13.3002 14.26L12.1002 14.95C10.6102 15.81 9.39021 15.11 9.39021 13.38V12V10.61C9.39021 8.88998 10.6102 8.17998 12.1002 9.03998L13.3002 9.72998L14.5002 10.42C15.9902 11.3 15.9902 12.7 14.5002 13.57Z"
        fill="#292D32"
      />
      <path
        d="M19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM20.5 19.73H19.75V20.51C19.75 20.92 19.41 21.26 19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V19.73H17.5C17.09 19.73 16.75 19.39 16.75 18.98C16.75 18.57 17.09 18.23 17.5 18.23H18.25V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V18.23H20.5C20.91 18.23 21.25 18.57 21.25 18.98C21.25 19.39 20.91 19.73 20.5 19.73Z"
        fill="#292D32"
      />
    </svg>
  );
};
