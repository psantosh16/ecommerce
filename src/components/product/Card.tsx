import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({
  title,
  price,
  description,
  image,
  rating,
}: {
  title: string;
  price: number;
  description: string;
  rating: number;
  image: Array<any>;
}) {
  const router = useRouter();
  return (
    <Card className="grid hover:bg-gray-100/80">
      <CardHeader>
        <Image
          src={"https:" + image[0].fields.file.url}
          alt={title}
          width={200}
          height={200}
          className="bg-zinc-100 rounded-xl"
        />
        <CardTitle className="text-left">{title}</CardTitle>
        <p>
          ₹{price}{" "}
          <span className="text-red-500 line-through">{price + 100}</span>
        </p>
        <h1 className="flex flex-row space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Image
              key={i}
              src={
                i < rating
                  ? "/images/Star filled.svg"
                  : "/images/Star Outline.svg"
              }
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </h1>
      </CardHeader>
      <CardContent>
        <CardDescription>{description.slice(0, 20) + "..."}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            router.push(
              `/product/${title.split(" ").join("-")}?title=${title}&price=${price}&rating=${rating}&description=${description}&image1=${image[0].fields.file.url}&image2=${image[1].fields.file.url}`,
            );
          }}
        >
          View more
        </Button>
      </CardFooter>
    </Card>
  );
}
