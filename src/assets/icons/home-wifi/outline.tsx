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
        d="M17.5998 22.56H6.39983C4.57983 22.56 2.91983 21.1599 2.61983 19.3599L1.28984 11.4C1.07984 10.16 1.67985 8.56999 2.66985 7.77999L9.59984 2.22994C10.9398 1.14994 13.0498 1.15995 14.3998 2.23995L21.3298 7.77999C22.3098 8.56999 22.9098 10.16 22.7098 11.4L21.3798 19.3599C21.0798 21.1299 19.3898 22.56 17.5998 22.56ZM11.9898 2.9399C11.4598 2.9399 10.9298 3.09999 10.5398 3.40999L3.60982 8.95992C3.03982 9.41992 2.64982 10.44 2.76982 11.16L4.09984 19.12C4.27984 20.17 5.32983 21.06 6.39983 21.06H17.5998C18.6698 21.06 19.7198 20.1699 19.8998 19.1099L21.2298 11.15C21.3498 10.43 20.9499 9.39991 20.3899 8.94991L13.4598 3.40999C13.0598 3.09999 12.5298 2.9399 11.9898 2.9399Z"
        fill="#292D32"
      />
      <path
        d="M14.12 15.13C13.93 15.13 13.7501 15.06 13.6001 14.92C12.6301 13.99 11.3701 13.99 10.3901 14.92C10.0901 15.21 9.62004 15.2 9.33004 14.9C9.04004 14.6 9.05006 14.1299 9.35006 13.8399C10.9001 12.3499 13.0701 12.3499 14.6301 13.8399C14.9301 14.1299 14.94 14.6 14.65 14.9C14.52 15.05 14.32 15.13 14.12 15.13Z"
        fill="#292D32"
      />
      <path
        d="M16.2399 13.01C16.0499 13.01 15.8599 12.9401 15.7199 12.8001C15.2499 12.3401 14.7199 11.97 14.1599 11.7C12.7599 11.03 11.2299 11.03 9.83988 11.7C9.27988 11.97 8.75988 12.3401 8.27988 12.8001C7.98988 13.0901 7.50988 13.0901 7.21988 12.7901C6.92988 12.4901 6.93989 12.02 7.22989 11.73C7.81989 11.15 8.47989 10.69 9.18989 10.35C10.9999 9.48001 12.9999 9.48001 14.7999 10.35C15.5099 10.69 16.1699 11.15 16.7599 11.73C17.0599 12.02 17.0599 12.4901 16.7699 12.7901C16.6299 12.9301 16.4399 13.01 16.2399 13.01Z"
        fill="#292D32"
      />
      <path
        d="M12.0001 17.5C11.7401 17.5 11.4901 17.4 11.2901 17.21C10.9001 16.82 10.9001 16.1901 11.2901 15.8001C11.6801 15.4101 12.32 15.4101 12.71 15.8001C13.1 16.1901 13.1 16.82 12.71 17.21C12.51 17.4 12.2601 17.5 12.0001 17.5Z"
        fill="#292D32"
      />
    </svg>
  );
};