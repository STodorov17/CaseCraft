import { LucideProps } from "lucide-react";

export const Icons = {
  brushstroke: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 400 30" fill="none">
      <path
        d="M2 20 C 50 5, 150 35, 250 15 S 380 25, 400 10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}
