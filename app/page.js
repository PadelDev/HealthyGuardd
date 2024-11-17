import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch.jsx";
import DoctorList from "./_components/DoctorList";
import Footer from "./_components/Footer";



export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList/>
      <Footer/>  
    </div>
  );  
}
