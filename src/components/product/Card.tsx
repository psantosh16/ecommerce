import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "../ui/button";
import Image from "next/image";

export default function ProductCard({
  title,
  price,
  description,
  image,
}: {
  title: string;
  price: number;
  description: string;
  image: Array<any>;
}) {
  return (
    <Card className="grid hover:bg-gray-100/80">
      <Dialog>
        <CardHeader>
          <DialogTrigger asChild>
            <Image
              src={"https:" + image[0].fields.file.url}
              alt={title}
              width={200}
              height={200}
            />
          </DialogTrigger>
          <DialogContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-2">
                {image.map((img) => (
                  <Image
                    key={img.sys.id}
                    src={"https:" + img.fields.file.url}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="rounded-xl"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4 bg-orange-50 p-4 rounded-xl">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p>{description}</p>
                <p>₹{price}</p>
                <input type="number" placeholder="1" autoFocus required />
                <Button>Add to Cart</Button>
              </div>
            </div>
          </DialogContent>

          <CardTitle className="text-left">{title}</CardTitle>
          <p>
            ₹{price}{" "}
            <span className="text-red-500 line-through">{price + 100}</span>
          </p>
        </CardHeader>
        <CardContent>
          <CardDescription>{description.slice(0, 60) + "..."}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button>Add to Cart</Button>
        </CardFooter>
      </Dialog>
    </Card>
  );
}
