

import React from "react";

const BlogCard = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 w-full h-full p-6 rounded-lg flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={data.image}
        alt={data.name}

        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex flex-col">
        <h5 className="text-2xl font-medium ">{data.name}</h5>
        <h6 className="text-sm font-normal">{data.categories}</h6>
        <p className="text-gray-500 text-sm">{data.subtitle}</p>
      </div>
    </div>
  );
};

export default BlogCard;
