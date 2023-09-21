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
        d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z"
        fill="#292D32"
      />
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H13C13.41 1.25 13.75 1.59 13.75 2C13.75 2.41 13.41 2.75 13 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="#292D32"
      />
      <path
        d="M18 8.75C17.9 8.75 17.81 8.73 17.71 8.69C17.43 8.58 17.25 8.3 17.25 8V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V6.19L19.47 5.47C19.76 5.18 20.24 5.18 20.53 5.47C20.82 5.76 20.82 6.24 20.53 6.53L18.53 8.53C18.39 8.67 18.2 8.75 18 8.75Z"
        fill="#292D32"
      />
      <path
        d="M17.9999 8.75C17.8099 8.75 17.6199 8.68 17.4699 8.53L15.4699 6.53C15.1799 6.24 15.1799 5.76 15.4699 5.47C15.7599 5.18 16.2399 5.18 16.5299 5.47L18.5299 7.47C18.8199 7.76 18.8199 8.24 18.5299 8.53C18.3799 8.68 18.1899 8.75 17.9999 8.75Z"
        fill="#292D32"
      />
      <path
        d="M2.66977 19.7C2.42977 19.7 2.18977 19.58 2.04977 19.37C1.81977 19.03 1.90977 18.56 2.25977 18.33L7.18977 15.02C8.26977 14.29 9.75977 14.38 10.7398 15.21L11.0698 15.5C11.5698 15.93 12.4198 15.93 12.9098 15.5L17.0698 11.93C18.1298 11.02 19.7998 11.02 20.8698 11.93L22.4998 13.33C22.8098 13.6 22.8498 14.07 22.5798 14.39C22.3098 14.7 21.8398 14.74 21.5198 14.47L19.8898 13.07C19.3898 12.64 18.5398 12.64 18.0398 13.07L13.8798 16.64C12.8198 17.55 11.1498 17.55 10.0798 16.64L9.74977 16.35C9.28977 15.96 8.52977 15.92 8.01977 16.27L3.08977 19.58C2.95977 19.66 2.80977 19.7 2.66977 19.7Z"
        fill="#292D32"
      />
    </svg>
  );
};
