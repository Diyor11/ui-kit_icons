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
        d="M15.25 11.3H13.55V7.33999C13.55 6.41999 13.05 6.22999 12.44 6.91999L12 7.41999L8.27997 11.65C7.76997 12.23 7.97997 12.7 8.74997 12.7H10.45V16.66C10.45 17.58 10.95 17.77 11.56 17.08L12 16.58L15.72 12.35C16.23 11.77 16.02 11.3 15.25 11.3Z"
        fill="#292D32"
      />
    </svg>
  );
};
