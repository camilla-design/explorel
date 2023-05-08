import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {}

export default function SilentTour({}: Props) {
  return (
    
    <div className='relative flex flex-col rounded-lg items-center space-y-1 top-10 z-10'>
       <img src="silent_img.jpg" />
        <div className='bottom-10 absolute text-center items-center '>
        <h4 className='pt-3 pb-3 font-bold text-3xl text-[#ffa500]'>Silent <span className='text-black'>in the night </span> </h4>
             <p className='font-thin pb-2 w-[400px] mx-auto'>Senk skuldrene sammen med sola som går ned i havet, la stresset og hverdagssysler fly avsted med lyden av fuglenes sang, la hjertet finne rytmen i bølgenes skvulp mot svaberget </p>
             <p>Turen tar 5-6 timer</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
        </div>
   
    
  </div>
  )
}