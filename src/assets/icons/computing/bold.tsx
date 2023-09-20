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
        d="M20.95 4.13L4.13 20.95C5.08 21.64 6.32 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM18.5 16.25H16.81V18C16.81 18.41 16.47 18.75 16.06 18.75C15.65 18.75 15.31 18.41 15.31 18V16.25H13.5C13.09 16.25 12.75 15.91 12.75 15.5C12.75 15.09 13.09 14.75 13.5 14.75H15.31V13C15.31 12.59 15.65 12.25 16.06 12.25C16.47 12.25 16.81 12.59 16.81 13V14.75H18.5C18.91 14.75 19.25 15.09 19.25 15.5C19.25 15.91 18.91 16.25 18.5 16.25Z"
        fill="#292D32"
      />
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87L19.87 3.05C18.92 2.36 17.68 2 16.19 2ZM10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z"
        fill="#292D32"
      />
    </svg>
  );
};
