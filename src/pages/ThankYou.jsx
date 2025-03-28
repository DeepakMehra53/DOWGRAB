import React from 'react'

export const ThankYou = () => {
  return (
    <>
      <div className=" p-27">
        <h2 className=" font-bold text-5xl text-center">
          Thank You for Your Order
        </h2>

        <p className="text-2xl text-center pt-10">
          Your order has been successfully placed. We'll send you an email
          confirmation shortly.
        </p>
        <div className="flex justify-center items-baseline">
          <div className="pt-10">
            <h2 className="text-xl font-semibold ">
              Care Tips for Your New Products
            </h2>
            <h1 className="text-center mt-1">
              Clean regularly with pet-safe products
            </h1>
            <h1 className="text-center mt-1">
              Check for wear and tear periodically
            </h1>
            <h1 className="text-center mt-1">Store in a dry, clean place</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" pt-10">
            <div className="font-bold text-5xl ">Stay Updated</div>
          </div>
        </div>
        <p className="text-center mt-2">
          Subscribe to our newsletter for pet care tips and exclusive offers!
        </p>
        <div className="flex justify-center mt-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-black rounded-l-2xl w-100 hover:bg-blue-100"
          />
          <button className="bg-blue-600 p-2 rounded-r-2xl border-0">
            Subcribe
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-blue-600 border border-blue-400 p-5 font-black rounded-2xl w-40 hover:bg-white">
            Continue
          </button>
          <button className="ml-2 border border-blue-400 p-5 rounded-2xl hover:bg-blue-600 font-black">
            Contact Support
          </button>
        </div>
      </div>
    </>
  );
}
