"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/stores/cartStore";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const title = useSearchParams().get("title");
  const price = useSearchParams().get("price") as string;
  const description = useSearchParams().get("description");
  const rating = parseInt(useSearchParams().get("rating") as string) || 2;
  const image1 = useSearchParams().get("image1") as string;
  const image2 = useSearchParams().get("image2") as string;
  const cart = useCartStore((state: any) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = useCartStore((state: any) => state.addToCart);
  const { toast } = useToast();

  return (
    <div className="mx-6 my-10 select-none">
      <header className="grid grid-cols-2 gap-2 my-4 pointer-events-none">
        <Image
          src={"https:" + image1}
          alt="product"
          width={1000}
          height={1000}
          className="rounded-xl bg-slate-100 md:w-[50vw] "
        />
        <Image
          src={"https:" + image2}
          alt="product"
          width={200}
          height={200}
          className="rounded-xl bg-slate-100 md:w-[50vw]"
        />
      </header>
      <div>
        <h1 className="text-3xl md:text-6xl font-bold mt-2 hover:text-gray-700">
          {title}
        </h1>
        <p className="text-lg md:text-3xl md:mb-2 mt-4 text-gray-500">
          ₹{price}
        </p>
        <h1 className="flex flex-row space-x-1 pointer-events-none">
          {Array.from({ length: 5 }, (_, i) => (
            <Image
              key={i}
              src={
                i < rating
                  ? "/images/Star-filled.svg"
                  : "/images/Star-Outline.svg"
              }
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </h1>
        <div className="my-4">
          <p className="text-lg my-4 text-gray-500">{description}</p>
          <h1 className="text-lg my-1">Quantity</h1>
          <Button variant={"outline"} size={"icon"} onClick={decrement}>
            -
          </Button>
          <span className="mx-4 md:text-lg">{quantity}</span>
          <Button variant={"outline"} size={"icon"} onClick={increment}>
            +
          </Button>
        </div>
        <Button
          onClick={() => {
            addToCart({
              title,
              item: quantity,
              price: parseInt(price) as number,
              description,
              rating,
              image: image1,
            });
            toast({
              title: "Added to cart",
              description: "Product added to cart successfully",
              duration: 2000,
              action: (
                <Button
                  onClick={() => {
                    router.push("/cart");
                  }}
                >
                  View Cart
                </Button>
              ),
            });
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
