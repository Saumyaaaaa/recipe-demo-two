import React from 'react'

const list = async() => {
    async function fetchlist(){
        const response= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        return response.json()
        console.log(fetchlist)
        
    }
    const list=await fetchlist()
  return (
    <div >
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {
          list.meals.map((lists)=>
          <li>
            
          <div 
          className='bg-yellow-500 text-center p-5 ml-5 mr-5 mt-5 rounded-lg hover:bg-yellow-600 cursor-pointer font-bold  min-height: 100vh'>
            {lists.strArea}
            </div>
        </li>
          )
        }
      </ul>
    </div>
  )
}

export default list
