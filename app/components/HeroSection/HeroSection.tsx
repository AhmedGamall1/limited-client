"use client";
import Image from "next/image";
import Timer from "./Timer";
import { useGetEventQuery } from "@/app/redux/features/events/eventApi";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [event, setEvent] = useState<any>(null);
  const [isEventStart, setIsEventStart] = useState(false);
  const { isLoading, isSuccess, isError, data } = useGetEventQuery<any>({});

  useEffect(() => {
    if (isSuccess) {
      setEvent(data.event);
      const start = new Date(data.event.startTime);
      const now = new Date();
      if (now > start) {
        setIsEventStart(true);
      }
    }
  }, [data, isSuccess]);

  return (
    <>
      {!isError && (
        <>
          {!isLoading && (
            <>
              {event && isEventStart && (
                <div className="flex lg:flex-row-reverse lg:w-[85%] xl:w-[74%] xl:mx-auto lg:mx-auto gap-2 lg:px-8 flex-col mb-16 xs:pt-8 mt-4 items-center justify-center lg:items-center lg:justify-betweem lg:pt-12 text-white">
                  <div className="flex flex-col lg:hidden text-[16px] justify-center items-center gap-1 uppercase mt-4">
                    <p>🔥 Limited-Edition:</p>
                    <p className="text-[13px] text-secondary">
                      Buy any item and enter a draw on this item
                    </p>
                  </div>
                  {/* small devices*/}
                  <div className="w-full xs:hidden  block h-[250px] lg:w-[600px] lg:h-[400px]  ">
                    <Image
                      src={event.eventProductImg.url}
                      alt={"limited edition"}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className=" lg:py-36  xs:hidden lg:gap-16 gap-5 w-full flex flex-col lg:items-start items-center justify-center ">
                    <Timer event={event} />
                    <Link
                      href={`/product/${event.productId}`}
                      className="text-md lg:text-2xl font-semibold border-white lg:border-4 border-2 rounded px-10 py-1 hover:border-primary hover:bg-primary hover:text-black cursor-pointer transition duration-300  min-w-[50%]"
                    >
                      VIEW PRODUCT
                    </Link>
                  </div>
                  {/* meduim devices*/}
                  <div className="justify-between px-6 xs:flex flex-col items-center lg:hidden hidden">
                    <Image
                      src={event.eventProductImg.url}
                      alt={"limited edition"}
                      width={280}
                      height={280}
                    />
                    <div className=" lg:py-36 lg:gap-16 gap-5 w-full flex flex-col lg:items-start items-center justify-center">
                      <Timer event={event} />
                      <Link
                        href={`/product/${event.productId}`}
                        className="text-md lg:text-2xl font-semibold border-white lg:border-4 border-2 rounded px-10 py-1 hover:border-primary hover:bg-primary hover:text-black cursor-pointer transition duration-300  min-w-[50%]"
                      >
                        VIEW PRODUCT
                      </Link>
                    </div>
                  </div>
                  {/* large devices*/}
                  <div className="hidden flex-1 lg:flex flex-col -mt-12 gap-10 justify-center items-center">
                    <div className="hidden flex-col lg:flex text-[24px] justify-center items-center gap-1 uppercase mt-4">
                      <p className="font-bold">🔥 Limited-Edition:</p>
                      <p className="text-[16px] text-secondary text-center whitespace-nowrap">
                        Buy any item and enter a draw on this item.
                      </p>
                    </div>
                    <div className="lg:flex gap-5 w-full hidden flex-col items-center justify-center ">
                      <Timer event={event} />
                      <Link
                        href={`/product/${event.productId}`}
                        className="text-md lg:text-lg font-semibold  border-white lg:border-[3px] border rounded px-10 py-1 hover:border-primary hover:bg-primary hover:text-black cursor-pointer transition duration-300  w-[60%] flex-center"
                      >
                        VIEW PRODUCT
                      </Link>
                    </div>
                  </div>
                  <div className=" hidden  lg:block h-[430px] flex-1 ">
                    <Image
                      src={event.eventProductImg.url}
                      alt={"limited edition"}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default HeroSection;
