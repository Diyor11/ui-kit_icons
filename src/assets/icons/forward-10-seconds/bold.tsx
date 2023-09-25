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
        d="M19.6901 7.35002C19.4401 7.02002 18.9701 6.95002 18.6401 7.20002C18.3101 7.45002 18.2401 7.92002 18.4901 8.25002C19.5701 9.69002 20.1401 11.37 20.1401 13.11C20.1401 17.6 16.4901 21.25 12.0001 21.25C7.5101 21.25 3.8601 17.6 3.8601 13.11C3.8601 8.62002 7.5101 4.98002 12.0001 4.98002C12.5801 4.98002 13.1701 5.05002 13.8101 5.20002C13.8401 5.21002 13.8701 5.20002 13.9101 5.20002C13.9301 5.20002 13.9601 5.22002 13.9801 5.22002C14.0101 5.22002 14.0301 5.21002 14.0601 5.21002C14.1001 5.21002 14.1301 5.20002 14.1601 5.19002C14.2101 5.18002 14.2601 5.16002 14.3101 5.13002C14.3401 5.11002 14.3801 5.10002 14.4101 5.08002C14.4201 5.07002 14.4401 5.07002 14.4501 5.06002C14.4801 5.04002 14.4901 5.01002 14.5101 4.99002C14.5501 4.95002 14.5801 4.92002 14.6101 4.87002C14.6401 4.83002 14.6501 4.78002 14.6701 4.74002C14.6801 4.71002 14.7001 4.68002 14.7101 4.65002C14.7101 4.63002 14.7101 4.62002 14.7101 4.60002C14.7201 4.55002 14.7201 4.50002 14.7101 4.45002C14.7101 4.40002 14.7101 4.36002 14.7001 4.31002C14.6901 4.27002 14.6701 4.23002 14.6501 4.18002C14.6301 4.13002 14.6101 4.08002 14.5801 4.04002C14.5701 4.02002 14.5701 4.01002 14.5601 4.00002L12.5801 1.53002C12.3201 1.21002 11.8501 1.16002 11.5301 1.41002C11.2101 1.67002 11.1601 2.14002 11.4101 2.46002L12.2301 3.48002C12.1501 3.48002 12.0701 3.47002 11.9901 3.47002C6.6801 3.47002 2.3501 7.79002 2.3501 13.11C2.3501 18.43 6.6701 22.75 11.9901 22.75C17.3101 22.75 21.6301 18.43 21.6301 13.11C21.6401 11.04 20.9601 9.05002 19.6901 7.35002Z"
        fill="#292D32"
      />
      <path
        d="M9.54004 16.67C9.13004 16.67 8.79004 16.33 8.79004 15.92V12.53L8.60004 12.75C8.32004 13.06 7.85004 13.08 7.54004 12.81C7.23004 12.53 7.21004 12.06 7.48004 11.75L8.98004 10.08C9.19004 9.85002 9.52004 9.77002 9.81004 9.88002C10.1 9.99002 10.29 10.27 10.29 10.58V15.93C10.29 16.34 9.96004 16.67 9.54004 16.67Z"
        fill="#292D32"
      />
      <path
        d="M14 16.67C12.48 16.67 11.25 15.44 11.25 13.92V12.57C11.25 11.05 12.48 9.82001 14 9.82001C15.52 9.82001 16.75 11.05 16.75 12.57V13.92C16.75 15.44 15.52 16.67 14 16.67ZM14 11.33C13.31 11.33 12.75 11.89 12.75 12.58V13.93C12.75 14.62 13.31 15.18 14 15.18C14.69 15.18 15.25 14.62 15.25 13.93V12.58C15.25 11.89 14.69 11.33 14 11.33Z"
        fill="#292D32"
      />
    </svg>
  );
};
