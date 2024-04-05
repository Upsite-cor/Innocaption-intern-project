import React, { useEffect, useState } from "react"
import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../Services/products.service";
import cartSlice, { addCartItem } from "../redux/Slices/cartSlice";
import itemSlice from "../redux/Slices/itemSlice";

const Showcase = () => {
    const [products, setProducts] = useState([]);
    const [desiredtem, setDesiredItem] = useState([]);
    const wantedItem = useSelector(state => state.searchedItem.desiredItem);
    const checkedList = useSelector(state => state.searchedItem.categoryChecked);
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

    const getCheckedItems = () =>{
        let desiredSearch = products.filter((item)=>{
            return (
            checkedList.includes(item.category.toLowerCase()));
        })
        return desiredSearch;
    }

    const renderCheckedItems = () => {
      let desiredSearch = getCheckedItems();
        return(
            desiredSearch.map(product => (
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
                                    Add to cart
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                )
            )
        )
    }

    const renderItems = () => {
        if(!wantedItem && checkedList.length == 0){
            return(
                products.map(product => (
                    <div id='cardItems' className="flex h-[10em] mr-[90px] mb-[5.5em]">
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
                                    Add to cart
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            )
        }
        else{

            if(checkedList.length > 0 && !wantedItem){
                return renderCheckedItems();
            }

            if(wantedItem){
            let desiredSearch = products.filter((item)=>{
                if(checkedList.length > 0){
                    return (
                    item.title.toLowerCase().includes(wantedItem.toLowerCase()) && checkedList.includes(item.category.toLowerCase()));
                }
                return (
                item.title.toLowerCase().includes(wantedItem.toLowerCase()));
            })

            if(desiredSearch.length == 0){
                desiredSearch = products.filter((item)=>{
                   if(checkedList.length > 0){
                        return (
                        item.brand.toLowerCase().includes(wantedItem.toLowerCase()) && checkedList.includes(item.category.toLowerCase()));
                   }
                    return (
                    item.brand.toLowerCase().includes(wantedItem.toLowerCase()));
                })
            }
            
            if(desiredSearch.length == 0){
                desiredSearch = products.filter((item)=>{
                  if(checkedList.length > 0){
                        return (
                        item.category.toLowerCase().includes(wantedItem.toLowerCase()) && checkedList.includes(item.category.toLowerCase()));
                  }
                    return (
                    item.category.toLowerCase().includes(wantedItem.toLowerCase()));
                })
            }

            return(
                desiredSearch.map(product => (
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
                                        Add to cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                )
            )
        }
    }
       
    }

    return (
        <div id='showcase-container' className=" relative right-[1em] justify-center flex flex-wrap w-[60em]">

          
        {renderItems()}


        </div>
    )


}


export default Showcase;