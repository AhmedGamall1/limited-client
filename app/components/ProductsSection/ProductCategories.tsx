import React, { FC } from "react";

type Props = {
  name: string;
  onClick: any;
  isSelected: boolean;
};

const ProductCategory: FC<Props> = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? " text-[#ebdcf5] border-[#A760DB] "
    : "text-[#ffffff] border-white";
  return (
    <>
      <button
        className={`${buttonStyle} uppercase border lg:rounded-sm  px-4 py-2 text-sm lg:text-lg cursor-pointer flex items-center justify-center `}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </>
  );
};

export default ProductCategory;
