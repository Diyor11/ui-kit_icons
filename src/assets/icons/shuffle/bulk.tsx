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
        d="M21.7502 17.9799C21.7502 17.9599 21.7402 17.9399 21.7402 17.9199C21.7302 17.8399 21.7202 17.7599 21.6902 17.6899C21.6502 17.5999 21.6002 17.5299 21.5402 17.4599C21.5402 17.4599 21.5402 17.4499 21.5302 17.4499C21.4602 17.3799 21.3802 17.3299 21.2902 17.2899C21.2002 17.2499 21.1002 17.2299 21.0002 17.2299L16.3302 17.2499C16.3302 17.2499 16.3302 17.2499 16.3202 17.2499C15.7202 17.2499 15.1402 16.9699 14.7802 16.4899L13.5602 14.9199C13.3102 14.5899 12.8402 14.5299 12.5102 14.7899C12.1802 15.0499 12.1202 15.5099 12.3802 15.8399L13.6002 17.4099C14.2502 18.2499 15.2702 18.7499 16.3302 18.7499H16.3402L19.1902 18.7399L18.4802 19.4499C18.1902 19.7399 18.1902 20.2199 18.4802 20.5099C18.6302 20.6599 18.8202 20.7299 19.0102 20.7299C19.2002 20.7299 19.3902 20.6599 19.5402 20.5099L21.5402 18.5099C21.6102 18.4399 21.6602 18.3599 21.7002 18.2699C21.7302 18.1699 21.7502 18.0699 21.7502 17.9799Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M8.42026 6.69C7.77026 5.79 6.73024 5.26001 5.62024 5.26001C5.61024 5.26001 5.61025 5.26001 5.60025 5.26001L2.99023 5.27002C2.58023 5.27002 2.24023 5.61002 2.24023 6.02002C2.24023 6.43002 2.58023 6.77002 2.99023 6.77002L5.60025 6.76001H5.61023C6.24023 6.76001 6.83025 7.06001 7.19025 7.57001L8.27023 9.07001C8.42023 9.27001 8.65025 9.38 8.88025 9.38C9.03025 9.38 9.19025 9.32999 9.32025 9.23999C9.66025 8.99999 9.73023 8.53 9.49023 8.19L8.42026 6.69Z"
        fill="#292D32"
      />
      <path
        d="M21.7402 6.07999C21.7402 6.05999 21.7502 6.04 21.7502 6.03C21.7502 5.93 21.7302 5.82996 21.6902 5.73996C21.6502 5.64996 21.6002 5.56997 21.5302 5.49997L19.5302 3.49997C19.2402 3.20997 18.7602 3.20997 18.4702 3.49997C18.1802 3.78997 18.1802 4.26997 18.4702 4.55997L19.1802 5.26999L16.4503 5.25998C16.4403 5.25998 16.4402 5.25998 16.4302 5.25998C15.2802 5.25998 14.2002 5.82996 13.5602 6.79996L7.17026 16.38C6.81026 16.92 6.20023 17.25 5.55023 17.25H5.54025L2.99023 17.24C2.58023 17.24 2.24023 17.57 2.24023 17.99C2.24023 18.4 2.57023 18.74 2.99023 18.74L5.54025 18.75C5.55025 18.75 5.55024 18.75 5.56024 18.75C6.72024 18.75 7.79024 18.18 8.43024 17.21L14.8203 7.62998C15.1803 7.08998 15.7902 6.75998 16.4402 6.75998H16.4503L21.0002 6.78C21.1002 6.78 21.1903 6.75994 21.2903 6.71994C21.3803 6.67994 21.4602 6.62997 21.5302 6.55997C21.5302 6.55997 21.5303 6.54996 21.5403 6.54996C21.6003 6.47996 21.6602 6.40998 21.6902 6.31998C21.7202 6.23998 21.7302 6.15999 21.7402 6.07999Z"
        fill="#292D32"
      />
    </svg>
  );
};
