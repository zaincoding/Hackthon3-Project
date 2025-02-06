import Image from 'next/image'
// import Body from '@/components/Category/Header/Body2/Body2'

export default function Header(){

    return(

        <div>


<div className='bg-[#F6F7F9]'>

<div className='md:ml-[80px] md:flex ml-[50px]'>
      <p>

            <input type="radio" id="pic" name='pick'/>
            <label> Pick-Up</label><br/>

<span className='flex gap-[120px]'><label>Location</label> <label className='hidden md:block'>Date</label>  <label className='hidden md:block'>Time</label></span><br/>
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

        <Image  className='h-[33px] my-[40px] md:ml-[140px]' src='/images/icons/arrow-signs.PNG' alt='asd1' width={33} height={33}/>


        <p className=' md:ml-[150px] mt-[50px md:mt-[0px]'>

            <input type="radio" id="pic" name='drop'/>
            <label> Drop-Off</label><br/>

<span className='flex gap-[110px]'><label>Location</label> <label className='hidden md:block'>Date</label>  <label className='hidden md:block'>Time</label></span><br/>
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


</div>
</div>

{/* <Body/> */}

        </div>
    )
}