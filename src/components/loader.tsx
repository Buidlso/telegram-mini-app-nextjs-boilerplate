import { cn } from "@/lib/utils";

type LoaderProps = React.HTMLAttributes<SVGElement>;

export function Loader({ className, ...props }: LoaderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className={cn("animate-spin", className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 8a6 6 0 1 1 6 6a.5.5 0 0 0 0 1a7 7 0 1 0-7-7a.5.5 0 0 0 1 0"
      />
    </svg>
  );
}
