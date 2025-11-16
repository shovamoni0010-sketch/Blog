import React, { useEffect, useState } from 'react';
import Search from '../component/Search';
import BlogCard from '../component/Blogcard';


const Blog = () => {
  const data = [

      {
        id: 1,
        categories: 'Tech',
        name: 'Borsha',
        image: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
        subtitle: 'Synchronised interactive local area network',

      },
      {
        id: 2,
        categories: 'Tech',
        name: 'Shomapty',
        image: 'http://dummyimage.com/136x100.png/dddddd/000000',
        subtitle: 'Multi-layered web-enabled interface',
      },
      {
        id: 3,
        categories: 'Tech',
        name: 'Moni',
        image: 'http://dummyimage.com/230x100.png/ff4444/ffffff',
        subtitle: 'Future-proofed global solution',
      },
      {
        id: 4,
        categories: 'Tech',
        name: 'Bipa',
        image: 'http://dummyimage.com/165x100.png/ff4444/ffffff',
        subtitle: 'Customizable needs-based initiative',
      },
      {
        id: 5,
        categories: 'Tech',
        name: 'Pavla',
        image: 'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
        subtitle: 'Polarised dedicated software',
      },
      {
        id: 6,
        categories: 'Tech',
        name: 'Avictor',
        image: 'http://dummyimage.com/183x100.png/ff4444/ffffff',
        subtitle: 'Up-sized non-volatile model',
      },
      {
        id: 7,
        categories: 'Travel',
        name: 'Ninnette',
        image: 'http://dummyimage.com/242x100.png/ff4444/ffffff',
        subtitle: 'Progressive scalable instruction set',
      },
      {
        id: 8,
        categories: 'Travel',
        name: 'Yoshiko',
        image: 'http://dummyimage.com/100x100.png/dddddd/000000',
        subtitle: 'Sharable interactive local area network',
      },
      {
        id: 9,
        categories: 'Travel',
        name: 'Win',
        image: 'http://dummyimage.com/113x100.png/dddddd/000000',
        subtitle: 'Progressive mobile internet solution',
      },
      {
        id: 10,
        categories: 'Travel',
        name: 'Deni',
        image: 'http://dummyimage.com/188x100.png/cc0000/ffffff',
        subtitle: 'Down-sized dedicated structure',
      },
      {
        id: 11,
        categories: 'Travel',
        name: 'Ericha',
        image: 'http://dummyimage.com/102x100.png/dddddd/000000',
        subtitle: 'Customer-focused disintermediate artificial intelligence',
      },
      {
        id: 12,
        categories: 'Travel',
        name: 'Dionis',
        image: 'http://dummyimage.com/199x100.png/dddddd/000000',
        subtitle: 'Down-sized zero tolerance open architecture',
      },
      {
        id: 13,
        categories: 'Travel',
        name: 'Tamera',
        image: 'http://dummyimage.com/140x100.png/cc0000/ffffff',
        subtitle: 'Fundamental cohesive application',
      },
      {
        id: 14,
        categories: 'Travel',
        name: 'Aloysius',
        image: 'http://dummyimage.com/149x100.png/dddddd/000000',
        subtitle: 'Object-based global utilisation',
      },
      {
        id: 15,
        categories: 'Travel',
        name: 'Val',
        image: 'http://dummyimage.com/208x100.png/ff4444/ffffff',
        subtitle: 'Proactive 3rd generation implementation',
      },
      {
        id: 16,
        categories: 'Travel',
        name: 'Parrnell',
        image: 'http://dummyimage.com/146x100.png/cc0000/ffffff',
        subtitle: 'Exclusive dynamic Graphic Interface',
      },
      {
        id: 17,
        categories: 'Travel',
        name: 'Martin',
        image: 'http://dummyimage.com/132x100.png/5fa2dd/ffffff',
        subtitle: 'Persistent heuristic secured line',
      },
      {
        id: 18,
        categories: 'Travel',
        name: 'Bartie',
        image: 'http://dummyimage.com/140x100.png/dddddd/000000',
        subtitle: 'Configurable exuding focus group',
      },
      {
        id: 19,
        categories: 'Food',
        name: 'Robbyn',
        image: 'http://dummyimage.com/217x100.png/ff4444/ffffff',
        subtitle: 'Pre-emptive global implementation',
      },
      {
        id: 20,
        categories: 'Food',
        name: 'Kira',
        image: 'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
        subtitle: 'Persevering responsive superstructure',
      },
      {
        id: 21,
        categories: 'Food',
        name: 'Dilly',
        image: 'http://dummyimage.com/144x100.png/dddddd/000000',
        subtitle: 'User-friendly stable definition',
      },
      {
        id: 22,
        categories: 'Food',
        name: 'Ricky',
        image: 'http://dummyimage.com/197x100.png/dddddd/000000',
        subtitle: 'Persistent systemic policy',
      },
      {
        id: 23,
        categories: 'Food',
        name: 'Stefania',
        image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
        subtitle: 'Multi-lateral intangible firmware',
      },
      {
        id: 24,
        categories: 'Food',
        name: 'Oriana',
        image: 'http://dummyimage.com/188x100.png/dddddd/000000',
        subtitle: 'Fully-configurable actuating model',
      },
      {
        id: 25,
        categories: 'Food',
        name: 'Fina',
        image: 'http://dummyimage.com/173x100.png/dddddd/000000',
        subtitle: 'Advanced leading edge hierarchy',
      },
      {
        id: 26,
        categories: 'Food',
        name: 'Gipsy',
        image: 'http://dummyimage.com/231x100.png/5fa2dd/ffffff',
        subtitle: 'Upgradable next generation alliance',
      },
      {
        id: 27,
        categories: 'Food',
        name: 'Ivy',
        image: 'http://dummyimage.com/114x100.png/5fa2dd/ffffff',
        subtitle: 'Business-focused exuding interface',
      },
      {
        id: 28,
        categories: 'Food',
        name: 'Maximo',
        image: 'http://dummyimage.com/198x100.png/dddddd/000000',
        subtitle: 'Customizable background open system',
      },
      {
        id: 29,
        categories: 'Food',
        name: 'Hermon',
        image: 'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
        subtitle: 'Polarised didactic website',
      },
      {
        id: 30,
        categories: 'Food',
        name: 'Dag',
        image: 'http://dummyimage.com/183x100.png/cc0000/ffffff',
        subtitle: 'Re-contextualized asynchronous hardware',
      },
      {
        id: 31,
        categories: 'Food',
        name: 'Lindon',
        image: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
        subtitle: 'Grass-roots high-level standardization',
      },
      {
        id: 32,
        categories: 'Food',
        name: 'Birk',
        image: 'http://dummyimage.com/122x100.png/cc0000/ffffff',
        subtitle: 'Front-line multi-tasking hardware',
      },
      {
        id: 33,
        categories: 'Food',
        name: 'Maryl',
        image: 'http://dummyimage.com/176x100.png/ff4444/ffffff',
        subtitle: 'Synergized optimizing workforce',
      },
      {
        id: 34,
        categories: 'Food',
        name: 'Bernarr',
        image: 'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
        subtitle: 'Exclusive methodical function',
      },
      {
        id: 35,
        categories: 'Food',
        name: 'Wandie',
        image: 'http://dummyimage.com/132x100.png/ff4444/ffffff',
        subtitle: 'Robust bifurcated archive',
      },
      {
        id: 36,
        categories: 'Food',
        name: 'Tammara',
        image: 'http://dummyimage.com/203x100.png/cc0000/ffffff',
        subtitle: 'Enhanced hybrid process improvement',
      },
      {
        id: 37,
        categories: 'Food',
        name: 'Symon',
        image: 'http://dummyimage.com/134x100.png/ff4444/ffffff',
        subtitle: 'Proactive value-added contingency',
      },
      {
        id: 38,
        categories: 'Food',
        name: 'Faustine',
        image: 'http://dummyimage.com/195x100.png/ff4444/ffffff',
        subtitle: 'Versatile logistical protocol',
      },
      {
        id: 39,
        categories: 'Food',
        name: 'Christabella',
        image: 'http://dummyimage.com/207x100.png/ff4444/ffffff',
        subtitle: 'Fully-configurable eco-centric complexity',
      },
      {
        id: 40,
        categories: 'Tech',
        name: 'Omar',
        image: 'http://dummyimage.com/181x100.png/ff4444/ffffff',
        subtitle: 'Operative value-added strategy',
      },
      {
        id: 41,
        categories: 'Tech',
        name: 'Rainer',
        image: 'http://dummyimage.com/147x100.png/ff4444/ffffff',
        subtitle: 'Triple-buffered foreground superstructure',
      },
      {
        id: 42,
        categories: 'Tech',
        name: 'Gray',
        image: 'http://dummyimage.com/205x100.png/5fa2dd/ffffff',
        subtitle: 'Automated mobile artificial intelligence',
      },
      {
        id: 43,
        categories: 'Tech',
        name: 'Kristel',
        image: 'http://dummyimage.com/131x100.png/dddddd/000000',
        subtitle: 'Reactive zero administration hardware',
      },
      {
        id: 44,
        categories: 'Tech',
        name: 'Ahmad',
        image: 'http://dummyimage.com/191x100.png/5fa2dd/ffffff',
        subtitle: 'Down-sized human-resource software',
      },
      {
        id: 45,
        categories: 'Tech',
        name: 'Vernon',
        image: 'http://dummyimage.com/155x100.png/ff4444/ffffff',
        subtitle: 'Right-sized dedicated migration',
      },
      {
        id: 46,
        categories: 'Tech',
        name: 'Konrad',
        image: 'http://dummyimage.com/197x100.png/cc0000/ffffff',
        subtitle: 'Extended zero defect orchestration',
      },
      {
        id: 47,
        categories:'Travel',
        name: 'Briana',
        image: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
        subtitle: 'Synergized static application',
      },
      {
        id: 48,
        categories:'Travel',
        name: 'Barbe',
        image: 'http://dummyimage.com/108x100.png/dddddd/000000',
        subtitle: 'Triple-buffered executive challenge',
      },
      {
        id: 49,
        categories:'Travel',
        name: 'Lutero',
        image: 'http://dummyimage.com/212x100.png/cc0000/ffffff',
        subtitle: 'Fundamental dedicated artificial intelligence',
      },
      {
        id: 50,
        categories:'Travel',
        name: 'Margery',
        image: 'http://dummyimage.com/160x100.png/ff4444/ffffff',
        subtitle: 'Customer-focused tangible database',
      },
  ];

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
    <main className="flex flex-col items-center justify-center mt-20 px-4 ">
      <div className=" items-center justify-between space-x-8 max-w-[1200px] w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">All Blog</h1>
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
            className="px-4 py-2 border rounded">Prev</button>

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
            className="px-4 py-2 border rounded">Next</button>
        </div>
      </div>
    </main>
  );
};

export default Blog;
