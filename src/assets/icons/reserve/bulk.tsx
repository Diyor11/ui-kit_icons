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
        d="M21.97 18V19C21.97 20.65 21.97 22 18.97 22H4.96997C1.96997 22 1.96997 20.65 1.96997 19V18C1.96997 17.45 2.41997 17 2.96997 17H20.97C21.52 17 21.97 17.45 21.97 18Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M20.72 13V17H3.27002V13C3.27002 9.16 5.98002 5.95 9.59002 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z"
        fill="#292D32"
      />
      <path
        d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z"
        fill="#292D32"
      />
      <path
        d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
