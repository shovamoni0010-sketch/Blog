import React, { useEffect, useState } from 'react';
import Search from '../component/Search';
import BlogCard from '../component/Blogcard';


const Blog = () => {


  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage] = useState(6);

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const lastProductIndex = currentPage * postperpage;
  const firstProductIndex = lastProductIndex - postperpage;
  const dataToShow = filteredData.slice(firstProductIndex, lastProductIndex);

  return (
    <main className="flex flex-col items-center justify-center mt-20 px-6 ">
      <div className="items-center justify-between max-w-[1200px] w-full">
        <div className="text-center mb-10 px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            All Blog
          </h1>
          <p className="text-gray-500">sdfghjksdfghjk</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
          <Search
            data={data}
            setFilteredData={setFilteredData}
            setCurrentPage={setCurrentPage}
          />
          <select
            className="border rounded px-3 py-2 text-gray-700"
            onChange={e => {
              const selectedCategory = e.target.value;
              setCurrentPage(1);
              if (selectedCategory === '') {
                setFilteredData(data);
              } else {
                setFilteredData(
                  data.filter(item => item.categories === selectedCategory)
                );
              }
            }}
            defaultValue=""
          >
            <option value="">All Categories</option>
            {[...new Set(data.map(item => item.categories))]
              .sort()
              .map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {dataToShow.map(item => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>

        {/* Pagination */}

        <div className="flex justify-center items-center gap-4 mb-10">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-4 py-2 border rounded"
          >
            Prev
          </button>

          <span>
            {currentPage} of {Math.ceil(filteredData.length / postperpage)}
          </span>

          <button
            onClick={() =>
              setCurrentPage(prev =>
                prev < Math.ceil(filteredData.length / postperpage)
                  ? prev + 1
                  : prev
              )
            }
            className="px-4 py-2 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Blog;
