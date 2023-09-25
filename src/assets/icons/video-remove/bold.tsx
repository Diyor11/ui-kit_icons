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
        d="M21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.03 14.57 19.83 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.88 21.2 15.17 21.55 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C16.44 22.62 17.42 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.43 22.62 16.44 21.98 15.67ZM20.23 20.21C20.08 20.36 19.89 20.43 19.7 20.43C19.51 20.43 19.32 20.36 19.17 20.21L18.51 19.55L17.82 20.24C17.67 20.39 17.48 20.46 17.29 20.46C17.1 20.46 16.91 20.39 16.76 20.24C16.47 19.95 16.47 19.47 16.76 19.18L17.45 18.49L16.79 17.83C16.5 17.54 16.5 17.06 16.79 16.77C17.08 16.48 17.56 16.48 17.85 16.77L18.51 17.43L19.14 16.8C19.43 16.51 19.91 16.51 20.2 16.8C20.49 17.09 20.49 17.57 20.2 17.86L19.57 18.49L20.23 19.15C20.53 19.44 20.53 19.91 20.23 20.21Z"
        fill="#292D32"
      />
      <path
        d="M14.73 5.86V2.5C14.73 2.22 14.51 2 14.23 2H9.77002C9.49002 2 9.27002 2.22 9.27002 2.5V5.86C9.27002 6.14 9.49002 6.36 9.77002 6.36H14.23C14.51 6.36 14.73 6.14 14.73 5.86Z"
        fill="#292D32"
      />
      <path
        d="M7.24998 2.02003C4.68998 2.18003 2.93998 3.50003 2.28998 5.70003C2.18998 6.03003 2.42998 6.36003 2.76998 6.36003H7.26998C7.54998 6.36003 7.76998 6.14003 7.76998 5.86003V2.52003C7.76998 2.24003 7.52998 2.00003 7.24998 2.02003Z"
        fill="#292D32"
      />
      <path
        d="M16.75 2.01002C19.31 2.17002 21.06 3.49002 21.71 5.69002C21.81 6.02002 21.57 6.35002 21.23 6.35002H16.73C16.45 6.35002 16.23 6.13002 16.23 5.85002V2.51002C16.23 2.23002 16.47 1.99002 16.75 2.01002Z"
        fill="#292D32"
      />
      <path
        d="M22 8.35998V12.74C22 13.11 21.61 13.35 21.28 13.18C20.44 12.74 19.48 12.5 18.5 12.5C16.89 12.5 15.32 13.16 14.2 14.31C13.1 15.43 12.5 16.92 12.5 18.5C12.5 19.31 12.82 20.35 13.22 21.22C13.38 21.57 13.14 22 12.75 22H7.81C4.6 22 2 19.4 2 16.19V8.35998C2 8.07998 2.22 7.85999 2.5 7.85999H21.5C21.78 7.85999 22 8.07998 22 8.35998Z"
        fill="#292D32"
      />
    </svg>
  );
};
