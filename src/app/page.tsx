import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Innovate } from "@/components/home/Innovate";
import { ContactFooter } from "@/components/home/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Innovate />
      <ContactFooter />
    </>
  );
}
