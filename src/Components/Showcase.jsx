import React, { useEffect, useState } from "react"
import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import { useDispatch } from "react-redux";
import fetchData from "../Services/products.service";
import cartSlice, { addCart } from "../redux/Slices/cartSlice";
const Showcase = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchProducts = await fetchData();
                setProducts(fetchProducts.products);
            }
            catch (error) {
                console.error("Error fetching products: ", error);
            }

        }
        fetchProducts();
    }, [])

    // console.log("Showcase: ", products);

    const addToCart = (product) => {
        //Hi chatgpt can you add a feature here in this function.
        //If the button is pressed I want that product to be dispatched to my cartslice.
        // if(!product){
        //     dispatch(addCart(product));
        // }
       
    }


    return (
        <div id='showcase-container' className="bg-orange-500 justify-center flex flex-wrap w-[60em]">

            {products.map(product => (
                <div id = 'cardItems' className="flex h-[10em] mr-[90px] mb-[5em]">
                    <Card
                        key={product.id}
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                    >
                        <Image
                            alt={product.title}
                            className="object-cover"
                            height={208}
                            src={product.thumbnail}
                            width={200}
                        />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">
                                {product.title}
                            </p>
                            <Button 
                            className="text-tiny text-white bg-black/20" variant="flat"
                             color="default" radius="lg" 
                             size="sm" onClick={addToCart(product)}>
                                Buy Now
                            </Button>
                        </CardFooter>




                    </Card>


                </div>

            ))}



        </div>
    )



    // return (
    //     <div id='showcase-container' className="bg-orange-500 justify-center flex flex-wrap w-[60em]">

    //    <div id = 'cardItems' className="flex h-[8em] mr-[90px]">
    //     <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none"
    //     >
    //     <Image
    //         alt="product"
    //         className="object-cover"
    //         height={208}
    //         src={products[0].thumbnail}
    //         width={200}
    //     />
    //     <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //         <p className="text-tiny text-white/80">
    //             Product Name
    //         </p>
    //         <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       Buy Now
    //     </Button>
    //     </CardFooter>




    //     </Card>
    //    </div>
    //    <div id = 'cardItems' className="flex h-[8em] mr-[90px]">
    //     <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none"
    //     >
    //     <Image
    //         alt="product"
    //         className="object-cover"
    //         height={208}
    //         src={products[0].thumbnail}
    //         width={200}
    //     />
    //     <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //         <p className="text-tiny text-white/80">
    //             Product Name
    //         </p>
    //         <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       Buy Now
    //     </Button>
    //     </CardFooter>




    //     </Card>
    //    </div> 
    //    <div id = 'cardItems' className="flex h-[8em] mr-[90px]">
    //     <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none"
    //     >
    //     <Image
    //         alt="product"
    //         className="object-cover"
    //         height={208}
    //         src={products[0].thumbnail}
    //         width={200}
    //     />
    //     <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //         <p className="text-tiny text-white/80">
    //             Product Name
    //         </p>
    //         <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       Buy Now
    //     </Button>
    //     </CardFooter>




    //     </Card>
    //    </div>

    //    <div id = 'cardItems' className="flex h-[8em] mr-[90px]">
    //     <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none"
    //     >
    //     <Image
    //         alt="product"
    //         className="object-cover"
    //         height={208}
    //         src={products[0].thumbnail}
    //         width={200}
    //     />
    //     <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //         <p className="text-tiny text-white/80">
    //             Product Name
    //         </p>
    //         <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       Buy Now
    //     </Button>
    //     </CardFooter>




    //     </Card>
    //    </div>
    //    <div id = 'cardItems' className="flex h-[8em] mr-[90px]">
    //     <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none"
    //     >
    //     <Image
    //         alt="product"
    //         className="object-cover"
    //         height={208}
    //         src={products[0].thumbnail}
    //         width={200}
    //     />
    //     <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //         <p className="text-tiny text-white/80">
    //             Product Name
    //         </p>
    //         <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       Buy Now
    //     </Button>
    //     </CardFooter>




    //     </Card>
    //    </div>
    //    <div id = 'cardItems' className="flex h-[8em] mr-[90px]">
    //     <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none"
    //     >
    //     <Image
    //         alt="product"
    //         className="object-cover"
    //         height={208}
    //         src={products[0].thumbnail}
    //         width={200}
    //     />
    //     <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //         <p className="text-tiny text-white/80">
    //             Product Name
    //         </p>
    //         <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       Buy Now
    //     </Button>
    //     </CardFooter>




    //     </Card>
    //    </div>



    //   </div>


    //   );


}


export default Showcase;