import React from "react";
import AdminNav from "../../components/AdminNav";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Link from "next/link";
function EditPostsPage() {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="comtainer mx-auto shadow-xl my-10 p-10 rounded-xl">
          <Link
            href="/admin/posts"
            className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2"
          >
            Go Back
          </Link>
          <hr className="my-3" />
          <h3 className="text-xl">Admin Edit Posts</h3>
          <form action="">
            <input
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Title"
              value="Title before update"
            />
            <input
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Image URL"
              value="https://imgurl.com/img"
            />
            <textarea
              cols="30"
              rows="10"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Content"
            >
              Post content before update
            </textarea>
            <button
              className="bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2"
              type="submit"
              name="update"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default EditPostsPage;
