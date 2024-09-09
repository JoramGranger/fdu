'use client'
import Hero from "../ui/sections/home/hero";
import SectionTitle from "../ui/composites/home/sectionTitle";
import CategoriesSection from "../ui/sections/home/categories";
import BestSelling from "../ui/sections/home/bestSelling";

export default function Home() {
    return(
        <>
        <Hero />
        <CategoriesSection /> 
        <BestSelling />     
        </>
    );
  }