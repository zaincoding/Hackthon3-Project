import Image from 'next/image'
// import Body from '@/components/Header/Body/Body'
import Link from 'next/link'

export default function Header(){

    return(

        <div>

<div className='h-[124px] w-full leading-[100px] border-[1px] relative'>


<p className='md:ml-[1080px]  gap-5 mt-[40px] absolute hidden md:flex'>
        <Image src='/images/icons/heart.PNG' alt='#' width={25} height={25} />
        <Image src='/images/icons/bell.PNG' alt='#' width={30} height={30} />
        <Link href="./Dashboard">
        <Image src='/images/icons/setting.PNG' alt='#' width={25} height={25} />
        </Link>
        <Link href="./Details">
        <Image src='/images/icons/profile.PNG' alt='#' width={35} height={35} />
        </Link>
    </p>


    <p className='hidden md:block'> <span className='md:mx-[60px] text-[44px] text-[#3563E9] font-bold'>MORENT</span>
    <input className='h-[50px] md:w-[400px] rounded-full border-[1px] ' type="text" name="search"  placeholder=' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; search something there'/> 
    <Image className='md:mx-[320px] ml-[200px] my-[-60px]' src='/images/icons/search.PNG' alt='search' height={20} width={20}/>
    </p>


    <p className='relative  md:hidden'> <span className=' text-[44px] text-[#3563E9] font-bold'>MORENT</span>
    <input className='h-[50px]  ml-[-180px] absolute mt-[70px] rounded-full border-[1px] ' type="text" name="search"  placeholder=' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; search something there'/> 
    <Image className='mx-[10px] my-[-25px] absolute' src='/images/icons/search.PNG' alt='search' height={20} width={20}/>
    </p>

    
</div>


<div className='bg-[#F6F7F9]'>
      <div className=' md:flex  gap-[90px] ml-[60px] my-[20px] hidden'>
        <Image src='/images/banners/Ads 1.png' alt='asd1' width={600} height={200}/>
        <Image src='/images/banners/Ads 2.png' alt='asd1' width={600} height={200}/>



      </div>
{/* <div className='md:ml-[100px] md:flex ml-[50px]'>
      <p>
      <Image className='md:hidden mt-[10px]' src='/images/banners/Ads 1.png' alt='asd1' width={400} height={100}/>

            <input type="radio" id="pic" name='pick'/>
            <label> Pick-Up</label><br/>

<span className='flex gap-[130px]'><label>Location</label> <label className='hidden md:block'>Date</label>  <label className='hidden md:block'>Time</label></span><br/>
            <select>
            <option value='1'>Select your city</option>
            <option value='1'>Karachi</option>
            <option value='2'>Lahore</option>
            <option value='3'>Islamabad</option>
            <option value='4'>Peshawar</option>
            <option value='5'>Quetta</option>

            </select>
            <label className='block md:hidden mt-[20px]'>Date </label>
         <input type='date' placeholder='select your date'/>  
            
         <label className='block md:hidden  mt-[20px]'>Time</label>
         <input type='time' placeholder='select time'/>

        </p>

        <p className=' md:ml-[350px] mt-[50px]'>

        <Image className='md:hidden' src='/images/banners/Ads 2.png' alt='asd1' width={400} height={200}/>

            <input type="radio" id="pic" name='drop'/>
            <label> Drop-Off</label><br/>


<span className='flex gap-[130px]'><label>Location</label> <label className='hidden md:block'>Date</label>  <label className='hidden md:block'>Time</label></span><br/>
 
            <select>
            <option value='1'>Select your city</option>
            <option value='1'>Karachi</option>
            <option value='2'>Lahore</option>
            <option value='3'>Islamabad</option>
            <option value='4'>Peshawar</option>
            <option value='5'>Quetta</option>

            </select>
           <label className='block md:hidden mt-[20px]'>Date</label>
         <input type='date' placeholder='select your date'/>  
           <label className='block md:hidden mt-[20px]'>Time</label>
         <input type='time' placeholder='select time'/>

        </p>


</div> */}
</div>

{/* <Body/> */}

        </div>
    )
}