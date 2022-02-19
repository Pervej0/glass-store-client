import React from "react";

const ShopGallery = () => {
  return (
    <div className="md:px-14 p-3 mb-16">
      <div>
        <div className="text-center my-16">
          <h4 className="text-2xl text-black font-bold mb-2 uppercase">
            Gallery Site
          </h4>
          <p className="text-black font-mono">
            Make your beautiful look more elegent
          </p>
        </div>
        <div className="col-span-4 gallery border p-3">
          <div className="grid md:grid-cols-4">
            <div className="img-box">
              <img
                className="w-full"
                src="https://i.ibb.co/y8DtT79/gallery-7.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="img-box">
                <img
                  className="w-full"
                  src="https://i.ibb.co/NZ3Y1d9/gallery-5.jpg"
                  alt=""
                />
              </div>
              <div className="img-box">
                <img
                  className="w-full"
                  src="https://i.ibb.co/59vjKw8/gallery-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="img-box">
                <img
                  className="w-full"
                  src="https://i.ibb.co/bgxkknQ/gallery-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="img-box">
                <img
                  className="w-full"
                  src="https://i.ibb.co/CW1ZFmW/gallery-2.jpg"
                  alt=""
                />
              </div>
              <div className="img-box">
                <img
                  className="w-full"
                  src="https://i.ibb.co/pWtQRcn/gallery-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGallery;
