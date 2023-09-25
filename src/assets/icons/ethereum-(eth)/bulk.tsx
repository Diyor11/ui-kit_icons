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
      <path d="M24 0H0V24H24V0Z" fill="white" />
      <path
        opacity="0.4"
        d="M17.5002 11.49C17.3902 11.58 17.2802 11.65 17.1502 11.71L16.0602 12.26L12.9902 13.79C12.4402 14.07 11.5502 14.07 11.0102 13.79L7.94015 12.26L6.85015 11.71C6.73015 11.64 6.62015 11.58 6.50015 11.49C5.44015 10.75 5.25015 9.39999 6.10015 8.32999L10.2702 3.12999C10.5302 2.80999 10.8402 2.56999 11.1602 2.42999C11.7002 2.16999 12.3002 2.16999 12.8302 2.42999C13.1502 2.56999 13.4702 2.80999 13.7202 3.12999L17.8902 8.32999C18.7502 9.40999 18.5602 10.76 17.5002 11.49Z"
        fill="#292D32"
      />
      <path
        d="M17.5 11.49C17.39 11.58 17.28 11.65 17.15 11.71L16.06 12.26L12 9.21L7.94 12.27L6.85 11.72C6.73 11.65 6.62 11.59 6.5 11.5C6.54 11.31 6.64 11.14 6.81 11.02L11.16 7.75V2.44C11.7 2.18 12.3 2.18 12.83 2.44V7.75L17.18 11.02C17.35 11.14 17.45 11.3 17.5 11.49Z"
        fill="#292D32"
      />
      <path
        d="M8.77011 14.43L10.3801 15.15C11.4101 15.61 12.5901 15.61 13.6301 15.15L15.2401 14.43C16.6801 13.79 18.0101 15.53 17.0101 16.75L13.5501 20.98C12.7001 22.02 11.3101 22.02 10.4501 20.98L7.00011 16.75C5.99011 15.53 7.32011 13.79 8.77011 14.43Z"
        fill="#292D32"
      />
    </svg>
  );
};
