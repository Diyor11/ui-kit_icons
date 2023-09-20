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
        d="M20.42 9.00001C20.28 8.99001 20.1 8.98001 19.9 8.98001C19.51 8.98001 19.2 9.29001 19.2 9.68001V14.33C19.2 14.72 19.51 15.03 19.9 15.03C20.1 15.03 20.27 15.02 20.44 15.01C22 14.83 22 13.73 22 12.93V11.07C22 10.27 22 9.17001 20.42 9.00001Z"
        fill="#292D32"
      />
      <path
        d="M12.93 4.79001H7.35C3.25 4.79001 2 6.04001 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04001 17.03 4.79001 12.93 4.79001ZM7.1 14.18C7.02 14.52 6.71 14.75 6.37 14.75C6.31 14.75 6.25 14.74 6.19 14.73C5.79 14.63 5.54 14.22 5.64 13.82C5.94 12.63 5.94 11.37 5.64 10.18C5.54 9.78001 5.78 9.37001 6.19 9.27001C6.59 9.17001 7 9.42001 7.1 9.82001C7.46 11.25 7.46 12.75 7.1 14.18Z"
        fill="#292D32"
      />
    </svg>
  );
};
