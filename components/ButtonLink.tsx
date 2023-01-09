import Link from "next/link";
import clsx from "clsx";

export type ButtonProps = {
  className?: string;
  href: string;
  children?: React.ReactNode;
};

const styles =
  "inline-flex justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-base font-semibold text-white hover:bg-blue-700 active:text-white/70 duration-150 focus:outline-none focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-blue-500";

export function Button({ className, ...props }: ButtonProps) {
  return <button className={clsx(styles, className)} {...props} />;
}

export function ButtonLink({
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link href={href}>
      <span className={clsx(styles, className)} {...props}>
        {children}
      </span>
    </Link>
  );
}
