import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { searchItem } from "../redux/Slices/itemSlice";

export default function CategoriesList(){


    //searched item is a state and desired item is a value
    const newItem = useSelector(state => state.searchedItem.desiredItem)

    console.log('we are in categoriesList: ', newItem);


    return(
        // <div className="top-[5em] left-[1em] bg-[#27272a] border-[#27272a] border-solid border-1 rounded-lg  w-1/6 h-[32rem] relative">
        <div className=" flex-none left-[1em] bg-[#27272a] border-[#27272a] border-solid border-1 rounded-lg  w-1/6 h-[32rem] relative">
        <CheckboxGroup
            label="Select Category"
            color='secondary'
        >
        <Checkbox  value="smartphones">Smartphones</Checkbox>
        <Checkbox value="laptops">Laptops</Checkbox>
        <Checkbox value="fragrances">Fragrances</Checkbox>
        <Checkbox value="skincare">Skincare</Checkbox>
        <Checkbox value="groceries">Groceries</Checkbox>
        <Checkbox value="home-decoration">Home decoration</Checkbox>
        </CheckboxGroup>
        </div>
    )




}