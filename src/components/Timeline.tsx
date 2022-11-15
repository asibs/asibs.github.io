type Props = {
  children: React.ReactNode;
};

function Timeline({ children }: Props) {
  return (
    <div className="container px-5 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="pt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
