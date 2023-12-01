type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="p-10 mx-32 my-0 bg-slate-100 dark:bg-slate-700">
      {children}
    </div>
  );
};

export default Container;
