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
        d="M14.9698 12.75H14.1998H9.52979V15.58H10.8398H14.9698C15.9198 15.58 16.6998 14.94 16.6998 14.16C16.6998 13.38 15.9198 12.75 14.9698 12.75Z"
        fill="black"
      />
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.97 17.08H13.32V18.5C13.32 18.91 12.98 19.25 12.57 19.25C12.16 19.25 11.82 18.91 11.82 18.5V17.08H10.84H10.61V18.5C10.61 18.91 10.27 19.25 9.86 19.25C9.45 19.25 9.11 18.91 9.11 18.5V17.08H8.78H7.05C6.64 17.08 6.3 16.74 6.3 16.33C6.3 15.92 6.64 15.58 7.05 15.58H8.03V12V8.42H7.05C6.64 8.42 6.3 8.08 6.3 7.67C6.3 7.26 6.64 6.92 7.05 6.92H8.78H9.11V5.5C9.11 5.09 9.45 4.75 9.86 4.75C10.27 4.75 10.61 5.09 10.61 5.5V6.92H10.84H11.82V5.5C11.82 5.09 12.16 4.75 12.57 4.75C12.98 4.75 13.32 5.09 13.32 5.5V6.92H14.2C15.75 6.92 17.12 8.28 17.12 9.84C17.12 10.51 16.88 11.12 16.5 11.62C17.51 12.11 18.2 13.07 18.2 14.18C18.2 15.77 16.75 17.08 14.97 17.08Z"
        fill="black"
      />
      <path
        d="M15.6198 9.83C15.6198 9.17 14.9998 8.41 14.1998 8.41H10.8398H9.52979V11.24H14.1998C14.9798 11.25 15.6198 10.61 15.6198 9.83Z"
        fill="black"
      />
    </svg>
  );
};