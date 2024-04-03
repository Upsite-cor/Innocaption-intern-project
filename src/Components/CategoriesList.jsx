import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";


export default function CategoriesList(){

    return(
        <div className="top-[5em] left-[1em] bg-[#27272a] border-[#27272a] border-solid border-1 rounded-lg  w-1/6 h-[32rem] relative">
            
        <CheckboxGroup
            label="Select Category"
            color='secondary'
        >
        <Checkbox  value="Shoes">Shoes</Checkbox>
        <Checkbox value="Shirts">Shirts</Checkbox>
        <Checkbox value="Glasses">Glasses</Checkbox>
        <Checkbox value="Hats">Hats</Checkbox>
        <Checkbox value="Socks">Socks</Checkbox>
        </CheckboxGroup>
        </div>
    )




}