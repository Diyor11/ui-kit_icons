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
        d="M16.8799 20.25C15.8199 20.25 14.7899 19.94 13.9099 19.35C13.2199 18.93 12.6199 18.31 12.1799 17.58C11.6599 16.73 11.3799 15.75 11.3799 14.75C11.3799 11.72 13.8499 9.25 16.8799 9.25C17.2999 9.25 17.7099 9.30001 18.0999 9.39001C20.5799 9.94001 22.3799 12.19 22.3799 14.75C22.3799 15.76 22.1099 16.74 21.5899 17.59C20.6099 19.23 18.7999 20.25 16.8799 20.25ZM16.8799 10.75C14.6699 10.75 12.8799 12.54 12.8799 14.75C12.8799 15.48 13.0799 16.19 13.4599 16.81C13.7799 17.34 14.2099 17.78 14.7099 18.09C15.3699 18.53 16.1099 18.75 16.8799 18.75C18.2799 18.75 19.5899 18.01 20.3099 16.81C20.6899 16.19 20.8799 15.48 20.8799 14.75C20.8799 12.89 19.5699 11.25 17.7599 10.85C17.4699 10.78 17.1799 10.75 16.8799 10.75Z"
        fill="#292D32"
      />
      <path
        d="M16.1997 16.67C16.0097 16.67 15.8197 16.6 15.6697 16.45L14.4997 15.28C14.2097 14.99 14.2097 14.51 14.4997 14.22C14.7897 13.93 15.2697 13.93 15.5597 14.22L16.2197 14.88L18.2297 13.03C18.5397 12.75 19.0097 12.77 19.2897 13.07C19.5697 13.37 19.5497 13.85 19.2497 14.13L16.7097 16.47C16.5697 16.6 16.3797 16.67 16.1997 16.67Z"
        fill="#292D32"
      />
      <path
        d="M10.9298 22.75C10.4498 22.75 9.96979 22.63 9.53979 22.39C8.6498 21.89 8.11981 20.99 8.11981 19.98V14.63C8.11981 14.12 7.78979 13.37 7.46979 12.98L3.6698 8.98999C3.0398 8.33999 2.5498 7.25001 2.5498 6.45001V4.12C2.5498 2.51 3.76982 1.25 5.31982 1.25H18.6598C20.1898 1.25 21.4298 2.48999 21.4298 4.01999V6.23999C21.4298 7.28999 20.8098 8.47 20.1998 9.09L18.3998 10.68C18.2198 10.84 17.9698 10.9 17.7298 10.85C17.4598 10.78 17.1698 10.75 16.8698 10.75C14.6598 10.75 12.8698 12.54 12.8698 14.75C12.8698 15.48 13.0698 16.19 13.4498 16.81C13.7698 17.34 14.1998 17.78 14.6998 18.09C14.9198 18.23 15.0598 18.47 15.0598 18.73V19.07C15.0598 19.86 14.5798 20.97 13.7798 21.44L12.3998 22.33C11.9598 22.61 11.4398 22.75 10.9298 22.75ZM5.32983 2.75C4.61983 2.75 4.05981 3.35 4.05981 4.12V6.45001C4.05981 6.81001 4.35983 7.54 4.75983 7.94L8.6098 11.99C9.1198 12.62 9.62982 13.68 9.62982 14.63V19.98C9.62982 20.64 10.0898 20.97 10.2798 21.08C10.7098 21.32 11.2198 21.31 11.6098 21.07L13.0098 20.17C13.2798 20.01 13.5498 19.5 13.5698 19.14C13.0198 18.73 12.5398 18.2 12.1798 17.6C11.6598 16.75 11.3798 15.77 11.3798 14.77C11.3798 11.74 13.8498 9.26999 16.8798 9.26999C17.1598 9.26999 17.4398 9.28999 17.6998 9.32999L19.1798 8.01999C19.5198 7.66999 19.9398 6.84 19.9398 6.25V4.03C19.9398 3.33 19.3698 2.76001 18.6698 2.76001H5.32983V2.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
