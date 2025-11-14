import ProductDetails from "@/components/ProductDetails"
import { TVSType } from "@/data/data"
import { getProducts } from "@/lib/getProducts"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const  data  = await getProducts()
    const message = data.message as TVSType[]
    const filteredProduct = message.filter((item) => item.slug === slug)[0]
    return <div>
      <ProductDetails product={filteredProduct}/>
    </div>
  }