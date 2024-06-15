import HomeBanner from "@/components/home/Banner";
import Products from "@/components/home/Product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   px-24">
      <HomeBanner />
      <h1 className="text-3xl font-bold text-center my-4">Products</h1>
      <Products type="headphones" />
    </main>
  );
}
