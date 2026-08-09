import Stars from "@/components/Stars";
import TarotCard from "@/components/TarotCard";

export default function Home() {
  return (
    <main className="
      min-h-screen
      bg-[#080510]
      text-white
      flex
      items-center
      justify-center
      overflow-hidden
      h-dvh w-full
    ">
      <TarotCard />
      <Stars />
    </main>
  );
}