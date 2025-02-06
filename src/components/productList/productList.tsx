"use client";

import Image from "next/image";
import { CartItem, useCart } from "@/app/context/CartContext";
import Cart from "../../app/context/cart";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface ProductsListProps {
  cars: CartItem[];
}

const generateUid = (product: CartItem) => {
  return `${product.name}-${product.pricePerDay}-${product.fuelCapacity}`;
};

const ProductsList = ({ cars }: ProductsListProps) => {
  const { addToCart } = useCart();
  const pathname = usePathname(); // Get current route
  const isCategoryPage = pathname === "/Category"; // Show "Car Details" only on /Category

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3">
        {cars.map((car) => {
          const uid = generateUid(car);

          return (
            <div key={car.id} className="mt-8">
              <p>{car.id}</p>

              <h1 className="font-bold text-[20px] text-[#1A202C] flex whitespace-nowrap">
                <p>{car.name}</p>
                <Image
                  className="mx-[100px]"
                  src="/images/icons/RedHeart.PNG"
                  alt="Heart"
                  width={25}
                  height={25}
                />
              </h1>
              <span className="text-[#90A3BF]">
                <p>{car.type}</p>
              </span>
              <Link href="/Category">
                <Image
                  className="mt-[60px]"
                  src={car.image_url}
                  alt="Catalog"
                  width={275}
                  height={100}
                />
              </Link>
              <span className="flex gap-2 mt-[50px]">
                <Image src="/images/icons/Liter.PNG" alt="Fuel" width={35} height={35} />
                <label className="leading-[40px] text-[#90A3BF]">
                  {car.fuelCapacity}
                </label>
                <Image src="/images/icons/Manual.PNG" alt="Transmission" width={35} height={35} />
                <label className="leading-[40px] text-[#90A3BF]">
                  <p>{car.transmission}</p>
                </label>
                <Image src="/images/icons/people.PNG" alt="Seats" width={35} height={35} />
                <label className="leading-[40px] text-[#90A3BF] whitespace-nowrap">
                  <p>{car.seatingCapacity}</p>
                </label>
              </span>
              <p>
                <span className="font-bold text-[20px]">{car.pricePerDay}</span>


                {isCategoryPage ? (
                  <Link href='./Details'>
                    <button className="mt-[20px] ml-[50px] bg-[#28a745] w-[116px] h-[44px] rounded-[4px] text-[#fff]">
                      Car Details
                    </button>
                  </Link>
                ) : (
                  <button
                    className="mt-[20px] ml-[50px] bg-[#3563E9] w-[116px] h-[44px] rounded-[4px] text-[#ececee]"
                    onClick={() =>
                      addToCart({
                        id: uid,
                        name: car.name,
                        seatingCapacity: car.seatingCapacity,
                        pricePerDay: car.pricePerDay,
                        quantity: car.quantity,
                        image_url: car.image_url,
                        transmission: car.transmission,
                        fuelCapacity: car.fuelCapacity,
                        type: car.type,
                        tags: car.tags,
                        total: car.total,
                      })
                    }
                  >
                    Rent Now
                  </button>
                )}
              </p>
            </div>
          );
        })}
        <Cart />
      </div>
    </div>
  );
};

export default ProductsList;
