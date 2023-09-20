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
        d="M16.19 2H7.82002C4.18002 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18002 21.99 7.82002 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="#292D32"
      />
      <path
        d="M16.86 8.46001C16.02 8.38001 15.25 8.33001 14.5 8.28001L14.42 7.80001C14.35 7.32001 14.2 6.33002 12.69 6.33002H11.3C9.81004 6.33002 9.65004 7.28002 9.57004 7.79002L9.49004 8.26001C9.06004 8.29001 8.64004 8.31001 8.21004 8.35001L7.12003 8.46001C6.74003 8.50001 6.47003 8.83001 6.51003 9.21001C6.55003 9.56001 6.84004 9.83002 7.19004 9.83002C7.21004 9.83002 7.24003 9.83002 7.26003 9.83002L8.34003 9.72002C8.94003 9.67002 9.55003 9.62002 10.15 9.59002C11.37 9.54002 12.59 9.56001 13.82 9.62001C14.73 9.66001 15.68 9.73002 16.72 9.83002C16.74 9.83002 16.76 9.83002 16.78 9.83002C17.13 9.83002 17.43 9.56001 17.46 9.21001C17.51 8.83001 17.24 8.49001 16.86 8.46001Z"
        fill="#292D32"
      />
      <path
        d="M15.83 11.1C15.66 10.91 15.41 10.81 15.16 10.81H8.84C8.59 10.81 8.34 10.92 8.17 11.1C8 11.29 7.91 11.54 7.93 11.79L8.24001 15.75C8.30001 16.6 8.37 17.66 10.29 17.66H13.71C15.63 17.66 15.7 16.6 15.76 15.75L16.07 11.79C16.09 11.54 16 11.29 15.83 11.1Z"
        fill="#292D32"
      />
    </svg>
  );
};
