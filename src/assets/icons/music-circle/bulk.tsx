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
        opacity="0.4"
        d="M2.58011 9.41999C2.50011 9.41999 2.41011 9.41001 2.33011 9.38001C1.94011 9.24001 1.74012 8.80999 1.87012 8.41999C2.54012 6.53999 3.70012 4.89002 5.25012 3.64002C5.57012 3.38002 6.04011 3.43 6.30011 3.75C6.56011 4.07 6.51013 4.54 6.19013 4.81C4.86013 5.88 3.86013 7.29999 3.29013 8.91999C3.18013 9.22999 2.89011 9.41999 2.58011 9.41999Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M2.57999 16.08C2.26999 16.08 1.98 15.89 1.87 15.58C1.46 14.41 1.25 13.21 1.25 12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12C2.75 13.04 2.93001 14.08 3.29001 15.08C3.43001 15.47 3.21999 15.9 2.82999 16.04C2.74999 16.07 2.65999 16.08 2.57999 16.08Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M12.0001 22.75C10.9401 22.75 9.89011 22.59 8.87011 22.28C8.47011 22.16 8.25011 21.74 8.37011 21.34C8.49011 20.94 8.91011 20.72 9.31011 20.84C10.1801 21.11 11.0901 21.24 12.0001 21.24C17.1001 21.24 21.2501 17.09 21.2501 11.99C21.2501 11.47 21.2001 10.93 21.1001 10.36C21.0301 9.94998 21.3001 9.55998 21.7101 9.48998C22.1101 9.41998 22.5101 9.68997 22.5801 10.1C22.7001 10.76 22.7601 11.38 22.7601 12C22.7501 17.93 17.9301 22.75 12.0001 22.75Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M5.72022 20.5C5.55022 20.5 5.39022 20.45 5.25022 20.33C4.68022 19.87 4.22021 19.43 3.83021 18.98C3.56021 18.67 3.60022 18.19 3.91022 17.92C4.23022 17.65 4.70022 17.69 4.97022 18C5.30022 18.38 5.70022 18.76 6.19022 19.16C6.51022 19.42 6.56021 19.89 6.30021 20.21C6.16021 20.4 5.94022 20.5 5.72022 20.5Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M20.2399 7.09003C19.9999 7.09003 19.7699 6.98001 19.6199 6.76001C17.8899 4.24001 15.0399 2.73999 11.9999 2.73999C11.0899 2.73999 10.1799 2.87001 9.30991 3.14001C8.91991 3.26001 8.49991 3.04001 8.36991 2.64001C8.23991 2.24001 8.46991 1.82001 8.86991 1.70001C9.88991 1.39001 10.9399 1.22998 11.9999 1.22998C15.5399 1.22998 18.8499 2.98002 20.8599 5.90002C21.0899 6.24002 21.0099 6.71 20.6699 6.94C20.5399 7.05 20.3899 7.09003 20.2399 7.09003Z"
        fill="#292D32"
      />
      <path
        d="M16.03 6.50003C15.7 6.25003 15.1 6.00004 14.14 6.26004L10.95 7.12002C10.03 7.38002 9.42999 8.16002 9.42999 9.12002V10.76V13.3401C9.16999 13.2401 8.89 13.18 8.59 13.18C7.3 13.18 6.25 14.23 6.25 15.52C6.25 16.81 7.3 17.86 8.59 17.86C9.87 17.86 10.9 16.83 10.92 15.56C10.92 15.55 10.93 15.54 10.93 15.52V11.33L15.25 10.1501V12.2801C14.99 12.1801 14.71 12.12 14.41 12.12C13.12 12.12 12.07 13.17 12.07 14.46C12.07 15.75 13.12 16.8 14.41 16.8C15.7 16.8 16.75 15.75 16.75 14.46V9.17001V8.25003C16.75 7.45003 16.51 6.86003 16.03 6.50003ZM8.59 16.36C8.13 16.36 7.75 15.98 7.75 15.52C7.75 15.06 8.13 14.68 8.59 14.68C9.05 14.68 9.42999 15.06 9.42999 15.52C9.42999 15.98 9.05 16.36 8.59 16.36ZM14.41 15.3C13.95 15.3 13.57 14.92 13.57 14.46C13.57 14 13.95 13.62 14.41 13.62C14.87 13.62 15.25 14 15.25 14.46C15.25 14.92 14.87 15.3 14.41 15.3Z"
        fill="#292D32"
      />
    </svg>
  );
};
