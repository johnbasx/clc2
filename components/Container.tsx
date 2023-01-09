import clsx from "clsx";

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
