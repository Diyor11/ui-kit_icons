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
        d="M10.77 16.23H13.23C14.89 16.23 16.23 14.89 16.23 13.23V10.77C16.23 9.11002 14.89 7.77002 13.23 7.77002H10.77C9.11002 7.77002 7.77002 9.11002 7.77002 10.77V13.23C7.77002 14.89 9.11002 16.23 10.77 16.23Z"
        fill="#292D32"
      />
    </svg>
  );
};
