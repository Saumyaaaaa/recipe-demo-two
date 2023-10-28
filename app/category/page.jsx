import Image from "next/image"

const category = async() => {
    async function fetchCategories(){
        const categories=  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        return categories.json()
    }
    const data= await fetchCategories()
    console.log(data)
  return (
    <div className="bg-slate-400">
        <ul >
            {
               data.categories.map((item)=>
               <li>
               <p className="  font-bold text-3xl text-center p-5">
               {item.strCategory}
               
               </p>
               
               <div className="items-end text-start">
               <p className="text-1xl indent-8">
               {item.strCategoryDescription}
               </p>
               </div>
               <div className="flex justify-evenly "> 
                
               <Image
                alt="recipe"
                src={`${item.strCategoryThumb}`}
                width={500}
                height={500}
                className="bg-slate-400 "
                
                />
               </div>
               </li>
               )
            }

        </ul>
      
    </div>
  )
}
export default category