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
        d="M5.33012 19.42C5.22012 19.42 5.10011 19.39 5.00011 19.34L2.78011 18.23C2.53011 18.1 2.37012 17.84 2.37012 17.56V14.78C2.37012 14.37 2.71012 14.03 3.12012 14.03C3.53012 14.03 3.87012 14.37 3.87012 14.78V17.09L5.68011 17.99C6.05011 18.18 6.20011 18.63 6.02011 19C5.87011 19.26 5.61012 19.42 5.33012 19.42Z"
        fill="#292D32"
      />
      <path
        d="M12 22.75C11.94 22.75 11.88 22.74 11.83 22.73C11.77 22.72 11.71 22.69 11.65 22.66L9.43996 21.56C9.06996 21.37 8.91996 20.92 9.09996 20.55C9.28996 20.18 9.73996 20.03 10.11 20.21L11.25 20.78V19.22C11.25 18.81 11.59 18.47 12 18.47C12.41 18.47 12.75 18.81 12.75 19.22V20.78L13.89 20.21C14.26 20.03 14.71 20.18 14.9 20.55C15.09 20.92 14.94 21.37 14.56 21.56L12.35 22.66C12.29 22.69 12.23 22.71 12.17 22.73C12.11 22.74 12.06 22.75 12 22.75Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M18.6699 19.42C18.3999 19.42 18.1299 19.27 17.9999 19.01C17.8099 18.64 17.9599 18.19 18.3399 18L20.1499 17.1V14.79C20.1499 14.38 20.4899 14.04 20.8999 14.04C21.3099 14.04 21.6499 14.38 21.6499 14.79V17.57C21.6499 17.85 21.4899 18.11 21.2399 18.24L19.0199 19.35C18.8899 19.39 18.7799 19.42 18.6699 19.42Z"
        fill="#292D32"
      />
      <path
        d="M12 14.42C11.59 14.42 11.25 14.08 11.25 13.67V11.36L9.43996 10.46C9.06996 10.27 8.91996 9.81998 9.09996 9.44998C9.28996 9.07998 9.73996 8.92998 10.11 9.10998L12 10.05L13.89 9.10998C14.26 8.92998 14.71 9.06998 14.9 9.44998C15.09 9.81998 14.94 10.27 14.56 10.46L12.75 11.36V13.67C12.75 14.08 12.41 14.42 12 14.42Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M3.11011 9.97C2.70011 9.97 2.36011 9.63 2.36011 9.22V6.46V6.44999C2.36011 6.38999 2.3701 6.32999 2.3801 6.27999C2.4001 6.19999 2.43011 6.12999 2.47011 6.05999C2.50011 6.00999 2.53011 5.96999 2.57011 5.92999C2.61011 5.88999 2.66011 5.85 2.71011 5.82C2.73011 5.81 2.76011 5.78999 2.78011 5.77999L4.9901 4.67999C5.3601 4.49999 5.81011 4.64 6.00011 5.02C6.19011 5.39 6.04011 5.83999 5.66011 6.02999L4.78011 6.47L5.66011 6.91C6.03011 7.1 6.18011 7.54999 6.00011 7.91999C5.82011 8.28999 5.3601 8.43999 4.9901 8.25999L3.85011 7.69V9.25C3.86011 9.64 3.53011 9.97 3.11011 9.97Z"
        fill="#292D32"
      />
      <path
        d="M14.22 3.85998C14.11 3.85998 13.99 3.82998 13.89 3.77998L12 2.83998L10.11 3.77998C9.74003 3.96998 9.29003 3.81998 9.10003 3.43998C8.91003 3.06998 9.06004 2.61997 9.44004 2.42997L11.66 1.31999C11.87 1.20999 12.12 1.20999 12.33 1.31999L14.55 2.42997C14.92 2.61997 15.07 3.06998 14.89 3.43998C14.76 3.70998 14.5 3.85998 14.22 3.85998Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M20.8899 9.97002C20.4799 9.97002 20.1399 9.63001 20.1399 9.22002V7.66002L18.9999 8.23001C18.6299 8.42001 18.1799 8.27001 17.9899 7.89001C17.7999 7.52001 17.9499 7.07002 18.3299 6.88002L19.2099 6.44002L18.3299 6.00001C17.9599 5.81001 17.8099 5.36002 17.9899 4.99002C18.1699 4.62002 18.6299 4.47001 18.9999 4.65001L21.2099 5.75001C21.2299 5.76001 21.2599 5.77001 21.2799 5.79001C21.3399 5.82001 21.3899 5.87001 21.4399 5.92001C21.4699 5.96001 21.4999 6.00001 21.5299 6.04001C21.5699 6.11001 21.5999 6.18001 21.6199 6.26001C21.6299 6.32001 21.6399 6.38001 21.6399 6.43001V6.44002V9.20001C21.6399 9.64001 21.2999 9.97002 20.8899 9.97002Z"
        fill="#292D32"
      />
    </svg>
  );
};
