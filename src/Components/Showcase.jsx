import React, { useEffect, useState } from "react"
import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../Services/products.service";
import cartSlice, { addCartItem } from "../redux/Slices/cartSlice";
import itemSlice from "../redux/Slices/itemSlice";

const Showcase = () => {
    const [products, setProducts] = useState([]);
    const wantedItem = useSelector(state => state.searchedItem.desiredItem)
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

    const addToCart = (product) => {
        dispatch(addCartItem(product));
    }

    const renderItems = () => {
        
    }

    return (
        <div id='showcase-container' className="bg-orange-500 relative right-[6em] justify-center flex flex-wrap w-[60em]">

            {products.map(product => (
                <div id='cardItems' className="flex h-[10em] mr-[90px] mb-[5em]">
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
                                size="sm"

                                onPress={() => addToCart(product)}>
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}



        </div>
    )


}


export default Showcase;