import Image from "next/image";

const CartPage = () => {
  return (
    <section className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="flex flex-col gap-8">
        {/* ITEM */}

        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/20218545/pexels-photo-20218545/free-photo-of-pancakes-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />

          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="">
              {/* TITLE */}
              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">productName</h3>
                <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                  <div className="text-xs text-green-500">quantity</div>
                  $2
                </div>
              </div>
              {/* DESC */}
              <div className="text-sm text-gray-500">availability</div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty. quantity</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
