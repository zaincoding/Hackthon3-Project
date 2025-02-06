import ProductsList from '@/components/productList/productList';
import { client } from '@/sanity/lib/client';
import Image from 'next/image'
// import Body from '@/components/Category/Header/Body2/Body2'
import Link from 'next/link';

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

export default async function Header3(){
const details = await getProduct();
    return(

        <div>


<div className='bg-[#F6F7F9]'>
      <div className=' md:flex  gap-[100px] ml-[60px] my-[20px]'>
      <Image src='/images/Details/View.png' alt="Detail image" width={640} height={200} />
      <h1 className='text-[32px] font-bold'>Nissan GT-R
    <p className='relative flex'>
      <Image src='/images/icons/stars.PNG' alt="stars" width={130} height={20} />
     <span className='text-[14px] text-[#596780]'> 440+ Reviewer </span>  
     
</p>
     <p className='text-[20px] text-[#596780]'><span className='block'>NISMO has become the embodiment of Nissan&apos;s</span><span className='block'> outstanding performance, inspired by the most</span> unforgiving proving ground, the &quot;race track&quot;.
     
     </p>

     <p className='text-[16px] my-[50px] gap-[80px] flex'>
<span className='text-[#90A3BF] text-[14px]'>TypeCar</span> <span>Sport</span> <span className='text-[#90A3BF]'>Capacity</span> <span className='whitespace-nowrap'>2 Person</span>
</p>

 <p className='text-[16px]  gap-[80px] flex'>
<span className='text-[#90A3BF] text-[14px]'>Steering</span> <span>Manual</span> <span className='text-[#90A3BF]'>Gasoline</span> <span>70L</span>
</p>
      </h1>



      </div>
<div className='md:ml-[100px] md:flex ml-[50px]'>
      <p  className='flex gap-[50px]'>

      <Image src='/images/Details/View 1.png' alt="Detail image" width={160} height={200} />
      <Image src='/images/Details/View 2.png' alt="Detail image" width={160} height={200} />
      <Image src='/images/Details/View 3.png' alt="Detail image" width={160} height={200} />

        </p>

        <p className='md:ml-[130px]'>
                <span className='font-bold text-[20px]'>$80.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href="./Payment">
                <button className='mt-[20px] ml-[200px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button>
                </Link>
                <span className='block text-[#90A3BF]'><s>$100.00</s></span>
            </p>

</div>
<p className='text-[20px] ml-[150px] my-[100px] font-semibold'>Reviews
<button className='mt-[10px] ml-[20px] bg-[#3563E9] w-[60px] h-[35px] rounded-[4px] text-[#ececee]'>1 3</button>

</p>

<div>
<p className='ml-[150px] font-bold text-[20px] flex'>
    <Image src='/images/profile/Profile.png' alt='profile' width={80} height={50} />
    <span className='my-[10px] mx-[20px]'>Alex Stanton</span>
    <span className='ml-auto mr-0 text-[16px] text-[#90A3BF]'>9 December 2024</span>
</p>


    <p className='ml-[250px] mt-[-50px] text-[#90A3BF] flex'>
    CEO at Bukalapak
    <Image className='ml-auto mr-0 ' src='/images/icons/stars.PNG' alt='profile' width={120} height={50} />

</p>

<p className='ml-[250px] text-[#90A3BF]'>
    <span className='block'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable</span> 
    <span> facilities. In addition, the service provided by the officers is also very friendly and very polite.</span>
    </p>
</div>





<div className='my-[100px]'>
<p className='ml-[150px] font-bold text-[20px] flex'>
    <Image src='/images/profile/Profile-1.png' alt='profile' width={80} height={50} />
    <span className='my-[10px] mx-[20px]'>Skylar Dias</span>
    <span className='ml-auto mr-0 text-[16px] text-[#90A3BF]'>9 December 2024</span>
</p>


    <p className='ml-[250px] mt-[-40px] text-[#90A3BF] flex'>
    CEO at Amazon
    <Image className='ml-auto mr-0 ' src='/images/icons/stars.PNG' alt='profile' width={120} height={50} />

</p>

<p className='ml-[250px] text-[#90A3BF]'>
    <span className='block'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable</span> 
    <span> facilities. In addition, the service provided by the officers is also very friendly and very polite.</span>
    </p>
</div>



</div>

<ProductsList cars={details}/>

{/* <Body/> */}

        </div>
    )
}