import Footer from "@/components/Footer/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  type: string;
  pricePerDay: string;
  quantity: number;
  total?: number;
  image_url: string;
};

const getOrders = async (): Promise<Product[]> => {
  const orders = await client.fetch(`
    *[_type == "order"][0..4] {
      _id,
      order_Date,
      customer,
      "items": item[] {
        _id,
        name,
        type,
        pricePerDay,
        quantity,
        "image_url": image_url
      }
    }
  `);

  // Flatten items from all orders
  return orders?.flatMap((order: any) => order.items) || [];
};

export default async function DashBoard() {
  const Orders = await getOrders();

  return (
    <div>
<div className="text-3xl flex justify-center font-serif text-zinc-600">Dash Board</div>
      {Orders.length > 0 ? (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100 w-full">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Car</th>
              <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">
                  <Image src={item.image_url} alt={item.name} width={50} height={50} />
                </td>
                <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2 truncate-max-xs">{item.pricePerDay}</td>
                <td className="border border-gray-300 px-4 py-2 truncate-max-xs">{item.quantity}</td>
                <td className="border border-gray-300 px-4 py-2 truncate-max-xs">
                  {/* If total is missing, calculate it from pricePerDay (assuming it's a number) */}
                  {item.total ?? `$${(parseFloat(item.pricePerDay.replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 mt-4">No orders found</p>
      )}

      <Footer />
    </div>
  );
}
