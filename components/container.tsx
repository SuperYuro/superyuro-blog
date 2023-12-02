type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center p-10 bg-slate-200">
      <div className="p-10 w-3/4 bg-white rounded-2xl">{children}</div>
    </div>
  );
};

export default Container;
