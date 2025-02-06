import Link from 'next/link'
import Image from 'next/image'



export default function Payment(){

    return(


        <div>

            <div className="my-[100px] ml-[80px]">
            <p className="text-[22px] font-bold">Billing Info</p>
            <p className="text-[#90A3BF] flex">Please enter your billing info
            <span className="ml-auto mr-0 whitespace-nowrape">Step 1 of 4</span>
            </p>
            
            <div className="mt-[50px] ">
            <p className="text-[22px] font-bold">Name</p>
            <div className="md:flex items-center md:gap-[50px] md:mt-[10px] leading-[50px]">
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px]" type='text' id='name' placeholder="Your name"/>
            

          <div>
            <p className="text-[22px] font-bold mt-[50px]">Phone Number</p>
            <input className=" md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='text' id='name' placeholder="Phone number"/>
            </div>
            </div>
            </div>


            <div className="mt-[50px] ">
            <p className="text-[22px] font-bold">Address</p>
            <div className="md:flex items-center gap-[50px] md:mt-[10px] leading-[50px]">
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px]" type='text' id='name' placeholder="Address"/>

          <div>
            <p className="text-[22px] font-bold mt-[50px]">Town/ City</p>
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='text' id='name' placeholder="
            Town or city"/>
            </div>
            </div>
            </div>


            </div>



            <div className="my-[100px] ml-[80px]">
            <p className="text-[22px] font-bold">Rental Info</p>
            <p className="text-[#90A3BF] flex">Please select your rental date
            <span className="ml-auto mr-0 whitespace-nowrap">Step 2 of 4</span>
            </p>
            
            <div className="mt-[50px] ">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input type='radio' id='name' placeholder="Your name"/>
            <p className="text-[22px] font-bold">Pick-Up</p>
            </div>
            </div>

</div>


            <div className="mt-[10px] ml-[100px] ">
            <p className="text-[22px] font-bold">Location</p>
            <div className=" md:flex items-center gap-[50px] mt-[10px]">
           
             
             <select>
            <option value='1'>Select your city</option>
            <option value='1'>Karachi</option>
            <option value='2'>Lahore</option>
            <option value='3'>Islamabad</option>
            <option value='4'>Peshawar</option>
            <option value='4'>Quetta</option>


            </select>
            
        

          <div>
            <p className="text-[22px] font-bold">Date</p>
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='Date' id='name' placeholder="
            Select your date"/>
            </div>
            </div>
            <div>
            <p className="text-[22px] font-bold">Time</p>
            <input className="md:w-[266px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='Time' id='name' placeholder="
            Select your time"/>
            </div>
            </div>



            

            <div className="mt-[50px] ml-[60px] ">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input type='radio' id='name' placeholder="Your name"/>
            <p className="text-[22px] font-bold">Drop-Off</p>
            </div>
            </div>




            <div className="mt-[10px] ml-[100px] ">
            <p className="text-[22px] font-bold">Location</p>
            <div className="md:flex items-center gap-[50px] mt-[10px]">
           
             
             <select>
            <option value='1'>Select your city</option>
            <option value='1'>Karachi</option>
            <option value='2'>Lahore</option>
            <option value='3'>Islamabad</option>
            <option value='4'>Peshawar</option>
            <option value='4'>Quetta</option>


            </select>
            
        

          <div>
            <p className="text-[22px] font-bold">Date</p>
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='Date' id='name' placeholder="
            Select your date"/>
            </div>
            </div>
            <div>
            <p className="text-[22px] font-bold">Time</p>
            <input className="md:w-[266px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='Time' id='name' placeholder="
            Select your time"/>
            </div>
            </div>
            




            <div className="my-[100px] ml-[80px] ">
            <p className="text-[22px] font-bold">Payment Method</p>
            <p className="text-[#90A3BF] flex">Please enter your payment method
            <span className="ml-auto mr-0 whitespace-nowrap">Step 3 of 4</span>
            </p>
            
            <div className="mt-[50px] ml-[10px] ">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input type='radio' id='name' placeholder="Your name"/>
            <p className="text-[22px] font-bold">Credit Card</p>
            <Image className='ml-auto mr-0' src='/images/payment/visa.PNG' alt='visa' width={100} height={100} />
            </div>
            </div>


            <div className="mt-[50px] ">
            <p className="text-[22px] font-bold">Card Number</p>
            <div className="md:flex items-center gap-[50px] mt-[10px]">
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px]" type='text' id='name' placeholder="Card Number"/>

          <div>
            <p className="text-[22px] font-bold">Expiration Date</p>
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='text' id='name' placeholder="DD/MM/YY"/>
            </div>
            </div>
            </div>


            <div className="mt-[50px] ">
            <p className="text-[22px] font-bold">Card Holder</p>
            <div className="md:flex items-center gap-[50px] mt-[10px]">
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px]" type='text' id='name' placeholder="Card Holder"/>

          <div>
            <p className="text-[22px] font-bold">CVC</p>
            <input className="md:w-[366px] h-[56px] bg-[#e6e3e3] rounded-[10px] ml-auto mr-0" type='text' id='name' placeholder="
            CVC"/>
            </div>
            </div>
            </div>



            <div className="mt-[50px] ml-[10px] bg-[#f0ecec] h-[60px] rounded-[10px] leading-[60px]">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input className='w-[20px] h-[20px]' type='radio' id='paypal' name='paymentMethod'/>
            <p className="text-[22px] font-bold">Paypal</p>
            <Image className='ml-auto mr-0' src='/images/payment/paypal.PNG' alt='visa' width={100} height={100} />
            </div>
            </div>


            <div className="mt-[50px] ml-[10px] bg-[#f0ecec] h-[60px] rounded-[10px] leading-[60px]">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input className='w-[20px] h-[20px]' type='radio' id='bitcoi ' name='paymentMethod'/>
            <p className="text-[22px] font-bold">Bitcoin</p>
            <Image className='ml-auto mr-0' src='/images/payment/bitcoin.PNG' alt='visa' width={100} height={100} />
            </div>
            </div>

            </div>



            <div className="my-[100px] ml-[80px] ">
            <p className="text-[22px] font-bold">Confirmation</p>
            <p className="text-[#90A3BF] flex">We are getting to the end. Just few clicks and your rental is ready!
            <span className="ml-auto mr-0 whitespace-nowrap">Step 4 of 4</span>
            </p>


            <div className="mt-[50px] ml-[10px]">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input className='w-[20px] h-[20px]' type='radio' id='name' placeholder="Your name"/>
            <p className="text-[22px] font-bold">I agree with sending a Marketing and newsletter emails. No spam, promissed!</p>
            </div>
            </div>


            <div className="mt-[50px] ml-[10px]">
            <div className="flex items-center gap-[10px] mt-[10px]">
            <input className='w-[20px] h-[20px]' type='radio' id='name' placeholder="Your name"/>
            <p className="text-[22px] font-bold">I agree with the terms and conditions and privacy policy.</p>
            </div>
            </div>

           <button className='bg-[#3563E9] w-[100px] h-[50px] rounded-[10px] text-white mt-[50px]'><Link href='./'>
           Rent Now</Link></button>
            </div>



            <Image className='ml-[50px]' src='/images/payment/security.PNG' alt='visa' width={100} height={100} />
            <div className="my-[100px] ml-[80px] ">
            <p className="text-[22px] font-bold">All your data are safe</p>
            <p className="text-[#90A3BF] flex">We are using the most advanced security to provide you the best experience ever.
            </p>
            </div>
        </div>
    )
}