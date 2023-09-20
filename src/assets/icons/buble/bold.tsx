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
        d="M15.59 1.75C12.62 1.75 10.21 4.16 10.21 7.13C10.21 10.1 12.62 12.51 15.59 12.51C18.56 12.51 20.97 10.1 20.97 7.13C20.97 4.16 18.56 1.75 15.59 1.75Z"
        fill="#292D32"
      />
      <path
        d="M6.36 13.03C4.53 13.03 3.03 14.52 3.03 16.36C3.03 18.2 4.52 19.69 6.36 19.69C8.19 19.69 9.69 18.2 9.69 16.36C9.69 14.52 8.19 13.03 6.36 13.03Z"
        fill="#292D32"
      />
      <path
        d="M16.62 16.62C15.07 16.62 13.81 17.88 13.81 19.43C13.81 20.98 15.07 22.24 16.62 22.24C18.17 22.24 19.43 20.98 19.43 19.43C19.43 17.88 18.17 16.62 16.62 16.62Z"
        fill="#292D32"
      />
    </svg>
  );
};
