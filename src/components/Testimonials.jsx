"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Testimonials=() =>{
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Veronica Gleason",
      title: "Digital Marketing Manager",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Consequat auctor consectetur nunc feugiat massa etiam neque lorem sed. Vivit eu accumsan ultrices neque feugiat etiam elit ac. In turpis felis cursus et aliquam sed lacus.",
      rating: 5,
      layout: "left-image-purple",
      heading: "WHAT THEY SAY ABOUT US?",
    },
    {
      id: 2,
      name: "Carolyn Willms",
      title: "Global Marketing Officer",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Massa sed adipiscing adipiscing felis et aliquam. Elementum ullamcorper magna in dignissim. Elementum dignissim etiam vel fermentum dignissim. Tellus arcu ultrices lectus dignissim mollis lorem purus eu tortor arcu.",
      layout: "center-image-blue",
      buttons: ["Previous", "Next"],
    },
    {
      id: 3,
      name: "Simon Árpád",
      title: "",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      layout: "right-image-white",
      buttons: ["Next"],
    },
    {
      id: 4,
      name: "Joanna Impaksa",
      title: "Lead Marketing Officer",
      image: "/placeholder.svg?height=400&width=400",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      layout: "left-image-white",
      pagination: true,
    },
    {
      id: 5,
      name: "Ryan Wyman",
      title: "University of California",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Ipsum vel nobis doloremque qui est sed. Excepturi quis repellendus. Et enim maiores aspernatur quis. Aut enim nobis. Eligendi sed maiores repudiandae recusandae aut voluptate id.",
      layout: "right-image-blue",
      pagination: "01/04",
    },
    {
      id: 6,
      name: "Cecilia Pouros",
      title: "Digital Marketing Officer",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      rating: 5,
      layout: "right-image-blue-card",
      heading: "WHAT YOUR CLIENTS SAY ABOUT YOU",
    },
    {
      id: 7,
      name: "Anthony Springer",
      title: "",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc feugiat massa etiam neque lorem sed.",
      rating: 5,
      layout: "right-image-blue-box",
    },
    {
      id: 8,
      name: "Stacey Prosacco",
      title: "Digital Marketing Officer",
      image: "/placeholder.svg?height=400&width=400",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Consequat auctor consectetur nunc feugiat massa etiam neque lorem sed. Vivit eu accumsan ultrices neque feugiat etiam elit ac. In turpis felis cursus et aliquam sed lacus.",
      rating: 5,
      layout: "right-image-circle-blue",
      heading: "WHAT THEY SAY ABOUT US?",
    },
    {
      id: 9,
      name: "Nick Weimann",
      title: "Digital Marketing Officer",
      image: "/placeholder.svg?height=400&width=300",
      content:
        "Lorem ipsum dolor sit amet, consectetur. Consequat auctor consectetur nunc feugiat massa etiam neque lorem sed. Vivit eu accumsan ultrices neque feugiat etiam elit ac.",
      rating: 5,
      layout: "left-image-blue-vertical",
      heading: "WHAT THEY SAY ABOUT US?",
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
    switch (testimonial.layout) {
      case "left-image-purple":
        return (
          <div className="flex flex-col md:flex-row bg-[#4F46E5] rounded-lg overflow-hidden max-w-4xl">
            <div className="relative w-full md:w-1/2 h-80 md:h-auto">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
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
                  {testimonial.heading}
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

      case "center-image-blue":
        return (
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-4xl">
            <div className="w-full md:w-1/3 p-8 bg-[#4F46E5] text-white flex flex-col justify-between">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-2">
                  <span className="text-[#4F46E5] text-xs font-bold">T</span>
                </div>
                <span className="text-sm">Testimonial</span>
              </div>
              <p className="text-sm">{testimonial.content}</p>
            </div>
            <div className="relative w-full md:w-1/3 h-80 md:h-auto">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/3 p-8 bg-[#4F46E5] text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                <p className="text-sm mb-6">{testimonial.title}</p>
              </div>
              <div className="flex space-x-2">
                {testimonial.buttons?.map((button, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white text-[#4F46E5] rounded text-sm"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "right-image-white":
        return (
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-4xl shadow-md">
            <div className="w-full md:w-2/3 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#4F46E5] flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="text-sm">Testimonial</span>
                </div>
                <div className="text-5xl text-[#4F46E5] mb-4">"</div>
                <p className="text-sm mb-4">{testimonial.content}</p>
                <div className="text-5xl text-[#4F46E5] text-right">"</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 h-80 md:h-auto">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4">
                {testimonial.buttons?.map((button, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-[#4F46E5] text-white rounded text-sm"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "left-image-white":
        return (
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-4xl shadow-md">
            <div className="relative w-full md:w-1/2 h-80 md:h-auto">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="text-5xl text-[#4F46E5] mb-4">"</div>
                <p className="text-sm mb-4">{testimonial.content}</p>
                <div className="text-5xl text-[#4F46E5] text-right">"</div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <div className="flex items-center mt-4">
                  <div className="w-6 h-6 rounded-full bg-[#4F46E5] flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="text-sm">Testimonial</span>
                </div>
              </div>
              {testimonial.pagination && (
                <div className="flex mt-4">
                  <button className="mr-2" onClick={prevTestimonial}>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={nextTestimonial}>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case "right-image-blue":
        return (
          <div className="flex flex-col md:flex-row bg-[#6366F1] rounded-lg overflow-hidden max-w-4xl text-white">
            <div className="w-full md:w-2/3 p-8 flex flex-col justify-between">
              <div>
                <div className="text-5xl text-white mb-4">"</div>
                <p className="text-sm mb-4">{testimonial.content}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                <p className="text-sm opacity-80">{testimonial.title}</p>
                <div className="flex items-center mt-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-2">
                    <span className="text-[#6366F1] text-xs font-bold">T</span>
                  </div>
                  <span className="text-sm">Testimonial</span>
                </div>
              </div>
              {testimonial.pagination && (
                <div className="flex items-center mt-8">
                  <button className="mr-4" onClick={prevTestimonial}>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-2xl font-bold">
                    {testimonial.pagination}
                  </span>
                  <button className="ml-4" onClick={nextTestimonial}>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="relative w-full md:w-1/3 h-80 md:h-auto">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            </div>
          </div>
        );

      case "right-image-blue-card":
        return (
          <div className="flex flex-col md:flex-row max-w-4xl">
            <div className="w-full md:w-2/3 bg-[#4F46E5] p-8 rounded-l-lg text-white">
              <div className="mb-6">
                <div className="bg-[#6366F1] inline-block px-3 py-1 rounded-md text-xs font-bold mb-4">
                  {testimonial.heading}
                </div>
              </div>
              <div className="relative">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={300}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white p-8 rounded-r-lg shadow-lg -ml-8 mt-16 z-10">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-[#4F46E5] flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-sm">Testimonial</span>
              </div>
              <p className="text-sm mb-4">{testimonial.content}</p>
              {testimonial.rating && renderStars(testimonial.rating)}
              <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>
        );

      case "right-image-blue-box":
        return (
          <div className="flex flex-col md:flex-row bg-[#4F46E5] rounded-lg overflow-hidden max-w-4xl text-white">
            <div className="w-full md:w-2/3 p-8">
              <div className="mb-4">
                {testimonial.rating && renderStars(testimonial.rating)}
              </div>
              <p className="text-sm mb-6">{testimonial.content}</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
            <div className="relative w-full md:w-1/3 h-80 md:h-auto">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-lg w-3/4">
                  <h2 className="text-[#4F46E5] text-xl font-bold">
                    What are they saying?
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );

      case "right-image-circle-blue":
        return (
          <div className="flex flex-col md:flex-row bg-[#4F46E5] rounded-lg overflow-hidden max-w-4xl text-white">
            <div className="w-full md:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-2">
                  <span className="text-[#4F46E5] text-xs font-bold">T</span>
                </div>
                <span className="text-sm">Testimonial</span>
              </div>
              <div className="text-5xl text-white mb-4">"</div>
              <p className="text-sm mb-6">{testimonial.content}</p>
              <div className="mb-4">
                {testimonial.rating && renderStars(testimonial.rating)}
              </div>
              <h2 className="text-2xl font-bold mb-6">{testimonial.heading}</h2>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center p-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-8 right-8">
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-sm">{testimonial.title}</p>
            </div>
          </div>
        );

      case "left-image-blue-vertical":
        return (
          <div className="flex flex-col bg-white rounded-lg overflow-hidden max-w-sm shadow-lg">
            <div className="relative h-64">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.title}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm mb-4">{testimonial.content}</p>
              <div className="mb-4">
                {testimonial.rating && renderStars(testimonial.rating)}
              </div>
            </div>
            <div className="bg-[#4F46E5] text-white p-6 flex flex-col items-center">
              <h2 className="text-sm font-bold mb-2">{testimonial.heading}</h2>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#4F46E5] text-xs font-bold">T</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Testimonial Templates</h1>
          <div className="flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          {renderTestimonial(testimonials[activeIndex])}
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
