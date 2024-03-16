import { Feeds } from "@/components/home/feeds";
import Modal from "@/components/home/modal";
import Popular from "@/components/home/popularCard";
import Nav from "@/components/nav/nav";
import { HomePageLayout } from "@/layouts/homePageLayout";
import Image from "next/image";

export default function Home() {

  return (

    <main className="bg-[#FAFAFA] w-full">
      <HomePageLayout>

        <section className="container mx-auto gap-6 md:flex ">
        <Modal />

          <div className="md:w-2/3 w-full min-h-screen py-6">
            <Feeds />

          </div>



          <div className="md:w-1/3 pr-6">

            <Popular />

          </div>
        </section>
      </HomePageLayout>
    </main>

  );
}
