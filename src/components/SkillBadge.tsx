import classnames from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

function SkillBadge({ className, children }: Props) {
  const classStr = classnames(
    "mx-1 my-1 text-xs inline-flex items-center font-bold leading-tight uppercase px-3 py-1 rounded-full",
    className
  );

  return (
    <div className={classStr}>
      {children}
    </div>
  );
};

export default SkillBadge;
