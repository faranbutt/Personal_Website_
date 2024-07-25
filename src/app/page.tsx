import Image from "next/image";
import {
  Header,
  Experience,
  Skills,
  Projects,
  Reviews,
  Pic,
  Contact,
} from "@/components/Main/exporter";


export default function Home() {
  return (
    <main>
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <Pic />
      <Reviews />
      <Contact />

    </main>
  );
}
