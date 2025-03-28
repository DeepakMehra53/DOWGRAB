import React from 'react'

export const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="font-bold text-5xl">Get in Touch</h1>
      <div className="border border-black p-8 rounded-lg w-full max-w-lg shadow-lg mt-2">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border p-3 rounded-md"
          ></textarea>
          <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
