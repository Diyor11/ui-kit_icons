import { FC } from "react";

interface IBoldProps {
  className?: string;
}

export const Bold: FC<IBoldProps> = ({ className }) => {
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
        d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z"
        fill="#292D32"
      />
      <path
        d="M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z"
        fill="#292D32"
      />
      <path
        d="M20.97 1H18.03C17.16 1 16.52 1.36 16.23 2C16.07 2.29 16 2.63 16 3.03V3.5V5.97C16 7.24 16.76 8 18.03 8H20.5H20.97C21.37 8 21.71 7.93 22 7.77C22.64 7.48 23 6.84 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM20.3 6.21C19.98 6.4 19.67 6.5 19.5 6.5C19.05 6.5 17.77 5.88 17.39 4.68C17.33 4.5 17.3 4.3 17.3 4.11C17.3 3.94 17.32 3.77 17.37 3.61C17.5 3.14 17.81 2.73 18.33 2.56C18.53 2.5 18.74 2.48 18.93 2.52C19.13 2.55 19.32 2.63 19.49 2.76C19.81 2.51 20.25 2.43 20.67 2.56C21.58 2.86 21.87 3.89 21.61 4.68C21.57 4.8 21.52 4.92 21.46 5.03C21.19 5.57 20.73 5.97 20.3 6.21Z"
        fill="#292D32"
      />
    </svg>
  );
};
