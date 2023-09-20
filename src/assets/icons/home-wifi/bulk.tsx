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
        d="M10.07 2.82009L3.14004 8.37008C2.36004 8.99008 1.86002 10.3001 2.03002 11.2801L3.36001 19.2401C3.60001 20.6601 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.6501 20.64 19.2401L21.97 11.2801C22.13 10.3001 21.63 8.99008 20.86 8.37008L13.93 2.8301C12.86 1.9701 11.13 1.97009 10.07 2.82009Z"
        fill="#292D32"
      />
      <path
        d="M14.12 15.1301C13.93 15.1301 13.7501 15.0601 13.6001 14.9201C12.6301 13.9901 11.3701 13.9901 10.3901 14.9201C10.0901 15.2101 9.62004 15.2002 9.33004 14.9002C9.04004 14.6002 9.05006 14.1302 9.35006 13.8402C10.9001 12.3502 13.0701 12.3502 14.6301 13.8402C14.9301 14.1302 14.94 14.6002 14.65 14.9002C14.52 15.0502 14.32 15.1301 14.12 15.1301Z"
        fill="#292D32"
      />
      <path
        d="M16.24 13.01C16.05 13.01 15.86 12.94 15.72 12.8C15.25 12.34 14.72 11.97 14.16 11.7C12.76 11.03 11.23 11.03 9.84 11.7C9.28 11.97 8.76 12.34 8.28 12.8C7.99 13.09 7.51001 13.09 7.22001 12.79C6.93001 12.49 6.94002 12.02 7.23002 11.73C7.82002 11.15 8.48001 10.69 9.19001 10.35C11 9.48001 13 9.48001 14.8 10.35C15.51 10.69 16.17 11.15 16.76 11.73C17.06 12.02 17.06 12.49 16.77 12.79C16.63 12.93 16.44 13.01 16.24 13.01Z"
        fill="#292D32"
      />
      <path
        d="M12.0001 17.5001C11.7401 17.5001 11.4901 17.4001 11.2901 17.2101C10.9001 16.8201 10.9001 16.1901 11.2901 15.8001C11.6801 15.4101 12.32 15.4101 12.71 15.8001C13.1 16.1901 13.1 16.8201 12.71 17.2101C12.51 17.4001 12.2601 17.5001 12.0001 17.5001Z"
        fill="#292D32"
      />
    </svg>
  );
};
