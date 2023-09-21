import { FC } from "react";

interface IBoldProps {
  className?: string;
}

export const Bold: FC<IBoldProps> = ({ className }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.47 5.56C21.72 5.81 21.72 6.22 21.47 6.47C21.34 6.59 21.18 6.65 21.01 6.65C20.85 6.65 20.69 6.59 20.56 6.47L19.5 5.41L18.45 6.47C18.32 6.59 18.16 6.65 17.99 6.65C17.83 6.65 17.67 6.59 17.54 6.47C17.29 6.22 17.29 5.81 17.54 5.56L18.6 4.5L17.54 3.45C17.29 3.2 17.29 2.79 17.54 2.54C17.79 2.29 18.2 2.29 18.45 2.54L19.5 3.6L20.56 2.54C20.81 2.29 21.22 2.29 21.47 2.54C21.72 2.79 21.72 3.2 21.47 3.45L20.41 4.5L21.47 5.56Z" fill="#292D32"/>
<path d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z" fill="#292D32"/>
<path d="M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z" fill="#292D32"/>
</svg>

  );
};
