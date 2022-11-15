import classnames from "classnames";

type Props = {
  lineColorClass: string;
  iconBorderClass: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function TimelineSection({ lineColorClass, iconBorderClass, imageSrc, imageAlt, icon, className, children }: Props) {
  const containerClassStr = classnames("flex relative", className);
  const lineClassStr = classnames("h-full w-1 bg-gradient-to-b pointer-events-none", lineColorClass);
  const iconContainerClassStr = classnames(
    "flex-shrink-0 w-10 h-10 rounded-full bg-white border-4 inline-flex items-center justify-center text-white relative z-10",
    iconBorderClass
  )

  // const fromColor = `from-${color}`;
  // const borderColor = `border-${color}`;

  return (
    <div className={containerClassStr}>
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className={lineClassStr}></div>
      </div>
      <div className={iconContainerClassStr}>
        {imageSrc &&
          (<img className="w-8 h-8 rounded-full" src={imageSrc} alt={imageAlt} />)
        }
        {icon &&
          (<>{icon}</>)
        }
      </div>

      <div className="flex-grow pl-4 text-left">
        {children}
      </div>
    </div>
  );
};

export default TimelineSection;
