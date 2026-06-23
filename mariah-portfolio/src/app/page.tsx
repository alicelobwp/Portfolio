import Navbar from "@/components/navbar";
import Top from "@/components/top";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Navbar />
      <Top />

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-seashell sm:items-start"></main>
    </div>
  );
}
