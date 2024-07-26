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
import Footer from "@/components/Main/Footer/Footer";


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
      <div className="flex justify-end mt-10">
            <Footer />
          </div>

    </main>
  );
}
