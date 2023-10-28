import Image from "next/image"

const page = async({
    params
}) => {
    async function fetcharea(){
        const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.area}`)
        return response.json()

    }
    const area=await fetcharea()
   

    

  return (
    <div className="bg-slate-400 ">
      {
      area.meals.map((items)=>
      <li className="text-2xl pb-8 font-bold text-center ">
        {items.strMeal}
        <div className="flex justify-evenly  pb-8"> 
                
               <Image
                alt="recipe"
                src={`${items.strMealThumb}`}
                width={500}
                height={500}
                className="bg-slate-400 "
               
                
                />
               </div>
      </li>
      
      )
      }
     

    </div>

  )
}

export default page
