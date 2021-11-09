import React from "react";

const Categories = () => {
  return (
    <section className="md:px-14 p-3 my-14">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 grid-cols-1">
        <div className="categories-item">
          <div className="relative text-center categories-box mb-4">
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/nLLtdMZ/photo-1456379771252-03388b5adf1a-ixlib-rb-1-2.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 categories-content">
              <h4 className="bg-black text-white inline-block py-1 px-9">
                Women
              </h4>
            </div>
          </div>
          <div className="relative text-center categories-box">
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/tXrVZsr/photo-1619856266537-0111fc5a4c67-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 categories-content">
              <h4 className="bg-black text-white inline-block py-1 px-9">
                Men
              </h4>
            </div>
          </div>
        </div>
        <div className="categories-item col-span-2">
          <div className="relative text-center categories-box">
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/Hpt36gV/photo-1517864867049-6a0ca8363479-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 categories-content">
              <h4 className="bg-black text-white inline-block py-1 px-9">
                Men
              </h4>
            </div>
          </div>
        </div>
        <div className="categories-item">
          <div className="relative text-center categories-box mb-4">
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/YBWmQ59/photo-1524686599807-08a16b19fefd-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 categories-content">
              <h4 className="bg-black text-white inline-block py-1 px-9">
                Women
              </h4>
            </div>
          </div>
          <div className="relative text-center categories-box">
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/gVXbRHh/photo-1610386715606-95eaf87365f3-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 categories-content">
              <h4 className="bg-black text-white inline-block py-1 px-9">
                Men
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
