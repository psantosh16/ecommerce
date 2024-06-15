"use client";
import { useEffect, useState } from "react";
import client from "@/lib/contentful";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../product/Card";

export default function Products({ type }: { type: string }) {
  const [data, setData] = useState([] as any[]);
  const [tags, setTags] = useState([] as string[]);
  const arr: Array<string> = ["All"];
  const [category, setCategory] = useState("all");
  useEffect(() => {
    function ExtractCategories(data: any = []) {
      data.items.forEach((item: any) => {
        if (!arr.includes(item.fields.type)) {
          arr.push(item.fields.type.toString());
        }
      });
    }
    async function fetchData() {
      const entries = await client
        .getEntries({
          content_type: type,
        })
        .then((response) => response)
        .then((data) => {
          setData(data.items);
          ExtractCategories(data);
          setTags(arr);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <Select
        onValueChange={(value) => {
          if (value === "all") {
            setCategory("");
            return;
          }
          setCategory(value);
        }}
      >
        <SelectTrigger className="w-[180px] my-4">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          {tags.map((item) => (
            <SelectItem key={item.toLowerCase()} value={item.toLowerCase()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {category != "all" ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-2 ">
          {data
            .filter((item) => item.fields.type.toLowerCase().includes(category))
            .map((item) => (
              <ProductCard
                key={item.sys.id}
                title={item.fields.title}
                price={item.fields.price}
                description={item.fields.description}
                image={item.fields.images}
              />
            ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-2 ">
          {data.map((item) => (
            <ProductCard
              key={item.sys.id}
              title={item.fields.title}
              price={item.fields.price}
              description={item.fields.description}
              image={item.fields.images}
            />
          ))}
        </div>
      )}
    </>
  );
}
