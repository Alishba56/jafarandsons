import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/lib/getProducts'
import { TVSType } from '@/data/data'

const Hero = async () => {
  const TVS = await getProducts();

  const filteredProducts = TVS?.message?.find(
    (product: TVSType) => product.tags?.includes('main')
  );

  // If no main product found → don't crash
  if (!filteredProducts) {
    return (
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Main Product Not Found</h2>
        <p className="text-gray-400 mt-2">Please add a product with tag "main".</p>
      </section>
    );
  }

  return (
    <section>
      <div className="bg-[#211C24] flex justify-evenly py-10 flex-wrap">
        <div className="mx-4 sm:mx-0 w-[500px] text-white flex flex-col justify-center items-start gap-7">
          <h1 className="text-4xl font-semibold">{filteredProducts.title}</h1>
          <h3 className="text-gray-400 text-2xl">{filteredProducts.pickup?.[1]}</h3>

          <Link href={filteredProducts.link || '#'}>
            <button className="hover:text-black hover:bg-white duration-300 cursor-pointer border-[1px] border-white py-4 px-14 rounded-md text-xl">
              Buy Now
            </button>
          </Link>
        </div>

        <div>
          {filteredProducts.images?.[0] && (
            <Image
              src={filteredProducts.images[0]}
              width={610}
              height={560}
              alt={filteredProducts.title}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
