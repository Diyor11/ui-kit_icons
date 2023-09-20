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
        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C6.32 22 5.08 21.64 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
        fill="#292D32"
      />
      <path
        d="M20.9501 4.12999L4.13005 20.95C3.71005 20.66 3.34005 20.29 3.05005 19.87L19.8701 3.04999C20.2901 3.33999 20.66 3.70999 20.9501 4.12999Z"
        fill="#292D32"
      />
      <path
        d="M18.5 14.75H16.81V13C16.81 12.59 16.47 12.25 16.06 12.25C15.65 12.25 15.31 12.59 15.31 13V14.75H13.5C13.09 14.75 12.75 15.09 12.75 15.5C12.75 15.91 13.09 16.25 13.5 16.25H15.31V18C15.31 18.41 15.65 18.75 16.06 18.75C16.47 18.75 16.81 18.41 16.81 18V16.25H18.5C18.91 16.25 19.25 15.91 19.25 15.5C19.25 15.09 18.91 14.75 18.5 14.75Z"
        fill="#292D32"
      />
      <path
        d="M10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z"
        fill="#292D32"
      />
    </svg>
  );
};
