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
        d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.40002 20.29 4.28002 14.54L5.15002 12.81C5.40002 12.3 5.40002 11.71 5.15002 11.2L4.28002 9.46001C1.40002 3.71001 3.76002 1.35001 9.51002 4.23001Z"
        fill="#292D32"
      />
      <path
        d="M14.8399 12.75H9.43994C9.02994 12.75 8.68994 12.41 8.68994 12C8.68994 11.59 9.02994 11.25 9.43994 11.25H14.8399C15.2499 11.25 15.5899 11.59 15.5899 12C15.5899 12.41 15.2499 12.75 14.8399 12.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
