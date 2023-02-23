import React from "react";

type PropsType = {
  name: string;
  callBack: () => void;
};

export const Button: React.FC<PropsType> = (props) => {
  const { name, callBack, ...otherProps } = props;

  return (
    <div>
      <button>name</button>
    </div>
  );
};
