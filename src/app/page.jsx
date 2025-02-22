import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import vercel from '../../public/vercel-logo.png';
import Footer from "./components/Footer";
export default function Home() {
  return (
  <main>
    <Container>
     <Navbar />
     <div className="flex-grow text-center p-10">
      <h3 className="text-5xl">NextJS Dashboard</h3>
      <p>Become Full-Stack Developer with NextJS</p>
      <div className="flex justify-center my-10">
        <Image src={vercel} width={300} height={300} alt="NextJS Logo" />
      </div>
     </div>
      <Footer />
    </Container>
  </main>
);
}
