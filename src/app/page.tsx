import Image from "next/image";
import Search from "@/components/Search";
import RentPage from "./rent/page";
export default function Home() {
  return (
    <main>
        <Search/>
        <RentPage/>
    </main>
  );
}
