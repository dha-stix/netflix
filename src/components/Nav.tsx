"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"

export default function Nav() {
    const [show, setShow] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
        window.scrollY > 100 ? setShow(true) :  setShow(false)
        })
        return ()=> {
            window.removeEventListener("scroll", ()=>{})
        }
    }, [])

    return (
        <nav className={`fixed top-0 w-full h-[10vh] z-40 px-6 flex items-center justify-between ${show ? "bg-black" : "bg-transparent"}`}>
            <Image src={logo} alt='Netflix' className='h-[40px] w-[80px] object-contain' />

             <Image src={avatar} alt='Avatar' className='h-[40px] w-[80px] object-contain' />
        </nav>
    )
}