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
        d="M22.0201 16.82L18.8901 9.49999C18.3201 8.15999 17.4701 7.39999 16.5001 7.34999C15.5401 7.29999 14.6101 7.96999 13.9001 9.24999L12.0001 12.66C11.6001 13.38 11.0301 13.81 10.4101 13.86C9.78014 13.92 9.15014 13.59 8.64014 12.94L8.42014 12.66C7.71014 11.77 6.83014 11.34 5.93014 11.43C5.03014 11.52 4.26014 12.14 3.75014 13.15L2.02014 16.6C1.40014 17.85 1.46014 19.3 2.19014 20.48C2.92014 21.66 4.19014 22.37 5.58014 22.37H18.3401C19.6801 22.37 20.9301 21.7 21.6701 20.58C22.4301 19.46 22.5501 18.05 22.0201 16.82Z"
        fill="#292D32"
      />
      <path
        d="M6.96984 8.38C8.83657 8.38 10.3498 6.86672 10.3498 5C10.3498 3.13327 8.83657 1.62 6.96984 1.62C5.10312 1.62 3.58984 3.13327 3.58984 5C3.58984 6.86672 5.10312 8.38 6.96984 8.38Z"
        fill="#292D32"
      />
    </svg>
  );
};
