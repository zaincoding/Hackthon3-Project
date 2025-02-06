
import Header2 from "./Header2"
import Header from "../Category/Header/Header"
import { client } from "@/sanity/lib/client";
import ProductsList from "../productList/productList";



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

export default async function Sidebar(){
const cars = await getProduct()
    return(


<div>
<Header2/>  

        <div className='flex'>

       <div className="w-[200px]  h-[1000px]  leading-[50px] ml-[10px]">
<p>Type</p>
<input type="radio" id="radio"/>
<span> Spot(10)</span><br/>
<input type="radio" id="radio"/>
<span> SUV(12)</span><br/>
<input type="radio" id="radio"/>
<span> MPV(16)</span><br/>
<input type="radio" id="radio"/>
<span> Sedan(20)</span><br/>
<input type="radio" id="radio"/>
<span> Coupe(14)</span><br/>

<span className='whitespace-nowrap'><input type="radio" id="radio"/>
 Hatchback(14)</span><br/>

<p className="mt-[50px]">Capacity</p>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 2 person(10)</span><br/>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 4 person(14)</span><br/>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 6 person(12)</span><br/>
<input type="radio" id="radio"/>
<span className='whitespace-nowrap'> 8 more(16)</span><br/>

</div>

<div>
<Header/>
<ProductsList cars={cars} />
</div>
</div>
        </div>
    )
}