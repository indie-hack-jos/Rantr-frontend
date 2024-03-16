import { Feeds } from "@/components/home/feeds";
import Nav from "@/components/nav/nav";
import { HomePageLayout } from "@/layouts/homePageLayout";
import Image from "next/image";

export default function Home() {
  return (

    <main className="min-h-screen">
    <HomePageLayout>
        <section className="w-full px-8 py-10 flex gap-10">

            <div className="w-2/3 border-r min-h-screen">
              <Feeds />
            </div>
            <div className="w-/3">
              People
            </div>
        </section>
    </HomePageLayout>
    </main>
    
  );
}
