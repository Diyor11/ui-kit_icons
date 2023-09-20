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
        d="M23.0001 15.3699V17.5599C23.0001 19.9999 21.2201 22.2999 18.8001 22.9699C18.6301 23.0099 18.4501 23.0099 18.2901 22.9699C17.1101 22.6499 16.0701 21.9299 15.3401 20.9999C14.5501 20.0199 14.0901 18.8099 14.0901 17.5599V15.3699C14.0901 14.9499 14.4001 14.49 14.7801 14.33L17.5601 13.1899C18.1901 12.9399 18.8901 12.9399 19.5201 13.1899L20.5201 13.5999L22.3101 14.33C22.6901 14.49 23.0001 14.9499 23.0001 15.3699Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M20.9501 11.0101L20.52 13.6L19.52 13.1901C18.89 12.9401 18.19 12.9401 17.56 13.1901L14.78 14.3301C14.4 14.4901 14.09 14.95 14.09 15.37V17.56C14.09 18.81 14.55 20.0201 15.34 21H6.18003C4.81003 21 3.52005 19.91 3.29005 18.56L2.03004 11.0101C1.87004 10.0801 2.34002 8.83004 3.08002 8.24004L9.66004 2.98003C10.67 2.17003 12.31 2.17004 13.32 2.99004L19.9 8.24004C20.63 8.83004 21.1101 10.0801 20.9501 11.0101Z"
        fill="#292D32"
      />
    </svg>
  );
};
