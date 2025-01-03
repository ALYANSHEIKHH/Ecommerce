
import Image from "next/image";
export default function ProductCard() {
  return (
    <>
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      <div className="w-full max-w-[1124px] flex flex-col gap-10 px-4">
        {/* Text Section */}
        <div className="text-center">
          <h4 className="font-Montserrat text-[20px] text-[#737373]">Featured Products</h4>
          <h3 className="font-Montserrat font-bold text-[24px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5.png"
              alt="Product 1"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5 (1).png"
              alt="Product 2"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5 (2).png"
              alt="Product 3"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5 (3).png"
              alt="Product 4"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5 (4).png"
              alt="Product 5"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5 (5).png"
              alt="Product 6"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 7 */}
          <div className="flex flex-col items-center">
            <Image
              src="/product-cover-5 (6).png"
              alt="Product 7"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>

          {/* Product 8 */}
          <div className="flex flex-col items-center">
            <Image
              src="/F4.jpg"
              alt="Product 8"
              width={239}
              height={239}
              className="rounded-md"
            />
            <CardText />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// CardText Component
export function CardText() {
  return (

    
    <div className="mt-4 text-center">
       <div className="w-full max-w-[239px] py-4 px-4 flex flex-col items-center gap-2 bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Title */}
      <h5 className="w-full font-Montserrat font-bold text-[16px] text-center text-[#252B42] leading-snug">
        Graphic Design
      </h5>

      {/* Subtitle */}
      <p className="w-full font-Montserrat text-[14px] text-center text-[#737373] leading-snug">
        English Department
      </p>

      {/* Price Section */}
      <div className="w-full flex justify-center gap-3 items-center">
        <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
          $6.48
        </h5>
      </div>

      {/* Colors Section */}
      <div className="w-full flex justify-center">
        <Image src="/product-colors.png"
         alt="Available colors" width={82} height={16} />
      </div>
    </div>
    </div>
  )};