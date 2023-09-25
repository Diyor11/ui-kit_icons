import { FC } from "react";

interface IOutlineProps {
  className?: string;
}

export const Outline: FC<IOutlineProps> = ({ className }) => {
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
        d="M12 21.75C6.62 21.75 2.25 17.38 2.25 12C2.25 6.62 6.62 2.25 12 2.25C17.38 2.25 21.75 6.62 21.75 12C21.75 17.38 17.38 21.75 12 21.75ZM12 3.75C7.45 3.75 3.75 7.45 3.75 12C3.75 16.55 7.45 20.25 12 20.25C16.55 20.25 20.25 16.55 20.25 12C20.25 7.45 16.55 3.75 12 3.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
