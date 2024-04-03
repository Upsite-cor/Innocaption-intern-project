import React from "react"
import CategoriesList from "./Components/CategoriesList";
import Header from "./Components/Header";
import { Divider } from "@nextui-org/react";''

export default function App() {
  return (
    <div>
      <Header/>
      <Divider className="my-3"/>
      <CategoriesList/>
    </div>
    
  )
}