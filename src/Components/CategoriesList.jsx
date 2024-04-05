import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { searchItem, categoryChecked, removeChecked} from "../redux/Slices/itemSlice";
import { useState } from "react";

export default function CategoriesList(){
    //searched item is a state and desired item is a value
    const [checkMark, setCheckmark] = useState({
        smartphones: false,
        laptops: false,
        fragrances: false,
        skincare: false,
        groceries: false,
        homedecor: false
    });


    const newItem = useSelector(state => state.searchedItem.desiredItem)
    const dispatch = useDispatch();
    
    console.log('we are in categoriesList: ', newItem);

    const handleCheckboxChange = (category) => {
        if (!checkMark[category]) {
            setCheckmark((prevState) => ({
                ...prevState,
                [category]: !prevState[category]
            }));
            dispatch(categoryChecked(category));
        }else{
            setCheckmark((prevState) => ({
                ...prevState,
                [category]: !prevState[category]
            }));
            dispatch(removeChecked(category));
        }
    };


    return(
        <div className=" flex-none left-[1em] bg-[#27272a] border-[#27272a] border-solid border-1 rounded-lg  my-10 w-1/6 h-[30rem] relative">
        <CheckboxGroup
            label="Select Category"
            color='secondary'
        >
        <Checkbox  value="smartphones" onChange={()=>{
            console.log('pressed on smartphones')
            handleCheckboxChange('smartphones')
        }}>Smartphones</Checkbox>
        <Checkbox value="laptops" onChange={()=>{
            console.log('pressed on laptops')
            handleCheckboxChange('laptops')
        }}>Laptops</Checkbox>
        <Checkbox value="fragrances" onChange={()=>{
            console.log('pressed on fragrances')
            handleCheckboxChange('fragrances')
        }}>Fragrances</Checkbox>
        <Checkbox value="skincare" onChange={()=>{
            console.log('pressed on skincare')
            handleCheckboxChange('skincare')
        }}>Skincare</Checkbox>
        <Checkbox value="groceries" onChange={()=>{
            console.log('pressed on groceries')
            handleCheckboxChange('groceries')
        }}>Groceries</Checkbox>
        <Checkbox value="home-decoration" onChange={()=>{
            handleCheckboxChange('home-decoration')
        }}>Home decoration</Checkbox>
        </CheckboxGroup>
        </div>
    )




}