'use client';
import {CarSimple} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useCart} from '../context/CartContext';
import Image from 'next/image';
 import CheckOut from '../../actions/CheckOut';




export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [displayFrom, setDisplayForm] = useState(false)
  const [delay,setDelay] = useState(true);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
    // pickupLocation: '',
    // pickupDate: '',
    // pickupTime: '',
    // dropOffLocation: '',
    // dropOffDate: '',
    // dropOffTime: ''

  })

  useEffect(() => {
    const timer = setTimeout(() =>{
      setDelay(false)
    },4000)

    return () => clearTimeout(timer)
  }, [])


  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setCustomerInfo({...customerInfo,[name]:value})
  }

  const handleCheckOut = () =>{

try{
     CheckOut(cart,customerInfo)




     if (!customerInfo.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!customerInfo.email.trim() || !/^\S+@\S+\.\S+$/.test(customerInfo.email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!customerInfo.phone.trim() || !/^\+?[0-9]{10,15}$/.test(customerInfo.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // setIsOrderCreated(true)
    // setDisplayForm(false)


     setTimeout(() =>{
      window.location.href='../payment';
     }, 2000)
}
 catch(error){
  console.log("Checkout failed:", error)
}
  }
  

  return (
    <main className="p-4">

      {/* Cart */}
      <div className="mt-8">




      {delay ? (<></>):( 

        <div>
                <div className='flex space-x-6'>
                <h1 className="text-2xl mb-4 font-serif">Rent a Car</h1>
                <CarSimple size={36}/>
                </div>
                <h2 className="text-xl mb-4">Your Cart</h2>
      

        </div>
      )}


       {cart.length === 0 ? (

        delay? (<></>):(
      <p>Your cart is empty.</p>
        )


        )
         : (

              
          cart.map((item) => (
            
                  <table key={item.id} className="min-w-full border border-gray-300">
  <thead className="bg-gray-100 w-full" >
    <tr>
    <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Car</th>
      <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Price</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
    </tr>
  </thead>
  <tbody></tbody>
            <tr
              key={item.id}
              className="hover:bg-gray-50"
            >

<td className='border border-gray-300 px-4 py-2 truncate max-w-xs'><Image src={item.image_url} 
  alt={item.name}
width={50}
height={50}/>
     
</td>
             

              <td className='border border-gray-300 px-4 py-2 truncate max-w-xs'>{item.name}</td>

                      <td className="border border-gray-300 px-4 py-2 truncate-max-xs">
                        {item.pricePerDay}
                        
                        </td>

        <td className="border border-gray-300 px-4 py-2 truncate-max-xs">{item.quantity}</td>

        <td className="border border-gray-300 px-4 py-2 truncate-max-xs">
        ${(parseFloat(item.pricePerDay?.replace(/[^0-9.]/g, "") || "0") * item.quantity).toFixed(2)}
        </td>

        <td className="border border-gray-300 px-4 py-2 truncate-max-xs">
          <button
            onClick={() => removeFromCart(item.id )}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </td>

            </tr>
            </table>
          
          ))

          
        )}

        {cart.length === 0 ?(
          <></>
        ): (
          <div className='w-[800px]'>
              <button onClick={() => setDisplayForm(true)}
               className='max-w-full bg-green-500 hover:bg-blue-400 text-white text-lg p-2
              rounded-md mt-4'>CheckOut</button>
{displayFrom && (
<div className='border border-t-yellow-950 max-w-full space-y-6'>  
      <h2 className='text-2xl font-semibold border font-sans'>Customer Information</h2>
      <div>
        <label className='font-semibold text-xl'>Name: </label>
        <input
        
        type= "text"
        name= "name"
        value={customerInfo.name}
        onChange={handleInputChange}
        placeholder='Enter your name'
        size={30}

        className='bg-slate-200 text-center p-2 rounded-md mx-2'
        />
      </div>

      <div>
        <label className='font-semibold text-xl'>Email: </label>
        <input
        type= "email"
        name= "email"
        value={customerInfo.email}
        onChange={handleInputChange}
        placeholder='Enter your Email'
        size={30}
        className='bg-slate-200 text-center p-2 rounded-md mx-2'

        />
</div>


      <div>
        <label className='font-semibold text-xl'>Phone: </label>
        <input
        type= "phone"
        name= "phone"
        value={customerInfo.phone}
        onChange={handleInputChange}
        placeholder='Enter your Phone'
        size={30}
        className='bg-slate-200 text-center p-2 rounded-md mx-1'
        

        />

      </div>


      {/* <div>
  <label className='font-semibold text-xl'>Pick-Up: </label>
  
  <input
    type="radio"
    name="pick"
    id="pick"
    size={30}
    className='bg-slate-200 text-center p-2 rounded-md mx-2'
  />
  
  <span className='flex gap-[130px]'>
    <label>Location</label>
    <label className='hidden md:block'>Date</label>
    <label className='hidden md:block'>Time</label>
  </span><br/>
  
  <select
    name="pickupLocation"
    value={customerInfo.pickupLocation}
    onChange={handleInputChange}
    className="bg-slate-200 text-center p-2 rounded-md mx-2"
  >
    <option value="1">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Quetta">Quetta</option>
  </select>
  
  <label className='block md:hidden mt-[20px]'>Date</label>
  <input
    type="date"
    name="pickupDate"
    value={customerInfo.pickupDate}
    onChange={handleInputChange}
    placeholder="Select pick-up date"
    className="bg-slate-200 text-center p-2 rounded-md mx-2"
  />
  
  <label className='block md:hidden mt-[20px]'>Time</label>
  <input
    type="time"
    name="pickupTime"
    value={customerInfo.pickupTime}
    onChange={handleInputChange}
    placeholder="Select pick-up time"
    className="bg-slate-200 text-center p-2 rounded-md mx-2"
  />
</div>

<div>
  <label className='font-semibold text-xl'>Drop-Off: </label>

  <input
    type="radio"
    name="drop"
    id="drop"
    value={customerInfo.email}
    onChange={handleInputChange}
    size={30}
    className='bg-slate-200 text-center p-2 rounded-md mx-2'
  />
  
  <span className='flex gap-[130px]'>
    <label>Location</label>
    <label className='hidden md:block'>Date</label>
    <label className='hidden md:block'>Time</label>
  </span><br/>
  
  <select
    name="dropOffLocation"
    value={customerInfo.dropOffLocation}
    onChange={handleInputChange}
    className="bg-slate-200 text-center p-2 rounded-md mx-2"
  >
    <option value="1">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Quetta">Quetta</option>
  </select>

  <label className='block md:hidden mt-[20px]'>Date</label>
  <input
    type="date"
    name="dropOffDate"
    value={customerInfo.dropOffDate}
    onChange={handleInputChange}
    placeholder="Select drop-off date"
    className="bg-slate-200 text-center p-2 rounded-md mx-2"
  />
  
  <label className='block md:hidden mt-[20px]'>Time</label>
  <input
    type="time"
    name="dropOffTime"
    value={customerInfo.dropOffTime}
    onChange={handleInputChange}
    placeholder="Select drop-off time"
    className="bg-slate-200 text-center p-2 rounded-md mx-2"
  />
</div> */}

  
      <button onClick={handleCheckOut} className='bg-blue-400 p-2 rounded-md text-white font-semibold text-xl font-sans'>
      Submit
        </button>


</div>

)}
              </div>
)}
{/* 
array::unique(*[_type!='system']._type) */}


      </div>
    </main>
  );
}
