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
        d="M13.9797 5.21993C13.7597 5.21993 13.5398 5.11996 13.3998 4.93996L11.4197 2.46993C11.1597 2.14993 11.2097 1.66994 11.5397 1.41994C11.8697 1.16994 12.3298 1.20994 12.5898 1.53994L14.5698 4.00997C14.8298 4.32997 14.7798 4.80996 14.4498 5.05996C14.3098 5.15996 14.1397 5.21993 13.9797 5.21993Z"
        fill="#292D32"
      />
      <path
        d="M11.9999 22.75C6.68988 22.75 2.35986 18.43 2.35986 13.11C2.35986 7.78999 6.67988 3.46997 11.9999 3.46997C12.6899 3.46997 13.3899 3.54998 14.1499 3.72998C14.5499 3.81998 14.8099 4.23 14.7099 4.63C14.6199 5.03 14.2199 5.29 13.8099 5.19C13.1699 5.04 12.5699 4.96997 11.9999 4.96997C7.50988 4.96997 3.85986 8.61999 3.85986 13.11C3.85986 17.6 7.50988 21.25 11.9999 21.25C16.4899 21.25 20.1399 17.6 20.1399 13.11C20.1399 11.37 19.5699 9.69 18.4899 8.25C18.2399 7.92 18.3099 7.45001 18.6399 7.20001C18.9699 6.95001 19.4399 7.01998 19.6899 7.34998C20.9699 9.04998 21.6399 11.04 21.6399 13.11C21.6399 18.43 17.3099 22.75 11.9999 22.75Z"
        fill="#292D32"
      />
      <path
        d="M12.3801 16.92H10.0902C9.68016 16.92 9.34016 16.58 9.34016 16.17C9.34016 15.76 9.68016 15.42 10.0902 15.42H12.3801C12.8101 15.42 13.1601 15.0701 13.1601 14.6401C13.1601 14.2101 12.8101 13.86 12.3801 13.86H10.0902C9.85016 13.86 9.62011 13.74 9.48011 13.55C9.34011 13.36 9.30014 13.1001 9.38014 12.8701L10.1401 10.5801C10.2401 10.2701 10.5301 10.0701 10.8501 10.0701H13.9101C14.3201 10.0701 14.6601 10.4101 14.6601 10.8201C14.6601 11.2301 14.3201 11.5701 13.9101 11.5701H11.3901L11.1301 12.36H12.3801C13.6401 12.36 14.6601 13.3801 14.6601 14.6401C14.6601 15.9001 13.6401 16.92 12.3801 16.92Z"
        fill="#292D32"
      />
    </svg>
  );
};
