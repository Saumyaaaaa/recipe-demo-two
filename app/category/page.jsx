import Image from "next/image"

const category = async() => {
    async function fetchCategories(){
        const categories=  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        return categories.json()
    }
    const data= await fetchCategories()
    console.log(data)
  return (
    <div>
        <ul>
            {
               data.categories.map((item)=>
               <li>
               <p>
               {item.strCategory}
               
               </p>
               <p>
               {item.strCategoryDescription}
               </p>
                <Image
                alt="recipe"
                src={`${item.strCategoryThumb}`}
                width={500}
                height={500}
                />
               </li>
               )
            }

        </ul>
      
    </div>
  )
}

export default category
