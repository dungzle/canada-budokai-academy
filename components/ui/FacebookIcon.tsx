type FacebookIconProps = {
  className?: string;
};

export default function FacebookIcon({
  className = "h-5 w-5",
}: FacebookIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.998 12c0-6.627-5.372-12-11.999-12C5.372 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.737-.9 10.125-5.864 10.125-11.853z" />
    </svg>
  );
}
