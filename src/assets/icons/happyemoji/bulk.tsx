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
        d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
        fill="#292D32"
      />
      <path
        d="M12 19.25C9.85 19.25 7.83 18.2 6.6 16.43C6.36 16.09 6.45 15.62 6.79 15.39C7.13 15.15 7.6 15.24 7.83 15.58C8.78 16.94 10.34 17.76 12 17.76C13.66 17.76 15.22 16.95 16.17 15.58C16.41 15.24 16.87 15.16 17.21 15.39C17.55 15.63 17.63 16.09 17.4 16.43C16.17 18.2 14.15 19.25 12 19.25Z"
        fill="#292D32"
      />
    </svg>
  );
};
