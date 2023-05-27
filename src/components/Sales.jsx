import Item from './utils/Item'
import Title from './utils/Title' 

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  console.log("🚀 ~ file: Sales.jsx:5 ~ Sales ~ endpoint", items)
  // console.log(endpoint)
  // ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
  //        : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}
  return (
   <>
      <div className=' nike-container my-10 mx-10 grid justify-center '>
        <Title title={title} className="mx-3"/>
        <div className={'flex flex-nowrap lg:max-w-screen-lg flex-row gap-3 ml-2 justify-start overflow-auto hover:overflow-scroll  '}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} endpoint={"fakeproducts"} />
          ))}
        </div>
      </div>
   </>
  )
}

export default Sales