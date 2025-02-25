"use client"

import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



function welcome() {

  const {data: session} = useSession();
  if(!session) {
    redirect("/login");
  }
  console.log(session);
  const [postData, setPostData] = useState([])
  //console.log(postData)

  const userEmail = session?.user?.email;
  const getposts = async () => {
    try {
      const res = await fetch(`/api/posts?email=${userEmail}`, {
        cache: "no-store",
      })

      if(!res.ok){
        throw new Error("Fetch Post Data Failed");
      }

      const data = await res.json();
      // console.log(data);
      setPostData(data);
    } catch (error) {
      console.log(error)
      
    }
  }
  
  useEffect(() => {
    getposts();
  },[])
  return (
    <Container>
      <Navbar session={session} />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl">Profile</h3>
              <p>Welcome, {session?.user?.name}</p>
              <p>Email, {session?.user?.email}</p>
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
            {postData && postData.length > 0 ? (
              postData.map((post) => (
                <div key={post._id} className="shadow-xl my-10 p-10 rounded-xl">
                <h4 className="text-2xl">{post.title}</h4>
                <Image className="my-3 rounded-md" src={post.img}   
                  width={300}
                  height={0}
                  alt={post.title}
                />
                <p>
                  {post.content}
                </p>
                <div className="mt-5">
                  <Link className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2" href={`/edit/${post._id}`}>
                  Edit
                  </Link>
                  <Link className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2" href={`/delete/${post._id}`}>
                  Delete
                  </Link>
                </div>
              </div>
              ))
            ):(
              <p className="bg-gray-300 p-3 my-3">
                No post data available
              </p>
            )}
            
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default welcome;
