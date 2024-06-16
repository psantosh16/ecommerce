"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CartStore, useCartStore } from "@/stores/cartStore";
import Image from "next/image";

export default function Cart() {
  const cart: CartStore[] = useCartStore((state: any) => state.cart);
  const removeProduct = useCartStore((state: any) => state.removeFromCart);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-4">Cart</h1>
      {cart.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-10 mx-12 gap-4">
          {cart.map((item: CartStore) => (
            <Card key={item.title} className="flex p-2 gap-2">
              <Image
                src={"https:" + item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="rounded-xl bg-zinc-100 w-[30vw] md:w-[10vw] md:object-cover"
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">{item.title}</h1>
                <div>
                  <div className="flex flex-row space-x-2 items-center">
                    <h2 className="text-sm">Quantity: {item.item}</h2>
                  </div>
                </div>
                <h2 className="text-sm font-semibold mt-4">
                  Total Amount: ₹{item.price * item.item}
                </h2>
                <Button
                  onClick={() => {
                    removeProduct({ title: item.title });
                  }}
                  size={"sm"}
                  className="mt-2 bg-red-500 hover:bg-red-600"
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex min-h-screen container justify-center items-center flex-col">
          <Image src="/images/empty.png" width={200} height={200} alt={""} />
          <h1 className="font-bold text-xl">Your cart is empty</h1>
        </div>
      )}
    </div>
  );
}
