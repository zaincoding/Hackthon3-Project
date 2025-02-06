import Image from 'next/image'
import Link from 'next/link'


export default function Rental(){

    return(

        <div>
        
        
 <div className='flex'>
           
            <div className="my-[100px] ml-[80px] ">
            <p className="text-[22px] font-bold">Rental Summary</p>
            <p className="text-[#90A3BF] flex">Prices may change depending on the length of the rental and the price of your rental car.
            </p>

     <div className='w-[250px] h-[150px] bg-[#3563E9] mt-[50px] relative '>
     <Image className='ml-[20px] absolute mt-[50px] ' src='/images/payment/car.png' alt='visa' width={200} height={100} />
     <p className='ml-[300px] whitespace-nowrap text-[22px] font-bold'> Nissan GT-R</p>

     <p className='flex'>
     <Image className='ml-[300px]  ' src='/images/icons/stars.PNG' alt='visa' width={100} height={100} />
     <span> 440+Reviewer</span></p>
     </div>

     <div className='flex'>
     <p className='mt-[50px] text-[22px] text-[#90A3BF]'>Subtotal</p>
     <p className='ml-auto mr-0 text-[20px] font-bold mt-[50px]'>$80.00</p>
     </div>


     <div className='flex'>
     <p className='mt-[50px] text-[22px] text-[#90A3BF]'>Tax</p>
     <p className='ml-auto mr-0 text-[20px] font-bold mt-[50px]'>$0.00</p>
     </div>


     <div className='flex bg-[#eef0f3] relative rounded-[10px]'>
      
     <p className='mt-[50px] text-[22px] text-[#90A3BF] absolute leading-[0px]'>Apply promo code</p>
     
     <p className='ml-auto mr-0 text-[20px] font-bold mt-[30px]'><Link href='#'>Apply now</Link></p>
     </div>

    </div>

     </div>

     <div className="my-[100px] ml-[80px]">
            <p className="text-[22px] font-bold">Total Rental Price</p>
            <p className="text-[#90A3BF] flex">Overall price and includes rental discount.
            
            <p className='ml-auto mr-0 text-[22px] text-[#000] font-bold '>$80.00</p></p>

          </div> 


        </div>
    )
}