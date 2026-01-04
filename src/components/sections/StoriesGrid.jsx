import React from "react";
import Card from "../ui/Card";
import ImageWithFallback from "../ui/ImageWithFallback";

const StoriesGrid = ({ items }) => {
  return (
    <section className="container mx-auto mt-16 px-4 sm:px-6 md:px-[5%]">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
          Success Stories
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-3">
          Real Couples, Real Happiness
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Every day, we help create beautiful love stories. Here are some recent
          matches made in heaven.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
        {items.map((s, i) => (
          <Card
            key={i}
            className="group p-3 bg-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden">
              <ImageWithFallback
                src={s.image}
                fallback="https://images.unsplash.com/photo-1549122728-f519709caa9c?q=80&w=900&auto=format&fit=crop"
                alt={s.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-white/95 text-green-700 text-xs px-3 py-1.5 rounded-full shadow">
                Married {s.married}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <p className="font-semibold text-sm sm:text-base">
                {s.title}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                {s.location}
              </p>
              <p className="text-gray-700 mt-2 text-sm">
                {s.quote}
              </p>
              <div className="mt-2 text-yellow-500 text-sm">
                ★★★★★
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StoriesGrid;
