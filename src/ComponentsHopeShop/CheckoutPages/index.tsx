import React from "react";
import Cart from "../CartItem";
import { FaBagShopping } from "react-icons/fa6";
import MyButton from "../../Components/Button";

type Product = { name: string; price: number; quantity?: number };

const products: Product[] = [
  { name: "Bộ Sưu Tập Lót Ly Biểu Tượng Việt Nam", price: 590000, quantity: 2 },
  { name: "Bộ Sưu Tập Lót Ly Biểu Tượng Việt Nam", price: 295000 },
  { name: "Lót Ly Sài Gòn & Hà Nội", price: 295000 },
];

const CheckoutPage: React.FC = () => {
  const subtotal = products.reduce(
    (sum, p) => sum + p.price * (p.quantity || 1),
    0
  );

  return (
    <>
      <div className="bg-[#f5f5f5] flex justify-between items-center p-4 px-[10vw] border-b border-[#e1e1e1]">
        <h2 className="text-2xl font-bold"> The Hope Shope</h2>
        <div className="text-blue-500">
          <FaBagShopping size={25} />
        </div>
      </div>
      <div className="min-h-screen flex justify-center px-[5vw]">
        <div className="w-full flex">
          <div className="w-1/2 p-6 border-r border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <label className="block text-sm">Country/Region</label>
            <select className="w-full border p-2 rounded mb-4">
              <option>Vietnam</option>
            </select>
            {[
              "First name (optional)",
              "Last name",
              "Address",
              "Apartment, suite, etc. (optional)",
              "City",
              "Postal code (optional)",
              "Phone",
            ].map((placeholder, index) => (
              <input
                key={index}
                className="border p-2 w-full rounded mt-2"
                placeholder={placeholder}
              />
            ))}
            <div className=" mx-auto mt-10">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Shipping method</h2>
                <div className="border rounded-lg p-3 bg-blue-50 flex justify-between items-center">
                  <span>Miễn phí giao hàng cho đơn hàng &gt; 500 000VND</span>
                  <span className="font-bold">FREE</span>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Payment</h2>
                <p className="text-gray-500 text-sm mb-2">
                  All transactions are secure and encrypted.
                </p>
                <div className="border rounded-lg p-3 bg-blue-50">
                  <p className="font-medium">Chuyển khoản</p>
                </div>
                <div className="border rounded-lg p-3 bg-gray-100 mt-2">
                  <p className="text-gray-700">
                    Thanh toán khi nhận hàng (COD)
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <MyButton content={"Thanh toán"} isColor="bg-[#79c776]" />
              </div>
            </div>
          </div>

          <div className="w-1/2 p-6 ">
            <div className="space-y-4">
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <div className="pt-4">
                <div className="flex justify-between">
                  <span>Subtotal • {products.length} items</span>
                  <span>₫{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-2">
                  <span>Total</span>
                  <span>₫{subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
