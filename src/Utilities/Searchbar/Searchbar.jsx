import { useEffect, useState } from "react";
import { TextField} from "@mui/material";
import fetchData from "../../Services/products.service";
import {Input} from '@nextui-org/react'
import { useDispatch } from "react-redux";


export default function Searchbar() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await fetchData();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);
    console.log(products);



    return (
        <div><Input type="Search" label="Search Item" size={'md'} fullWidth={true} onValueChange={item => {
            setSearchValue(item);
            dispatch(item);
        }}/></div>

    );
}
