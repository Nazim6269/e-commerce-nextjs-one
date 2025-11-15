const storePickup = 100;

const OrderSummary = ({
  totalPrice,
  tax = 0,
}: {
  totalPrice: number;
  tax: number;
}) => {
  return (
    <div>
      {" "}
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
        Order summary
      </h4>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-gray-500 dark:text-gray-400">Original price</dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${totalPrice}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-gray-500 dark:text-gray-400">Store Pickup</dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${storePickup}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${tax}
            </dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-lg font-bold text-gray-900 dark:text-white">
            Total
          </dt>
          <dd className="text-lg font-bold text-gray-900 dark:text-white">
            ${totalPrice + storePickup + tax}
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default OrderSummary;
