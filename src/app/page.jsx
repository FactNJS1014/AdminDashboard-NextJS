"use client"

import Image from "next/image";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import vercel from '../../public/vercel-logo.png';
import Footer from "./components/Footer";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data: session} = useSession();

  return (
  <main>
    <Container>
     <Navbar session={session} />
     <div className="flex-grrow text-center p-10">
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
