import Button from "../components/button";
import Image from "next/image";
import nature from "@/public/images/oip.jpeg"

export const metadata = {
    title: "About",
    description: "This is about page",
  };

export default function About(){
    // throw new Error('new error...')
    return (<main className="mt-10">
        <div>this is about page.</div>
        <Image placeholder="blur" src={nature} alt="no image" />
        <Button/>
    </main>); 
}