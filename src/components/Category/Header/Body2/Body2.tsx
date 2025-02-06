import Link from 'next/link';

import Image from 'next/image'
import Footer from '@/components/Footer/Footer';

export default function Body(){


    return(

        <div className='bg-[#F6F7F9]'>
            <div className="ml-[80px] mt-[50px] flex relative">
            <h1 className='text-[16px] font-semibold text-[#90A3BF]'>Popular Car</h1>
            <Link className='md:ml-[1095px] ml-[280px] absolute font-semibold text-[#3563E9]' href="#">View All</Link>
            
        </div>
        <div  className='md:flex md:gap-[65px] md:ml-[60px] ml-[50px]'>
            <Image src="/images/CarCat1/Catalog 1.png" alt="Catalog" width={304} height={100}/>
          
          <p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>Nissan GT-R
            <Image className='mx-[100px]' src='/images/icons/GrayHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>Sport</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/car.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>80L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>4 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$80.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
                <span className='block text-[#90A3BF]'><s>$100.00</s></span>
            </p>
          </p>



          <p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>Rolls Royce
            <Image className='mx-[100px]' src='/images/icons/RedHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>Sport</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/Car1.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>80L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>4 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$96.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
            </p>
          </p>





{/* 
  //Cars first section end      */}
  </div>


  <div className="ml-[60px] mt-[60px] ">
            <h1 className='text-[16px] font-semibold text-[#90A3BF]'>Recomendation Car</h1>            
        </div>

<div  className='md:flex md:gap-[65px] md:ml-[60px] ml-[50px] mt-[30px] '>


<p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>All New Rush
            <Image className='mx-[100px]' src='/images/icons/GrayHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>SUV</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/CarCat2/Car1.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>70L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>6 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$72.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
                <span><s>80.00</s></span>
            </p>
          </p>






   
          

          <p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>CR-V
            <Image className='mx-[100px]' src='/images/icons/RedHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>SUV</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/CarCat2/Car2.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>80L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>6 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$80.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
            </p>
          </p>



          <p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>All New Terios
            <Image className='mx-[100px]' src='/images/icons/GrayHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>SUV</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/CarCat2/Car3.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>74L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>6 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$80.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
            </p>
          </p>







          {/* //Car section two end */}
        </div>






        <div  className='md:flex md:gap-[65px] md:ml-[60px] ml-[50px] mt-[100px]'>




        <p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>MGZX Exclusice
            <Image className='mx-[100px]' src='/images/icons/RedHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>Hatchback</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/CarCat3/Car1.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>70L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>4 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$76.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
                <span><s>$100.00</s></span>
            </p>
          </p>











          <Image src="/images/CarCat1/CarCat3/Car2.png" alt="Catalog" width={304} height={100}/>




          <p className='w-[304px] h-[388px]'>
            <h1 className='font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap'>MGZX Excite
            <Image className='mx-[100px]' src='/images/icons/RedHeart.PNG' alt="Heart" width={25} height={25} />

            </h1>
            <span className='text-[#90A3BF]'>Hatchback</span>
            <Link href="./Details">
            <Image className='mt-[60px]' src="/images/CarCat1/CarCat3/Car1.png" alt="Catalog" width={304} height={100}/></Link>
            <span className='flex  gap-2 mt-[50px]'>
            <Image  src="/images/icons/Liter.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>90L</label>
            <Image  src="/images/icons/Manual.PNG" alt="Catalog" width={35} height={35}/>
            <label className='leading-[40px] text-[#90A3BF]'>Manual</label>
            <Image  src="/images/icons/people.PNG" alt="Catalog" width={35} height={35}/>
            <label  className='leading-[40px] text-[#90A3BF]'>4 People</label>


            </span>
            <p>
                <span className='font-bold text-[20px]'>$74.00/<label className='text-[#90A3BF]'>day</label></span>
                <Link href='./Payment'>
                <button className='mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]'> Rent Now</button></Link>
            </p>
          </p>





         
        </div>

         <div  className='mt-[100px] flex justify-center'>               
            
             <button className='mt-[20px] md:ml-[50px]  bg-[#3563E9] w-[160px] h-[44px] rounded-[4px] text-[#ececee]'>Show more car</button>
         </div>


<Footer/>

        </div>

    )
}