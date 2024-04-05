import React from "react"
import CategoriesList from "./Components/CategoriesList";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import { Divider } from "@nextui-org/react";


export default function App() {
  return (
    <div>
      <Header/>
      <Divider className="my-3"/>
      <section id='flexContainer' className="flex bg-slate-500 flex-row space-x-40 space-y-10">
      <CategoriesList/>
      <Showcase/>
      </section>
    </div>
  )
}