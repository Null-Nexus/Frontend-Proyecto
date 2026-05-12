import Image from "next/image";
import Header from "./header/header";
import Footer from "./Footer/footer";
import Inicio from "./Inicio/Inicio/Inicio";
export default function Home() {
  return (
    <>
      <Header />
     
      <div className="cont">
        <Inicio />
     
      </div>
      <Footer />
    </>
  );
}

