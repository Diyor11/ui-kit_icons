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
        d="M9 10.75H6C5.59 10.75 5.25 10.41 5.25 10C5.25 9.59 5.59 9.25 6 9.25H9C9.41 9.25 9.75 9.59 9.75 10C9.75 10.41 9.41 10.75 9 10.75Z"
        fill="#292D32"
      />
      <path
        d="M17.2398 22.75H6.75977C6.34977 22.75 6.00977 22.41 6.00977 22C6.00977 21.59 6.34977 21.25 6.75977 21.25H17.2398C19.2598 21.25 20.3498 20.22 20.4798 18.2L20.9998 9.93998C21.0498 9.22998 20.8398 8.52998 20.4098 7.95998C20.1598 7.62998 20.2298 7.15998 20.5598 6.90998C20.8898 6.65998 21.3598 6.72998 21.6098 7.05998C22.2498 7.91998 22.5698 8.96998 22.4998 10.04L21.9798 18.3C21.7998 21.13 20.0698 22.75 17.2398 22.75Z"
        fill="#292D32"
      />
      <path
        d="M3.44017 21.21C3.20017 21.21 2.96017 21.09 2.81017 20.87C2.35017 20.17 2.08017 19.3 2.02017 18.29L1.50017 10.04C1.42017 8.79 1.85017 7.59 2.71017 6.68C3.56017 5.77 4.76017 5.25 6.00017 5.25C6.32017 5.25 6.63017 5.06 6.78017 4.76L7.50017 3.33C8.09017 2.16 9.57017 1.25 10.8602 1.25H13.1502C14.4402 1.25 15.9102 2.16 16.5002 3.32L17.2202 4.78C17.3702 5.06 17.6702 5.25 18.0002 5.25C18.4102 5.25 18.7502 5.59 18.7502 6C18.7502 6.41 18.4102 6.75 18.0002 6.75C17.1102 6.75 16.3002 6.25 15.8802 5.46L15.1502 4C14.8202 3.34 13.8802 2.76 13.1402 2.76H10.8502C10.1102 2.76 9.17017 3.34 8.83017 4.01L8.12017 5.44C7.70017 6.25 6.89017 6.75 6.00017 6.75C5.16017 6.75 4.38017 7.09 3.80017 7.7C3.23017 8.31 2.94017 9.11 3.00017 9.94L3.52017 18.2C3.56017 18.93 3.75017 19.57 4.07017 20.04C4.30017 20.39 4.20017 20.85 3.86017 21.08C3.73017 21.17 3.58017 21.21 3.44017 21.21Z"
        fill="#292D32"
      />
      <path
        d="M12.0002 18.75C11.1102 18.75 10.2402 18.45 9.54017 17.9C9.21017 17.64 9.16017 17.17 9.41017 16.85C9.67017 16.52 10.1402 16.47 10.4602 16.72C10.9002 17.06 11.4402 17.25 12.0002 17.25C13.3802 17.25 14.5002 16.13 14.5002 14.75C14.5002 14.27 14.3702 13.81 14.1202 13.42C13.9002 13.07 14.0002 12.61 14.3502 12.38C14.7002 12.16 15.1602 12.26 15.3902 12.61C15.7902 13.24 16.0102 13.98 16.0102 14.74C16.0002 16.96 14.2102 18.75 12.0002 18.75Z"
        fill="#292D32"
      />
      <path
        d="M1.99994 22.75C1.80994 22.75 1.61994 22.68 1.46994 22.53C1.17994 22.24 1.17994 21.76 1.46994 21.47L21.4699 1.47C21.7599 1.18 22.2399 1.18 22.5299 1.47C22.8199 1.76 22.8199 2.24 22.5299 2.53L2.52994 22.53C2.37994 22.68 2.18994 22.75 1.99994 22.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
