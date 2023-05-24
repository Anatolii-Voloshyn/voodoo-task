import React, { useState } from "react";
import { useMediaQuery } from "react-responsive"
import { ProductCard } from "./ProductCard";
import { EmailSignup } from "./EmailSigup";

export const ProductList = ({ products }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="
        flex
        justify-between
        items-center
        h-[72px]
        mt-6
        md:mt-[100px]
        mx-6
        md:mx-[120px]
        bg-black
        rounded
        text-[#fcf7e6]"
      >
        <div className="flex items-center">
          <img 
            className="w-5 ml-7"
            src={require('../../logo2.png')}
            alt="logo2"
          />
          <div className="uppercase ml-2">
            Alpha
          </div>

          {!isSmallScreen && (
            <div className="text-sm ml-12">
              Important info regarding our service
            </div>
          )}

          {isSmallScreen && (
            <div className="text-sm ml-6">
              Important info
            </div>
          )}
         
        </div>
        <button className="" onClick={toggleExpansion}>
          {isExpanded
            ? <img className="w-3 m-8" src={require('../../Vector.png')} alt="logo2"/>
            : <img className="w-3 m-8" src={require('../../Vector2.png')} alt="logo2"/>
          }
        </button>
      </div>

      {isExpanded && (
        <div className="pt-12 mx-6">
          <div className="
            grid
            sm:grid-cols-1
            md:grid-cols-4
            gap-12
            md:gap-6
            md:mx-24"
          >
            {products.map((product) => 
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            )}
          </div>
        </div>
      )} 
    

      <div className="flex flex-col">
        <div className="
          flex
          justify-center
          mt-24
          md:mt-12"
        >
          <p className="text-sm md:text-xl">
            Be the first one to know when we launch our beta!
          </p>
        </div>
        <div className="
          flex
          justify-center
          mt-6
          mb-32
          mx-6"
        >
          <EmailSignup />
        </div>
      </div>
    </>
  )
}