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
        d="M21.56 10.74L20.2 9.16C19.94 8.86 19.73 8.3 19.73 7.9V6.2C19.73 5.14 18.86 4.27 17.8 4.27H16.1C15.71 4.27 15.14 4.06 14.84 3.8L13.26 2.44C12.57 1.85 11.44 1.85 10.74 2.44L9.17 3.81C8.87 4.06 8.3 4.27 7.91 4.27H6.18C5.12 4.27 4.25 5.14 4.25 6.2V7.91C4.25 8.3 4.04 8.86 3.79 9.16L2.44 10.75C1.86 11.44 1.86 12.56 2.44 13.25L3.79 14.84C4.04 15.14 4.25 15.7 4.25 16.09V17.8C4.25 18.86 5.12 19.73 6.18 19.73H7.91C8.3 19.73 8.87 19.94 9.17 20.2L10.75 21.56C11.44 22.15 12.57 22.15 13.27 21.56L14.85 20.2C15.15 19.94 15.71 19.73 16.11 19.73H17.81C18.87 19.73 19.74 18.86 19.74 17.8V16.1C19.74 15.71 19.95 15.14 20.21 14.84L21.57 13.26C22.15 12.57 22.15 11.43 21.56 10.74ZM16.16 10.11L11.33 14.94C11.19 15.08 11 15.16 10.8 15.16C10.6 15.16 10.41 15.08 10.27 14.94L7.85 12.52C7.56 12.23 7.56 11.75 7.85 11.46C8.14 11.17 8.62 11.17 8.91 11.46L10.8 13.35L15.1 9.05C15.39 8.76 15.87 8.76 16.16 9.05C16.45 9.34 16.45 9.82 16.16 10.11Z"
        fill="#292D32"
      />
    </svg>
  );
};
