

const page = async({
    params
}) => {
    async function fetchcount(){
        const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.area}`)
        return response.json()

    }
    const area=await fetchcount()
    console.log(fetchcount)

    

  return (
    <div>
      {
      area.meals.map((items)=>
      <li>
        {items.strMeal}
      </li>
      )
      }

    </div>

  )
}

export default page
