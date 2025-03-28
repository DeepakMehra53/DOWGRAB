import React from "react";
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
  const navigate = useNavigate();

  const handleCompletePurchase = () => {
    // Here you would typically handle the form submission and payment processing
    // For now, we'll just redirect to the thank you page
    navigate('/thankyou');
  };

  return (
    <>
      <div className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-medium mb-8">Complete your order</h1>

        <div className="space-y-8">
          {/* Personal Details */}
          <div>
            <h2 className="text-[#525fe1] font-medium mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter Your First Name..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter Your Last Name..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Phone Number..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-[#525fe1] font-medium mb-4">Payment Details</h2>
            <div className="flex gap-4 mb-6">
              <div className="border border-gray-200 rounded-md p-2 px-4 flex items-center justify-center">
                <span className="text-[#253b80] font-bold">VISA</span>
              </div>
              <div className="border border-gray-200 rounded-md p-2 px-4 flex items-center justify-center">
                <span className="text-[#6d6dbb]">stripe</span>
              </div>
              <div className="border border-gray-200 rounded-md p-2 px-4 flex items-center justify-center">
                <span className="text-[#179bd7] font-bold">P</span>
              </div>
              <div className="border border-gray-200 rounded-md p-2 px-4 flex items-center justify-center">
                <div className="flex">
                  <div className="h-6 w-6 rounded-full bg-[#ed0006]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#f9a000] -ml-2"></div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-md p-2 px-4 flex items-center justify-center">
                <span className="font-medium">G Pay</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="cardHolder"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card holder name
                </label>
                <input
                  id="cardHolder"
                  type="text"
                  placeholder="Enter Your First Name..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="Enter Your Card Number..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="000/0000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="expDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  id="expDate"
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-[#525fe1] font-medium mb-4">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="space-y-2">
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address line 1
                </label>
                <input
                  id="address1"
                  type="text"
                  placeholder="Your Complete Address..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Your City..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="Your State..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="landmark"
                  className="block text-sm font-medium text-gray-700"
                >
                  Landmark
                </label>
                <input
                  id="landmark"
                  type="text"
                  placeholder="Any Landmark (Optional Place to Visit)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <input
                  id="postalCode"
                  type="text"
                  placeholder="ZIP Code (123456)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#525fe1] focus:border-[#525fe1]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#525fe1]">
            Cancel
          </button>
          <button
            className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#525fe1] hover:bg-[#3538cd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#525fe1]"
            onClick={handleCompletePurchase}
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </>
  );
};
