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
        d="M10.75 2.45001C11.45 1.86001 12.58 1.86001 13.26 2.45001L14.84 3.80001C15.14 4.05001 15.71 4.26001 16.11 4.26001H17.81C18.87 4.26001 19.74 5.13001 19.74 6.19001V7.89001C19.74 8.29001 19.95 8.85001 20.2 9.15001L21.55 10.73C22.14 11.43 22.14 12.56 21.55 13.24L20.2 14.82C19.95 15.12 19.74 15.68 19.74 16.08V17.78C19.74 18.84 18.87 19.71 17.81 19.71H16.11C15.71 19.71 15.15 19.92 14.85 20.17L13.27 21.52C12.57 22.11 11.44 22.11 10.76 21.52L9.18001 20.17C8.88 19.92 8.31 19.71 7.92 19.71H6.17C5.11 19.71 4.24 18.84 4.24 17.78V16.07C4.24 15.68 4.04 15.11 3.79 14.82L2.44 13.23C1.86 12.54 1.86 11.42 2.44 10.73L3.79 9.14001C4.04 8.84001 4.24 8.28001 4.24 7.89001V6.20001C4.24 5.14001 5.11 4.27001 6.17 4.27001H7.9C8.3 4.27001 8.86 4.06001 9.16 3.81001L10.75 2.45001Z"
        fill="#292D32"
      />
      <path
        d="M12 16.87C11.45 16.87 11 16.42 11 15.87C11 15.32 11.44 14.87 12 14.87C12.55 14.87 13 15.32 13 15.87C13 16.42 12.56 16.87 12 16.87Z"
        fill="#292D32"
      />
      <path
        d="M12 13.72C11.59 13.72 11.25 13.38 11.25 12.97V8.13C11.25 7.72 11.59 7.38 12 7.38C12.41 7.38 12.75 7.72 12.75 8.13V12.96C12.75 13.38 12.42 13.72 12 13.72Z"
        fill="#292D32"
      />
    </svg>
  );
};
