import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container: React.FC = ({ children }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center bg-slate-200">
      <div className="p-10 my-10 w-full bg-white md:m-10 md:w-3/4 md:rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default Container;
