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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 15.25 22.75 15.5 22.73 15.74C22.7 16.06 22.48 16.32 22.17 16.4C21.86 16.48 21.54 16.36 21.36 16.09C21.35 16.08 21.29 16.01 21.28 15.99C20.59 15.2 19.58 14.75 18.51 14.75C17.49 14.75 16.53 15.15 15.82 15.88C15.14 16.58 14.76 17.51 14.76 18.5C14.76 19.17 14.95 19.84 15.3 20.43C15.49 20.75 15.73 21.03 16 21.27L16.12 21.38C16.35 21.57 16.46 21.9 16.37 22.19C16.28 22.48 16.04 22.7 15.74 22.73C15.51 22.75 15.25 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H14.03C14.02 21.24 14.01 21.22 14 21.21C13.5 20.38 13.24 19.45 13.24 18.5C13.24 17.12 13.77 15.82 14.72 14.84C15.7 13.83 17.08 13.25 18.49 13.25C19.48 13.25 20.43 13.52 21.24 14.03V9C21.24 4.39 19.6 2.75 14.99 2.75H9Z"
        fill="#292D32"
      />
      <path
        d="M21.48 7.85999H2.52002C2.11002 7.85999 1.77002 7.51999 1.77002 7.10999C1.77002 6.69999 2.11002 6.35999 2.52002 6.35999H21.48C21.89 6.35999 22.23 6.69999 22.23 7.10999C22.23 7.51999 21.9 7.85999 21.48 7.85999Z"
        fill="#292D32"
      />
      <path
        d="M8.52002 7.71997C8.11002 7.71997 7.77002 7.37997 7.77002 6.96997V2.10999C7.77002 1.69999 8.11002 1.35999 8.52002 1.35999C8.93002 1.35999 9.27002 1.69999 9.27002 2.10999V6.96997C9.27002 7.37997 8.93002 7.71997 8.52002 7.71997Z"
        fill="#292D32"
      />
      <path
        d="M15.48 7.27002C15.07 7.27002 14.73 6.93002 14.73 6.52002V2.10999C14.73 1.69999 15.07 1.35999 15.48 1.35999C15.89 1.35999 16.23 1.69999 16.23 2.10999V6.52002C16.23 6.94002 15.9 7.27002 15.48 7.27002Z"
        fill="#292D32"
      />
      <path
        d="M18.4998 23.75C17.3198 23.75 16.1698 23.35 15.2698 22.61C15.2398 22.59 15.2098 22.57 15.1898 22.55C15.0998 22.47 15.0398 22.43 14.9898 22.37C14.6398 22.07 14.2998 21.67 14.0198 21.21C13.5198 20.38 13.2598 19.45 13.2598 18.5C13.2598 17.12 13.7898 15.82 14.7398 14.84C15.7198 13.83 17.0998 13.25 18.5098 13.25C20.0198 13.25 21.4398 13.89 22.4198 15.01C22.4698 15.05 22.5498 15.15 22.6198 15.25C23.3398 16.12 23.7698 17.29 23.7698 18.5C23.7698 18.94 23.7198 19.35 23.6198 19.74C23.4998 20.24 23.2998 20.73 23.0198 21.2C22.0498 22.78 20.3298 23.75 18.4998 23.75ZM16.0898 21.35C16.1098 21.37 16.1398 21.38 16.1598 21.4C16.8198 21.95 17.6198 22.24 18.4998 22.24C19.8098 22.24 21.0298 21.54 21.7098 20.42C21.9098 20.09 22.0498 19.73 22.1398 19.36C22.2098 19.08 22.2498 18.8 22.2498 18.49C22.2498 17.63 21.9498 16.8 21.3998 16.14C21.3898 16.13 21.2798 16 21.2698 15.98C20.5798 15.19 19.5698 14.74 18.4998 14.74C17.4798 14.74 16.5198 15.14 15.8098 15.87C15.1298 16.57 14.7498 17.5 14.7498 18.49C14.7498 19.16 14.9398 19.83 15.2898 20.42C15.4798 20.74 15.7198 21.02 15.9898 21.26L16.0898 21.35Z"
        fill="#292D32"
      />
      <path
        d="M19.6998 20.43C19.5098 20.43 19.3198 20.36 19.1698 20.21L16.7898 17.83C16.4998 17.54 16.4998 17.06 16.7898 16.77C17.0798 16.48 17.5598 16.48 17.8498 16.77L20.2298 19.15C20.5198 19.44 20.5198 19.92 20.2298 20.21C20.0898 20.35 19.8898 20.43 19.6998 20.43Z"
        fill="#292D32"
      />
      <path
        d="M17.3002 20.45C17.1102 20.45 16.9202 20.38 16.7702 20.23C16.4802 19.94 16.4802 19.46 16.7702 19.17L19.1502 16.79C19.4402 16.5 19.9202 16.5 20.2102 16.79C20.5002 17.08 20.5002 17.56 20.2102 17.85L17.8302 20.23C17.6802 20.38 17.4902 20.45 17.3002 20.45Z"
        fill="#292D32"
      />
    </svg>
  );
};
