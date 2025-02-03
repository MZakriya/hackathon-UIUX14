


import { Suspense } from "react"
import { getProducts } from "@/services/getProducts"
import ProductGridClient from "@/components/ProductGridClient"
import FeatureSection from "@/components/feacturesSection";
import ShopHeader from "@/components/shop-header"
 // Assume this function fetches products from your data source

export default async function ProductSection() {
  const products = await getProducts()

  return (
    <>
      <ShopHeader/>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductGridClient initialCards={products} />
      </Suspense>

      <FeatureSection/>
    </>
  )
}