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
        d="M14.35 21.75H8.64999C3.45999 21.75 1.25 19.54 1.25 14.35V8.65002C1.25 3.46002 3.45999 1.25 8.64999 1.25H14.35C19.54 1.25 21.75 3.46002 21.75 8.65002V14.35C21.75 14.71 21.74 15.05 21.72 15.38C21.7 15.68 21.5 15.94 21.21 16.04C20.92 16.14 20.61 16.05 20.4 15.83C19.8 15.15 18.92 14.75 17.99 14.75C16.2 14.75 14.74 16.21 14.74 18C14.74 18.59 14.9 19.17 15.21 19.67C15.37 19.95 15.58 20.2 15.82 20.41C16.05 20.61 16.14 20.93 16.04 21.21C15.94 21.5 15.68 21.7 15.38 21.72C15.06 21.74 14.72 21.75 14.35 21.75ZM8.64999 2.75C4.28999 2.75 2.75 4.29002 2.75 8.65002V14.35C2.75 18.71 4.28999 20.25 8.64999 20.25H13.82C13.45 19.57 13.25 18.8 13.25 18C13.25 15.38 15.38 13.25 18 13.25C18.8 13.25 19.57 13.45 20.25 13.81V8.65002C20.25 4.29002 18.71 2.75 14.35 2.75H8.64999Z"
        fill="#292D32"
      />
      <path
        d="M6.72002 15.17C5.51002 15.17 4.52002 14.18 4.52002 12.97C4.52002 11.76 5.51002 10.77 6.72002 10.77C7.93002 10.77 8.92001 11.76 8.92001 12.97C8.92001 14.18 7.93002 15.17 6.72002 15.17ZM6.72002 12.27C6.34002 12.27 6.02002 12.58 6.02002 12.97C6.02002 13.35 6.33002 13.67 6.72002 13.67C7.11002 13.67 7.42001 13.36 7.42001 12.97C7.42001 12.58 7.11002 12.27 6.72002 12.27Z"
        fill="#292D32"
      />
      <path
        d="M8.16992 13.7199C7.75992 13.7199 7.41992 13.3799 7.41992 12.9699V7.13993C7.41992 6.22993 7.98992 5.48992 8.85992 5.24992L11.7599 4.45994C12.6599 4.20994 13.2299 4.44992 13.5399 4.68992C13.8499 4.92992 14.2299 5.40994 14.2299 6.33994V11.9999C14.2299 12.4099 13.8899 12.7499 13.4799 12.7499C13.0699 12.7499 12.7299 12.4099 12.7299 11.9999V6.33994C12.7299 6.01994 12.6599 5.89992 12.6299 5.87992C12.5999 5.85992 12.4599 5.81994 12.1499 5.89994L9.25992 6.68992C8.95992 6.76992 8.91992 6.97992 8.91992 7.12992V12.9599C8.91992 13.3799 8.57992 13.7199 8.16992 13.7199Z"
        fill="#292D32"
      />
      <path
        d="M12.0301 14.2C10.8201 14.2 9.83008 13.2099 9.83008 11.9999C9.83008 10.7899 10.8201 9.79993 12.0301 9.79993C13.2401 9.79993 14.2301 10.7899 14.2301 11.9999C14.2301 13.2199 13.2401 14.2 12.0301 14.2ZM12.0301 11.3099C11.6501 11.3099 11.3301 11.6199 11.3301 12.0099C11.3301 12.3899 11.6401 12.71 12.0301 12.71C12.4201 12.71 12.7301 12.3999 12.7301 12.0099C12.7301 11.6199 12.4101 11.3099 12.0301 11.3099Z"
        fill="#292D32"
      />
      <path
        d="M8.17006 9.57996C7.84006 9.57996 7.54006 9.35997 7.45006 9.02997C7.34006 8.62997 7.58006 8.21992 7.98006 8.10992L13.2901 6.65991C13.6901 6.55991 14.1001 6.78994 14.2101 7.18994C14.3201 7.58994 14.0801 7.99992 13.6801 8.10992L8.37006 9.55994C8.30006 9.56994 8.23006 9.57996 8.17006 9.57996Z"
        fill="#292D32"
      />
      <path
        d="M18 22.75C16.34 22.75 14.78 21.87 13.94 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 15.38 15.38 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 18.87 22.51 19.72 22.06 20.45C21.22 21.87 19.66 22.75 18 22.75ZM18 14.75C16.21 14.75 14.75 16.21 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.81 20.67 16.85 21.25 18 21.25C19.15 21.25 20.19 20.66 20.78 19.68C21.09 19.17 21.25 18.6 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z"
        fill="#292D32"
      />
      <path
        d="M19.49 18.73H16.5C16.09 18.73 15.75 18.39 15.75 17.98C15.75 17.57 16.09 17.23 16.5 17.23H19.49C19.9 17.23 20.24 17.57 20.24 17.98C20.24 18.39 19.91 18.73 19.49 18.73Z"
        fill="#292D32"
      />
      <path
        d="M18 20.26C17.59 20.26 17.25 19.92 17.25 19.51V16.52C17.25 16.11 17.59 15.77 18 15.77C18.41 15.77 18.75 16.11 18.75 16.52V19.51C18.75 19.93 18.41 20.26 18 20.26Z"
        fill="#292D32"
      />
    </svg>
  );
};
