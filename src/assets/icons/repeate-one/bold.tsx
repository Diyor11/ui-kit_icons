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
        d="M3.91 17.18C3.72 17.18 3.53 17.11 3.38 16.96C2.01 15.58 1.25 13.76 1.25 11.83C1.25 7.81999 4.5 4.55999 8.5 4.55999L14.57 4.57999L13.48 3.53999C13.18 3.24999 13.17 2.77999 13.46 2.47999C13.75 2.17999 14.22 2.16999 14.52 2.45999L16.96 4.79999C17.18 5.00999 17.25 5.33999 17.14 5.61999C17.03 5.89999 16.75 6.08999 16.44 6.08999L8.5 6.06999C5.33 6.06999 2.75 8.65999 2.75 11.84C2.75 13.37 3.35 14.82 4.44 15.91C4.73 16.2 4.73 16.68 4.44 16.97C4.29 17.11 4.1 17.18 3.91 17.18Z"
        fill="#292D32"
      />
      <path
        d="M9.9999 21.75C9.8099 21.75 9.6299 21.68 9.4799 21.54L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.2599 17.95 7.5599 17.91L15.5099 17.93C18.6799 17.93 21.2599 15.34 21.2599 12.16C21.2599 10.63 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.23 22.7599 12.16C22.7599 16.17 19.5099 19.43 15.5099 19.43L9.4399 19.41L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
        fill="#292D32"
      />
      <path
        d="M12.25 15.42C11.84 15.42 11.5 15.08 11.5 14.67V11.28L11.31 11.49C11.03 11.8 10.56 11.82 10.25 11.55C9.94 11.28 9.92 10.8 10.19 10.49L11.69 8.82001C11.9 8.59001 12.23 8.51001 12.52 8.62001C12.81 8.74001 13 9.01001 13 9.33001V14.68C13 15.09 12.66 15.42 12.25 15.42Z"
        fill="#292D32"
      />
    </svg>
  );
};
