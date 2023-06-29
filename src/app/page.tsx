import Featured from "@/components/Featured";
import Pizzalist from "@/components/Pizzalist";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Featured />
      <Pizzalist />
    </main>
  );
}
