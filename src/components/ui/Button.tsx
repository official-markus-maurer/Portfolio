import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, href, variant = "primary", className = "", ...rest }: Props) {
  const base = "rounded-full px-5 py-2 text-sm transition";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
      : "border border-border hover:bg-black/5";
  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>
    );
  }
  return (
    <button {...rest} className={`${base} ${styles} ${className}`}>{children}</button>
  );
}
