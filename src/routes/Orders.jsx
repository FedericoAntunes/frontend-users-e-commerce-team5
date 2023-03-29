import { format } from "date-fns";
import { useSelector } from "react-redux";

function Orders() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="bg-bgSecondaryColor pt-[100px] px-40 pb-10">
        <h3 className="text-textPrimary font-light text-3xl">Your Orders</h3>
      </div>
      <div className="px-10 tablet:px-20 laptop:px-40 py-8">
        {user.orders.map((order, i) => {
          return (
            <div
              key={i}
              className="bg-bgPrimaryColor rounded p-5 border border-bgFourthColor shadow-md"
            >
              <div className="tablet:flex gap-5 justify-between mb-5">
                <h3 className="font-light text-sm tablet:text-lg">
                  Order ID: {order._id}
                </h3>
                <h3 className="font-light  text-sm tablet:text-lg">
                  {format(new Date(order.createdAt), "dd'/'M'/'yy")}
                </h3>
              </div>
              <hr className="opacity-20" />
              <div className="ml-0 tablet:ml-10 mb-16 mt-5">
                <h3 className="font-light  text-sm tablet:text-lg">
                  Products:
                </h3>
                {order.details.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-1 tablet:gap-3"
                    >
                      <h3 className=" text-sm tablet:text-lg">
                        {product.model}
                      </h3>
                      <div className="hidden mobilXS:flex items-center gap-3">
                        <h3 className="text-sm tablet:text-lg">⦾</h3>
                        <h3 className="text-sm tablet:text-lg font-light">
                          U$ {product.price.toFixed(2)}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="opacity-20" />
              <div className="flex flex-col items-end w-full mt-5">
                <div className="flex gap-3 items-center">
                  <h3 className="font-light  text-sm tablet:text-lg">
                    Total Price:
                  </h3>
                  <h3 className="font-normal  text-sm tablet:text-lg">
                    U$D {order.totalPrice.toFixed(2)}
                  </h3>
                </div>
                <div className="flex gap-3 items-center">
                  <h3 className="font-light  text-sm tablet:text-lg">
                    Status:
                  </h3>
                  <h3 className="font-normal  text-sm tablet:text-lg">
                    {order.status.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Orders;
