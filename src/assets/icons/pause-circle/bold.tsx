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
        d="M11.97 2C6.44997 2 1.96997 6.48 1.96997 12C1.96997 17.52 6.44997 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM10.72 15.03C10.72 15.51 10.52 15.7 10.01 15.7H8.70997C8.19997 15.7 7.99997 15.51 7.99997 15.03V8.97C7.99997 8.49 8.19997 8.3 8.70997 8.3H9.99997C10.51 8.3 10.71 8.49 10.71 8.97V15.03H10.72ZM16 15.03C16 15.51 15.8 15.7 15.29 15.7H14C13.49 15.7 13.29 15.51 13.29 15.03V8.97C13.29 8.49 13.49 8.3 14 8.3H15.29C15.8 8.3 16 8.49 16 8.97V15.03Z"
        fill="#292D32"
      />
    </svg>
  );
};