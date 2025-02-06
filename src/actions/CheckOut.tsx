
import { CartItem } from '@/app/context/CartContext'
import { client } from '@/sanity/lib/client'
 import { Customer } from '@/types/customer'



const CreateCustomerInSanity = async (customerInfo:Customer) =>{
  
try{
    const customerObject = {
        _type: "customer",
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone
        // pickupLocation:customerInfo.pickupLocation,
        // pickupDate:customerInfo.pickupDate,
        // pickupTime:customerInfo.pickupTime,
        // dropOffLocation:customerInfo.dropOffLocation,
        // dropOffDate:customerInfo.dropOffDate,
        // dropOffTime:customerInfo.dropOffTime
    }

    const response = await client.create(customerObject)
    console.log("User created in sainity", response)
    return response;
}
catch(error){
    console.log("Error user created in sanity", error)
    throw error 
}
}

const CreateOrderInSanity = async (cartData:CartItem[], customer_id:string) =>{
  
    try{
        const orderObject = {
            _type: "order",
            customer:{
                _type: "reference",
                _ref: customer_id,
            },

            item: cartData.map((item) => (
                {
                _type: "item",
                _id: item.id,
                name: item.name,
                pricePerDay: item.pricePerDay,
                quantity: item.quantity, 
                image_url: item.image_url,
                type: item.type,
                total: item.total,
            }
            )),
            order_Date: new Date().toISOString()
        }
    
        const response = await client.create(orderObject)
        console.log("Order created in sainity", response)
        return response;
    }
    catch(error){
        console.log("Error order created in sanity", error)
        throw error 
    }
    }

export default async function CheckOut(CartData:CartItem[], customerInfo:Customer ){

    const customer = await CreateCustomerInSanity(customerInfo);
         await CreateOrderInSanity(CartData, customer._id)

         console.log("Checkout completed")

    try{

    }
    catch(error){
        console.log("Error order and customer created in sanity", error)
        throw error 

    }

}