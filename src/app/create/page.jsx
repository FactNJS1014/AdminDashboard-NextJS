import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Container from '../components/Container'

function CreatePage() {
  return (
    <Container>
      <Navbar />
      <div className='flex-grow'>
        <div className='comtainer mx-auto shadow-xl my-10 p-10 rounded-xl'>
          <Link href='/welcome' className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>
          Go Back
          </Link>
          <hr />
          <h3 className='text-xl'>Create Post</h3>
          <form action="">
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            placeholder='Post Title' 
            />
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            placeholder='Post Image URL' 
            />
            <textarea cols="30" rows="10" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
            placeholder='Post Content'>
            </textarea>
            <button className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2' type='submit' name='create'>Create Post</button>
          </form>

        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default CreatePage
