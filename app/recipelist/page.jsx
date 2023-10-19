import React from 'react'

const list = async() => {
    async function fetchlist(){
        const response= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        return response.json()
        console.log(fetchlist)
        
    }
    const list=await fetchlist()
  return (
    <div>
      <ul>
        {
          list.meals.map((lists)=>
          <li>
            <h2>{lists.strArea}</h2>
          </li>
          )
        }
      </ul>
    </div>
  )
}

export default list
