type Props = {
  name: string;
  children: React.ReactNode;
};

function SkillSection({ name, children }: Props) {
  return (
    <>
      <div className="col-span-5 md:col-span-1 text-center md:text-right">
        <h3 className="text-base xl:text-lg font-semibold">
          {name}:
        </h3>
      </div>
      <div className="col-span-5 md:col-span-4 text-center md:text-left">
        {children}
      </div>
    </>
  );
};

export default SkillSection;
