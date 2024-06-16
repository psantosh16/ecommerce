import Products from "@/components/home/Product";

export default function Electronics() {
  return (
    <main className="flex min-h-screen flex-col px-4 md:px-24">
      <Products type="headphones" />
    </main>
  );
}
