import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="msd:mt-5">
      <div className="border border-black box-border object-cover h-full w-full rounded">
        <div className="absolute p-2 m-3 box-border rounded bg-black text-[#fcf7e6] uppercase">Used</div>
        <div className="image">
          <figure className="card-image">
            <img
              className="object-cover rounded"
              src={product.images[0].src}
              alt="Preview"
            />
          </figure>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="mt-2 font-bold text-sm">
            Product name
          </div>
          <div className="font-bold text-sm">
            {product.variants[0].price} KR.
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="mt-2 text-sm">
            Condition
          </div>
          <div className="text-sm">
            Slightly used
          </div>
        </div>
      </div>
      
      <a href="/">
        <div type="button" className="md:hidden flex justify-center items-center h-10 mt-3 rounded bg-black text-white text-sm font-bold uppercase">
          Pick-up in&nbsp;
          <div className="underline text-white">2200</div>
        </div>
      </a>
    </div>
  )
}