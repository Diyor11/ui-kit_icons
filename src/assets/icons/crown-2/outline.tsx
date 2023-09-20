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
        d="M16.6999 19.73H7.29994C6.55994 19.73 5.80994 19.2 5.55994 18.51L1.41993 6.91998C0.909935 5.45998 1.27993 4.78998 1.67993 4.48998C2.07993 4.18998 2.82994 4.00998 4.08994 4.90998L7.98993 7.69998C8.10993 7.76998 8.21994 7.79998 8.29994 7.77998C8.38994 7.74998 8.45994 7.66998 8.50994 7.52998L10.2699 2.83998C10.7999 1.43998 11.5799 1.22998 11.9999 1.22998C12.4199 1.22998 13.1999 1.43998 13.7299 2.83998L15.4899 7.52998C15.5399 7.65998 15.6099 7.74998 15.6999 7.77998C15.7899 7.80998 15.8999 7.77998 16.0099 7.68998L19.6699 5.07998C21.0099 4.11998 21.7899 4.30998 22.2199 4.61998C22.6399 4.93998 23.0299 5.64998 22.4799 7.19998L18.4399 18.51C18.1899 19.2 17.4399 19.73 16.6999 19.73ZM2.67994 5.80998C2.69994 5.94998 2.73993 6.14998 2.83993 6.40998L6.97994 18C7.01994 18.1 7.19994 18.23 7.29994 18.23H16.6999C16.8099 18.23 16.9899 18.1 17.0199 18L21.0599 6.69998C21.1999 6.31998 21.2399 6.05998 21.2499 5.90998C21.0999 5.95998 20.8699 6.06998 20.5399 6.30998L16.8799 8.91998C16.3799 9.26998 15.7899 9.37998 15.2599 9.21998C14.7299 9.05998 14.2999 8.63998 14.0799 8.06998L12.3199 3.37998C12.1899 3.02998 12.0699 2.85998 11.9999 2.77998C11.9299 2.85998 11.8099 3.02998 11.6799 3.36998L9.91994 8.05998C9.70994 8.62998 9.27993 9.04998 8.73993 9.20998C8.20994 9.36998 7.60993 9.25998 7.11994 8.90998L3.21994 6.11998C2.98994 5.95998 2.80994 5.85998 2.67994 5.80998Z"
        fill="#292D32"
      />
      <path
        d="M17.5 22.75H6.5C6.09 22.75 5.75 22.41 5.75 22C5.75 21.59 6.09 21.25 6.5 21.25H17.5C17.91 21.25 18.25 21.59 18.25 22C18.25 22.41 17.91 22.75 17.5 22.75Z"
        fill="#292D32"
      />
      <path
        d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
