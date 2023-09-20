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
        d="M10.2401 14.74C9.91011 14.41 9.47011 14.22 9.00011 14.22H3.92011C3.31011 14.22 2.75011 14.53 2.43011 15.05C2.11011 15.56 2.08011 16.17 2.34011 16.71C3.57011 19.23 5.79011 21.21 8.43011 22.14C8.61011 22.2 8.81011 22.24 9.00011 22.24C9.35011 22.24 9.70011 22.13 10.0001 21.92C10.4701 21.59 10.7501 21.05 10.7501 20.48L10.7601 15.98C10.7501 15.51 10.5701 15.07 10.2401 14.74Z"
        fill="#292D32"
      />
      <path
        d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M21.56 15.1C21.24 14.58 20.68 14.26 20.06 14.26L15 14.25C14.53 14.25 14.09 14.43 13.76 14.76C13.43 15.09 13.25 15.53 13.25 16L13.26 20.48C13.26 21.05 13.54 21.59 14.01 21.92C14.31 22.13 14.66 22.24 15.01 22.24C15.2 22.24 15.39 22.21 15.57 22.14C18.19 21.22 20.41 19.25 21.64 16.76C21.9 16.23 21.87 15.61 21.56 15.1Z"
        fill="#292D32"
      />
    </svg>
  );
};