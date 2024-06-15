export default function Banner() {
  return (
    <div className="w-screen h-auto py-1 bg-black text-white text-center text-sm">
      <h1>
        Free shipping for{" "}
        <span className="text-red-600 font-bold hover:text-red-200">NEW </span>
        users !
      </h1>
    </div>
  );
}
