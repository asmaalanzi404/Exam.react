import React from 'react'
import axios from 'axios'
type info={
    title:string
    price:string
    description:string
    image:string
    category:string
}
 

 export default function pridect() {
    const[prodect,setprodect]=React.useState<info>({
        title:"" ,
        price: "",
        description: '',
        image:'',
        category: '',
      });
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title:prodect.title,
                price: prodect.price,
                description:prodect.description ,
                image:prodect.image ,
                category:prodect.category
            }
        )
    })
        .then (res=>res.json())
        .then(json=>console.log(json))

        
   return (
     <div>pridect</div>
   )
 }
 