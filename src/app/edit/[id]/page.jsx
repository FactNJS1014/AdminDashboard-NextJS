"use client"

import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Container from '../../components/Container'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

function EditPage({params}) {

  const {data: session} = useSession()
  if(!session) redirect("/login")

  const {id} = params
  console.log(id)

  return (
    <Container>
      <Navbar />
      <div className='flex-grow'>
        <div className='comtainer mx-auto shadow-xl my-10 p-10 rounded-xl'>
          <Link href='/welcome' className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>
          Go Back
          </Link>
          <hr className='my-3' />
          <h3 className='text-xl'>Edit Post</h3>
          <form action="">
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            placeholder='Post Title' 
            value="Title before update"
            />
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            placeholder='Post Image URL' 
            value="https://imgurl.com/img"
            />
            <textarea cols="30" rows="10" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
            placeholder='Post Content'>
            Post content before update
            </textarea>
            <button className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2' type='submit' name='update'>Update Post</button>
          </form>

        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default EditPage
