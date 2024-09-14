import { customerInputsStyles, customerLabelsStyles } from "@/app/utils/styles";
import React, { FC } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
  productInfo: any;
  setProductInfo: any;
};

const AddSize: FC<Props> = ({ productInfo, setProductInfo }) => {
  const handleSizeChange = (index: number, value: any) => {
    // Create a deep copy of the productInfo array
    const updatedSize = productInfo.map((item: any) => ({ ...item }));
    // Update the size property of the specific item
    updatedSize[index].size = value;

    // Set the updated productInfo
    setProductInfo(updatedSize);
  };

  const handleQuantityChange = (index: number, value: any) => {
    // Create a deep copy of the productInfo array
    const updatedQuantity = productInfo.map((item: any) => ({ ...item }));

    // Update the quantity property of the specific item
    updatedQuantity[index].quantity = value;

    // Set the updated productInfo
    setProductInfo(updatedQuantity);
  };

  const handleAddSize = () => {
    setProductInfo([...productInfo, { size: "", quantity: 0 }]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="w-full border-[#ffffff] border rounded px-4 py-3">
          {productInfo.map((item: any, index: number) => (
            <div
              className="flex flex-row justify-between items-center py-2 gap-5"
              key={index}
            >
              {/* SIZE */}
              <div className="flex w-[50%] flex-col">
                <label htmlFor="size" className={customerLabelsStyles}>
                  Size
                </label>
                <input
                  key={index}
                  required
                  id="size"
                  name="size"
                  value={item.size}
                  placeholder={"Enter a size"}
                  className={customerInputsStyles}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                />
              </div>

              {/* QUANTITY */}
              <div className="w-[50%]">
                <label htmlFor="size qty" className={customerLabelsStyles}>
                  Quantity
                </label>
                <input
                  id="size qty"
                  type="number"
                  placeholder="Enter a number"
                  value={item.quantity}
                  className={customerInputsStyles}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
              </div>
            </div>
          ))}
          <div className="w-full flex-center">
            <AiOutlinePlusCircle
              className="my-4 cursor-pointer text-center h-[30px] w-[30px] text-white"
              onClick={handleAddSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSize;
