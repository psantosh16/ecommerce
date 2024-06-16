import HomeBanner from "@/components/home/Banner";
import Products from "@/components/home/Product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:items-start  px-4  md:px-24 ">
      <HomeBanner />
      <h1 className="text-3xl font-bold text-left mt-12">
        Headphones For You!
      </h1>
      <Products type="headphones" />
      <h1 className="text-3xl font-bold text-left mt-12">Cloths</h1>
      <Products type="mens" />
    </main>
  );
}
