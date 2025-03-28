import React from "react";

export const CheckOut = () => {
  return (
    <>
      <div className="flex-1 bg-white p-8">
        <h1 className="text-4xl font-bold  mb-8 text-center">
          Complete your order
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-[#525fe1] text-2xl font-medium mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  placeholder="Enter Your First Name..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Enter Your Last Name..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  placeholder="Enter Your Phone Number..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#525fe1] text-2xl font-medium mb-4">
              Payment Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="cardHolder">Card holder name</label>
                <input
                  id="cardHolder"
                  placeholder="Enter Your First Name..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cardNumber">Card number</label>
                <input
                  id="cardNumber"
                  placeholder="Enter Your Card Number..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  placeholder="000/0000"
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="expDate">Expiration Date</label>
                <input
                  id="expDate"
                  placeholder="MM/YY"
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#525fe1] text-2xl font-medium mb-4">
              Shipping Address
            </h2>
            <div className="space-y-2">
              <label htmlFor="address1">Address line 1</label>
              <input
                id="address1"
                placeholder="Your Complete Address..."
                className="border p-2 w-full rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  placeholder="Your City..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  placeholder="Your State..."
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="landmark">Landmark</label>
                <input
                  id="landmark"
                  placeholder="Any Landmark (Optional Place to Visit)"
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="postalCode">Postal code</label>
                <input
                  id="postalCode"
                  placeholder="ZIP Code (123456)"
                  className="border p-2 w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="flex-1 border p-2">Cancel</button>
          <button className="flex-1 bg-[#525fe1] hover:bg-[#3538cd] text-white p-2">
            Complete Purchase
          </button>
        </div>
      </div>
    </>
  );
};
