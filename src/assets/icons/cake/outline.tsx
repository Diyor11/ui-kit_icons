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
        d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
        fill="#292D32"
      />
      <path
        d="M20.8901 22.75C20.4801 22.75 20.1401 22.41 20.1401 22V13C20.1401 11.76 18.9801 10.75 17.5601 10.75H6.44011C5.02011 10.75 3.86011 11.76 3.86011 13V22C3.86011 22.41 3.52011 22.75 3.11011 22.75C2.70011 22.75 2.36011 22.41 2.36011 22V13C2.36011 10.93 4.19011 9.25 6.44011 9.25H17.5501C19.8001 9.25 21.6301 10.93 21.6301 13V22C21.6401 22.41 21.3001 22.75 20.8901 22.75Z"
        fill="#292D32"
      />
      <path
        d="M18.4401 10.75C18.0301 10.75 17.6901 10.41 17.6901 10V7.17C17.6901 6.39 16.9401 5.75 16.0301 5.75H7.98006C7.06006 5.75 6.32006 6.39 6.32006 7.17V10C6.32006 10.41 5.98006 10.75 5.57006 10.75C5.16006 10.75 4.81006 10.41 4.81006 10V7.17C4.81006 5.56 6.23006 4.25 7.97006 4.25H16.0201C17.7601 4.25 19.1801 5.56 19.1801 7.17V10C19.1901 10.41 18.8501 10.75 18.4401 10.75Z"
        fill="#292D32"
      />
      <path
        d="M17.33 17.75C16.17 17.75 15.23 16.81 15.23 15.65V15.34C15.23 15.01 14.96 14.74 14.63 14.74C14.3 14.74 14.03 15.01 14.03 15.34V15.65C14.03 16.81 13.09 17.75 11.93 17.75C10.77 17.75 9.82995 16.81 9.82995 15.65V15.34C9.82995 15.01 9.55995 14.74 9.22995 14.74C8.89995 14.74 8.62995 15.01 8.62995 15.34V15.65C8.62995 16.81 7.68995 17.75 6.52995 17.75C5.36995 17.75 4.42995 16.81 4.42995 15.65V15.32C4.42995 15 4.16995 14.73 3.83995 14.72H3.46995C3.05995 14.71 2.71995 14.37 2.72995 13.96C2.73995 13.55 3.06995 13.22 3.47995 13.22H3.48995H3.85995C4.99995 13.24 5.92995 14.18 5.92995 15.32V15.65C5.92995 15.98 6.19995 16.25 6.52995 16.25C6.85995 16.25 7.12995 15.98 7.12995 15.65V15.34C7.12995 14.18 8.06995 13.24 9.22995 13.24C10.39 13.24 11.33 14.18 11.33 15.34V15.65C11.33 15.98 11.6 16.25 11.93 16.25C12.26 16.25 12.53 15.98 12.53 15.65V15.34C12.53 14.18 13.47 13.24 14.63 13.24C15.79 13.24 16.73 14.18 16.73 15.34V15.65C16.73 15.98 17 16.25 17.33 16.25C17.66 16.25 17.93 15.98 17.93 15.65V15.34C17.93 14.18 18.87 13.24 20.03 13.24H20.48C20.89 13.24 21.23 13.58 21.23 13.99C21.23 14.4 20.89 14.74 20.48 14.74H20.03C19.7 14.74 19.43 15.01 19.43 15.34V15.65C19.43 16.81 18.49 17.75 17.33 17.75Z"
        fill="#292D32"
      />
      <path
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V3C7.25 2.59 7.59 2.25 8 2.25C8.41 2.25 8.75 2.59 8.75 3V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="#292D32"
      />
      <path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V3C15.25 2.59 15.59 2.25 16 2.25C16.41 2.25 16.75 2.59 16.75 3V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill="#292D32"
      />
      <path
        d="M12 5.75C11.59 5.75 11.25 5.41 11.25 5V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V5C12.75 5.41 12.41 5.75 12 5.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
