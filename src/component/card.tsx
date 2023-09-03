import React from 'react'
import axios from 'axios'
type info={
    Id:string
    userId:string
    date:string
    products:string
    __v:string
}

function card() {
const[card,setcard]=React.useState<info>({
    Id:"" ,
    userId: "",
    date: '',
    products:'',
    __v: '',
  });
  React.useEffect(()=>{
  fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
        ,[]})
       
        fetch('https://fakestoreapi.com/carts',{
            method:"DELETE"
        })
    
            .then(res=>res.json())
            .then(json=>console.log(json))
        }
  return (
    <div>


<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
   {card.map((items)=>
    <div key={items.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2"><items.userId></p>
                <p className="text-base text-gray-400 font-normal"><items.date></p>
                <p className="text-xl text-gray-700 font-bold mb-2"><items.products></p>
                <p className="text-xl text-gray-700 font-bold mb-2"></p>
            </div>
        </div>
        
        </div>
    )
   }
</section>
   
  )
}

export default card