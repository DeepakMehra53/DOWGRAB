"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

import image2 from '../assets/image2.jpg';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export const Testimonials=() =>{
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Carter",
      title: "Digital Marketing Manager",
      image: image1,
      content:
        "😊🐶 Absolutely love the quality of the dog harness I bought! Its durable, comfortable, and stylish. My pup, Max, enjoys his walks so much more now. Highly recommend!",
      layout: "left-image-purple",
      heading: "WHAT THEY SAY ABOUT US?",
    },
    {
      id: 2,
      name: "Sophia Mitchell",
      title: "Global Marketing Officer",
      image: image2,
      content:
        "The chew toys are a lifesaver! My Labrador used to destroy every toy within hours, but these are super tough and keep him entertained for days. Great value for money!",
      layout: "center-image-blue",
      buttons: ["Previous", "Next"],
    },
    {
      id: 3,
      name: "Olivia Bennett",
      title: "",
      image: image3,
      content:
        "I ordered a personalized dog collar, and it’s perfect! The engraving is clear, and the fit is just right. It gives me peace of mind knowing my dog’s name and my contact info are on it.",
      layout: "right-image-white",
      buttons: ["Next"],
    },
    {
      id: 4,
      name: "Ethan Walker",
      title: "Lead Marketing Officer",
      image: image4,
      content:
        "Fast shipping and excellent customer service! The dog bed I purchased is incredibly soft, and my senior dog finally sleeps through the night comfortably. Will definitely shop again!",
      layout: "left-image-white",
      pagination: true,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (count) => {
    return (
      <div className="flex">
        {[...Array(count)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" />
          </svg>
        ))}
      </div>
    );
  };

  const renderTestimonial = (testimonial) => {
    return (
      <div className="flex flex-col md:flex-row bg-[#4F46E5] rounded-lg overflow-hidden max-w-4xl">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="text-[#4F46E5] text-xs font-bold">T</span>
              </div>
              <span className="text-sm">Testimonial</span>
            </div>
            <h2 className="text-2xl font-bold mb-6">
              {testimonial.heading || "WHAT THEY SAY ABOUT US?"}
            </h2>
            <h3 className="text-3xl font-bold mb-2">{testimonial.name}</h3>
            <p className="text-sm mb-6">{testimonial.title}</p>
          </div>
          <div>
            <p className="text-sm mb-4">{testimonial.content}</p>
            {testimonial.rating && renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8">Testimonial</h1>

        <div className="relative flex items-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100 -translate-x-1/2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="ml-40">
            {renderTestimonial(testimonials[activeIndex])}
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100 translate-x-1/2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full mx-1",
                index === activeIndex ? "bg-[#4F46E5]" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
