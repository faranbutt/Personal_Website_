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
      <div><Header /></div>
      <div id="expereince"><Experience /></div>
      <div><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="ack"><Pic /></div>
      <div id='reviews'><Reviews /></div>
      <div><Contact /></div>

    </main>
  );
}
