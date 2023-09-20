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
        d="M9.99008 22.75C9.79008 22.75 9.63008 22.71 9.51008 22.66C9.11008 22.51 8.43008 22.02 8.43008 20.47V14.02H6.09008C4.75008 14.02 4.27008 13.39 4.10008 13.02C3.93008 12.64 3.78008 11.87 4.66008 10.86L12.2301 2.26001C13.2501 1.10001 14.0801 1.18001 14.4801 1.33001C14.8801 1.48001 15.5601 1.97001 15.5601 3.52001V9.97001H17.9001C19.2401 9.97001 19.7201 10.6 19.8901 10.97C20.0601 11.35 20.2101 12.12 19.3301 13.13L11.7601 21.73C11.0501 22.54 10.4301 22.75 9.99008 22.75ZM13.9301 2.74001C13.9001 2.78001 13.6901 2.88001 13.3601 3.26001L5.79008 11.86C5.51008 12.18 5.47008 12.38 5.47008 12.42C5.49008 12.43 5.67008 12.53 6.09008 12.53H9.18008C9.59008 12.53 9.93008 12.87 9.93008 13.28V20.48C9.93008 20.98 10.0201 21.2 10.0601 21.26C10.0901 21.22 10.3001 21.12 10.6301 20.74L18.2001 12.14C18.4801 11.82 18.5201 11.62 18.5201 11.58C18.5001 11.57 18.3201 11.47 17.9001 11.47H14.8101C14.4001 11.47 14.0601 11.13 14.0601 10.72V3.52001C14.0701 3.02001 13.9701 2.81001 13.9301 2.74001Z"
        fill="#292D32"
      />
    </svg>
  );
};
