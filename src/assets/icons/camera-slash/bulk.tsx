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
        d="M21.7699 2.23C21.4699 1.93 20.9799 1.93 20.6799 2.23L2.22988 20.69C1.92988 20.99 1.92988 21.48 2.22988 21.78C2.37988 21.92 2.56988 22 2.76988 22C2.96988 22 3.15988 21.92 3.30988 21.77L21.7699 3.31C22.0799 3.01 22.0799 2.53 21.7699 2.23Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M21.7502 9.99L21.2302 18.25C21.1002 20.31 20.0002 22 17.2402 22H6.76022C6.17022 22 5.66021 21.92 5.22021 21.78L20.2502 6.75C21.2302 7.48 21.8402 8.67 21.7502 9.99Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M18.0002 6L3.48017 20.52C3.03017 19.89 2.82017 19.1 2.77017 18.25L2.25017 9.99C2.11017 7.83 3.83017 6 6.00017 6C6.61017 6 7.17017 5.65 7.45017 5.11L8.17017 3.66C8.63017 2.75 9.83017 2 10.8602 2H13.1502C14.1702 2 15.3702 2.75 15.8302 3.66L16.5502 5.11C16.8302 5.65 17.3902 6 18.0002 6Z"
        fill="#292D32"
      />
      <path
        d="M9.5 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H9.5C9.91 9.25 10.25 9.59 10.25 10C10.25 10.41 9.91 10.75 9.5 10.75Z"
        fill="#292D32"
      />
      <path
        d="M12.5699 11.43L8.67988 15.32C8.64988 15.14 8.62988 14.94 8.62988 14.75C8.62988 12.89 10.1399 11.38 11.9999 11.38C12.1899 11.38 12.3899 11.4 12.5699 11.43Z"
        fill="#292D32"
      />
      <path
        d="M15.38 14.75C15.38 16.61 13.86 18.12 12 18.12C11.13 18.12 10.34 17.79 9.75 17.25L14.5 12.5C15.05 13.09 15.38 13.88 15.38 14.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
