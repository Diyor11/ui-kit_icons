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
        d="M16.19 2H7.82001C4.18001 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18001 21.99 7.82001 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="#292D32"
      />
      <path
        d="M6 14.89C5.59 14.89 5.25 14.55 5.25 14.14V9.84998C5.25 9.43998 5.59 9.09998 6 9.09998C6.41 9.09998 6.75 9.43998 6.75 9.84998V14.14C6.75 14.56 6.41 14.89 6 14.89Z"
        fill="#292D32"
      />
      <path
        d="M9 16.3199C8.59 16.3199 8.25 15.9799 8.25 15.5699V8.42993C8.25 8.01993 8.59 7.67993 9 7.67993C9.41 7.67993 9.75 8.01993 9.75 8.42993V15.5699C9.75 15.9899 9.41 16.3199 9 16.3199Z"
        fill="#292D32"
      />
      <path
        d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75Z"
        fill="#292D32"
      />
      <path
        d="M15 16.3199C14.59 16.3199 14.25 15.9799 14.25 15.5699V8.42993C14.25 8.01993 14.59 7.67993 15 7.67993C15.41 7.67993 15.75 8.01993 15.75 8.42993V15.5699C15.75 15.9899 15.41 16.3199 15 16.3199Z"
        fill="#292D32"
      />
      <path
        d="M18 14.89C17.59 14.89 17.25 14.55 17.25 14.14V9.84998C17.25 9.43998 17.59 9.09998 18 9.09998C18.41 9.09998 18.75 9.43998 18.75 9.84998V14.14C18.75 14.56 18.41 14.89 18 14.89Z"
        fill="#292D32"
      />
    </svg>
  );
};