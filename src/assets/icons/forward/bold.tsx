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
        d="M2 8.34001V15.66C2 17.16 3.63 18.1 4.93 17.35L8.1 15.52L11.27 13.69L11.76 13.41V10.59L11.27 10.31L8.1 8.48001L4.93 6.65001C3.63 5.90001 2 6.84001 2 8.34001Z"
        fill="#292D32"
      />
      <path
        d="M11.76 8.34001V15.66C11.76 17.16 13.39 18.1 14.68 17.35L17.86 15.52L21.03 13.69C22.32 12.94 22.32 11.06 21.03 10.31L17.86 8.48001L14.68 6.65001C13.39 5.90001 11.76 6.84001 11.76 8.34001Z"
        fill="#292D32"
      />
    </svg>
  );
};
