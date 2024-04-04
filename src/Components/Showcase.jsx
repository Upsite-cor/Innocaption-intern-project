import React, {useEffect, useState}  from "react"
import {Card, CardFooter, Image, Button} from '@nextui-org/react'
import fetchData from "../Services/products.service";

const Showcase = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async() => {
            try{
                const fetchProducts = await fetchData();
                setProducts(fetchProducts);
            }
            catch(error){
                console.error("Error fetching products: ", error);
            }
         
        }
        fetchProducts();
    }, []) 


    





    return (
       <div id = 'cardItems' className="flex h-[13em]">
        <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
        >
        <Image
            alt="product"
            className="object-cover"
            height={208}
            src="/images/hero-scard.jpeg"
            width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">
                Product Name
            </p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
        </CardFooter>




        </Card>
       </div>
      );


}


export default Showcase;