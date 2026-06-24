import Navbar from "@/components/navBar";
import Top from "@/components/top";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#FFF3E8]">
      <Navbar />
      <main className="flex flex-col flex-1 items-center justify-center w-full px-4 sm:px-8">
        <Top />
      </main>
    </div>
  );
}