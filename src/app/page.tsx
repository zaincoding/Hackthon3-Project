import { client } from "@/sanity/lib/client";
import Header from "@/components/header/header";
import ProductsList from "@/components/productList/productList";
import Footer from "@/components/Footer/Footer";

const getProduct = async () => {
  const cars = await client.fetch(`
    *[_type == "car"] {
      _id,
      name,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      tags,
      "image_url": image.asset->url,
    }
  `);

  return cars;
  
};

export default async function Home() {
 
  const cars = await getProduct()

  return (
    <div>
      <Header/>

<ProductsList cars={cars} />

      <Footer/>
    </div>
  );
}
