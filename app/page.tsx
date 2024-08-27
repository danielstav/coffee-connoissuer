import Banner from "@/components/banner.client";
import Image from "next/image";
import Card from "@/components/card.server";

export default function Home() {
 
  return (
    <main className="mx-auto mt-10 max-w-6xl px-4">
      <Banner buttonText="View coffee stores" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
        <Card href="https://google.com" name="Brighton" imgUrl="/static/hero-image.webp"/>
        <Card href="https://google.com" name="Brighton" imgUrl="/static/hero-image.webp"/>
        <Card href="https://google.com" name="Brighton" imgUrl="/static/hero-image.webp"/>
        <Card href="https://google.com" name="Brighton" imgUrl="/static/hero-image.webp"/>
      </div>
    </main>
  );
}
