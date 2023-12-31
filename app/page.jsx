import Link from "next/link"

const page = () => {
  return (
    <div>
      <div className='text-center bg-yellow-500 text-2xl p-5 font-bold text-xl'>
        Recipe Book
      </div>
      <div className=' hover:bg-red-800 cursor-pointer flex bg-red-500 mt-10 p-4 w-1/2 mx-auto rounded-lg'>
      <div className='m-auto  '>
          <Link href='/recipelist' className=' text-3xl text-white '>Recipes List</Link>
          

        </div>
      </div>
      <div className='hover:bg-red-800 cursor-pointer flex bg-red-500 mt-4 p-4 w-1/2 mx-auto rounded-lg'>
        <div className='m-auto'>
          <Link href='/category' className='text-3xl text-white'>
            Category
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default page
