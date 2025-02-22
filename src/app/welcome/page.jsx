import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

function welcome() {
  return (
    <Container>
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl">Profile</h3>
              <p>Welcome, John Doe</p>
            </div>
            <div>
              <Link
                href="/create"
                className="bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2"
              >
                {" "}
                Create Post
              </Link>
            </div>
          </div>
          {/* User Post Data */}
          <div>
            <div className="shadow-xl my-10 p-10 rounded-xl">
              <h4 className="text-2xl">Post Title</h4>
              <Image className="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default welcome;
