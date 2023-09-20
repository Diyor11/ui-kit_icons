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
        d="M16.1703 10.81H7.83022C6.97022 10.81 6.31025 10.47 6.01025 9.88997C5.71025 9.29997 5.83022 8.56997 6.33022 7.87997L10.5002 2.03997C11.2402 0.979969 12.7702 0.979971 13.5202 2.04997L17.6902 7.87997C18.1902 8.56997 18.3102 9.29997 18.0102 9.88997C17.6902 10.47 17.0303 10.81 16.1703 10.81ZM12.0002 2.69997C11.9102 2.69997 11.8102 2.77997 11.7202 2.89997L7.55023 8.74997C7.35023 9.01997 7.34024 9.17997 7.35024 9.20997C7.36024 9.22997 7.50023 9.30997 7.84023 9.30997H16.1802C16.5102 9.30997 16.6503 9.21996 16.6703 9.19997C16.6703 9.17997 16.6602 9.01997 16.4702 8.74997L12.3002 2.90997C12.1902 2.76997 12.0902 2.69997 12.0002 2.69997Z"
        fill="#292D32"
      />
      <path
        d="M17.5901 18.75H6.42017C4.99017 18.75 4.42014 18.06 4.21014 17.65C4.00014 17.24 3.78015 16.38 4.62015 15.22L8.61014 9.62C8.75014 9.42 8.98015 9.31 9.22015 9.31H14.7902C15.0302 9.31 15.2601 9.43 15.4001 9.62L19.3902 15.23C20.2302 16.38 20.0002 17.24 19.7902 17.65C19.5802 18.06 19.0202 18.75 17.5901 18.75ZM9.60016 10.81L5.83014 16.1C5.51014 16.54 5.48016 16.84 5.54016 16.97C5.61016 17.1 5.87016 17.25 6.41016 17.25H17.5801C18.1201 17.25 18.3902 17.1 18.4502 16.97C18.5202 16.84 18.4802 16.54 18.1602 16.1L14.3902 10.8H9.60016V10.81Z"
        fill="#292D32"
      />
      <path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V18C11.25 17.59 11.59 17.25 12 17.25C12.41 17.25 12.75 17.59 12.75 18V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
