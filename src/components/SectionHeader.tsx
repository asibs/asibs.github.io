import classnames from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

function SectionHeader({ className, children }: Props) {
  const classStr = classnames(
    "text-xl xl:text-2xl font-medium text-gray-900",
    className
  );

  return (
    <h2 className={classStr}>
      {children}
    </h2>
  );
};

export default SectionHeader;
