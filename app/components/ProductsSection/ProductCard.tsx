import Image from "next/image";
import React, { FC } from "react";
import Price from "@/app/utils/Price";

type Props = {
  imgUrl: any;
  title: string;
  price: number;
  discountPrice: number;
  inStock: Boolean;
  inEvent: Boolean;
};

const ProductCard: FC<Props> = ({
  imgUrl,
  title,
  price,
  discountPrice,
  inStock,
  inEvent,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center px-8 sm:px-3 hover:px-3 transition-all ">
        <div className="rounded-sm relative">
          <img
            src={imgUrl}
            alt={"image"}
            className="cursor-pointer hover:scale-100 sm:hover:scale-105 transition-all w-[300px] h-[420px]"
          />
          {!inStock && (
            <div className="top-2 right-1 rounded-md text-sm font-semibold absolute px-3 py-1 text-white border uppercase border-white">
              Sold Out
            </div>
          )}
          {inEvent && inStock && (
            <div className="top-2 right-1 rounded-md text-sm font-semibold absolute px-3 py-1 text-white border uppercase border-white">
              Limited-Edition
            </div>
          )}
        </div>
        <div className={`font-[400] text-white rounded-b-xl mt-3`}>
          <h5 className="text-white text-xl text-center mb-2">{title}</h5>
          <Price price={price} discountPrice={discountPrice} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
