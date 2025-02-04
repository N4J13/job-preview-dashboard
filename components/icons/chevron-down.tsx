export default function ChevronDownIcon(
  props: React.ComponentPropsWithoutRef<"svg">
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="black"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
