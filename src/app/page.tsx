import { Feeds } from "@/components/home/feeds";
import Modal from "@/components/home/modal";
import Popular from "@/components/home/popularCard";
import { HomePageLayout } from "@/layouts/homePageLayout";


export default function Home() {

  return (

    <main className="bg-[#FAFAFA] w-full">
      <HomePageLayout>
      
          <Feeds />
        
      </HomePageLayout>
    </main>

  );
}
