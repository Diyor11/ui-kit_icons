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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="#292D32"
      />
      <path
        d="M7 22.25C6.59 22.25 6.25 21.91 6.25 21.5V2.5C6.25 2.09 6.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5V21.5C7.75 21.91 7.41 22.25 7 22.25Z"
        fill="#292D32"
      />
      <path
        d="M11.47 17.55C10.23 17.55 9.22998 16.5401 9.22998 15.3101C9.22998 14.0801 10.24 13.0701 11.47 13.0701C12.7 13.0701 13.71 14.0801 13.71 15.3101C13.71 16.5401 12.7 17.55 11.47 17.55ZM11.47 14.5601C11.06 14.5601 10.73 14.89 10.73 15.3C10.73 15.71 11.06 16.04 11.47 16.04C11.88 16.04 12.21 15.71 12.21 15.3C12.21 14.89 11.87 14.5601 11.47 14.5601Z"
        fill="#292D32"
      />
      <path
        d="M12.96 16.06C12.55 16.06 12.21 15.72 12.21 15.31V9.3C12.21 8.38 12.79 7.62002 13.68 7.38002L16.66 6.57002C17.58 6.32002 18.16 6.56001 18.48 6.81001C18.94 7.16001 19.18 7.73001 19.18 8.50001V14.33C19.18 14.74 18.84 15.08 18.43 15.08C18.02 15.08 17.68 14.74 17.68 14.33V8.50001C17.68 8.17001 17.61 8.03002 17.57 8.01002C17.52 7.97002 17.35 7.95004 17.06 8.03004L14.08 8.84004C13.84 8.91004 13.72 9.06002 13.72 9.32002V15.33C13.71 15.72 13.37 16.06 12.96 16.06Z"
        fill="#292D32"
      />
      <path
        d="M16.9299 16.55C15.6899 16.55 14.6899 15.5401 14.6899 14.3101C14.6899 13.0701 15.6999 12.0701 16.9299 12.0701C18.1599 12.0701 19.1699 13.0801 19.1699 14.3101C19.1799 15.5501 18.1699 16.55 16.9299 16.55ZM16.9299 13.5701C16.5199 13.5701 16.1899 13.9001 16.1899 14.3101C16.1899 14.7201 16.5199 15.05 16.9299 15.05C17.3399 15.05 17.6699 14.7201 17.6699 14.3101C17.6699 13.9001 17.3399 13.5701 16.9299 13.5701Z"
        fill="#292D32"
      />
      <path
        d="M12.9601 11.7899C12.6301 11.7899 12.3301 11.5699 12.2401 11.2399C12.1301 10.8399 12.3701 10.4299 12.7701 10.3199L18.2401 8.82994C18.6401 8.71994 19.0501 8.95991 19.1601 9.35991C19.2701 9.75991 19.0301 10.17 18.6301 10.28L13.1601 11.7699C13.0901 11.7799 13.0201 11.7899 12.9601 11.7899Z"
        fill="#292D32"
      />
    </svg>
  );
};
