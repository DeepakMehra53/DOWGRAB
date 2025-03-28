import React from 'react'
import { products } from '../products';
import { ProductCart } from '../components/ProductCart';
import {HeroBackGround} from '../components/HeroBackGround'
import { SecondPageBG } from '../components/SecondPageBG';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <>
        <HeroBackGround/>
        <SecondPageBG/>
      <div className="">
        <h1 className="text-5xl font-bold my-5 flex text-center justify-center">List of Products</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {products.map((product,key)=>
                <ProductCart key={key} data={product}/>
            )}
        </div>
      </div>
      <Testimonials/>
    </>
  );
}
