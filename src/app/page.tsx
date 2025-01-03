// "use client";

import ProductSection from '@/components/ProductSection'
import Slider from '@/components/Slider'
import React from 'react'
import ProductCard from '../components/Product'

const page = () => {
  return (
    <main>
        <Slider/>
    <ProductCard/>
        <ProductSection/>
    </main>
  )
}

export default page
