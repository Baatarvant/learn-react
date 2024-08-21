export const Skill = (props) => {
  const { icon, name } = props;

  return (
    <div className="flex w-fit flex-col items-center">
      {icon}
      <p className="text-base mt-2">{name}</p>
    </div>
  );
};
