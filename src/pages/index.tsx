import logo from "../images/logo.png"
import mobileImage from "../images/mobileImage.jpeg"
import boxshot from "../images/boxshot.png"
import { Collapse } from "react-collapse";
import kids from "../images/kids.png"
import {FaDownload} from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import {FaTimes} from "react-icons/fa"
import { faqs } from "../utils/util"
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
      const [clicked, setClicked] = useState<number>()

    const toggleClick = (index: number) => {
        if (clicked == index) {
            return setClicked(0); 
        }
        setClicked(index)   
    }
  
  return (
    <div>
      <Head>
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
      </Head>
    <main>
      <header className='h-[100vh] w-full header relative'>
      <nav className='w-full min-h-[15vh] py-4 px-6 md:px-[100px] flex items-center justify-between absolute'>
          <Image src={logo} alt='Netflix' className='h-[80px] w-[80px] md:object-contain md:w-[180px]' />
          <Link href="/movies" className='px-4 py-2 text-sm font-semibold  text-white rounded bg-red-600'>Movies</Link>

        </nav>
        <section className='w-full min-h-[85vh] flex items-center flex-col justify-center absolute px-6 my-[100px]'>
          <h1 className='font-bold md:text-5xl text-3xl text-center text-white mb-6'>Unlimited movies, TV shows, and more</h1>
          <h3 className='text-white md:text-2xl text-lg mb-4 text-center'>Watch anywhere. Cancel anytime.</h3>
          <h3 className='text-white md:text-xl text-lg mb-6 text-center'>Ready to watch? Enter your email to create or restart your membership.</h3>
          <form className='flex md:flex-row flex-col items-center md:space-x-6 w-full justify-center'>
            <input type='email' placeholder='Email address' className='p-4 bg-transparent border-[1px] md:w-1/3 w-full rounded text-gray-200 md:mb-0 mb-2' />
            <button className='bg-red-600 text-white p-4 md:w-[150px] w-full rounded font-semibold text-lg outline-none'>Get started</button>
          </form> 
        </section>
      </header>

      <div className='bg-black w-full min-h-[500px] border-t-[10px] border-t-gray-800 px-4 md:px-[60px] py-[60px] flex md:flex-row flex-col items-center justify-center space-x-6'>
        <section className='md:w-[45%] w-full mb-6 md:mb-0'>
          <h2 className='font-bold md:text-5xl text-3xl text-white mb-6 md:text-left text-center'>Enjoy on your TV</h2>
          <h3 className='text-white md:text-2xl text-xl md:text-left text-center'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
        </section>

        <aside className='md:w-[50%] w-full firstImage flex items-center justify-center'>
          <div>
                <video autoPlay loop height='150' width='420'>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
  
              Your browser does not support the video tag.
            </video>
          </div>
        </aside>
      </div>

      <div className='bg-black w-full min-h-[500px] border-t-[10px] border-t-gray-800  flex md:flex-row flex-col items-center justify-center space-x-6  px-4 md:px-[60px] py-[60px]'>
        <aside className='md:w-[50%] w-full relative flex items-center justify-center mb-6 md:mb-0'>
          <Image src={mobileImage} alt='Mobile Phone' />
          <div className=' border-2 border-gray-700 rounded-xl absolute bottom-2 p-4 bg-black flex items-center h-[100px] justify-between md:space-x-8'>
            
            <Image src={boxshot} alt='Stranger Things' className='h-full w-[15%]' />
            <div>
              <p className='text-white font-semibold font-lg'>Stranger Things</p>
              <p className='text-blue-500 text-sm'>Downloading...</p>
            </div>
            <FaDownload className="text-white"/>
          </div>
        </aside>

        <section className='md:w-[45%] w-full '>
          <h2 className='font-bold  md:text-5xl text-3xl text-white mb-6 md:text-left text-center'>Download your shows to watch offline</h2>
          <h3 className='text-white md:text-2xl text-xl md:text-left text-center'>Save your favorites easily and always have something to watch.</h3>
        </section>

      </div>

       <div className='bg-black w-full min-h-[500px] border-t-[10px] border-t-gray-800 px-4 md:px-[60px] py-[60px] flex md:flex-row flex-col items-center justify-center space-x-6'>
        <section className='md:w-[45%] w-full mb-6 md:mb-0'>
          <h2 className='font-bold md:text-5xl text-3xl text-white mb-6 md:text-left text-center'>Watch everywhere</h2>
          <h3 className='text-white md:text-2xl text-xl md:text-left text-center'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </section>

        <aside className='md:w-[50%] w-full firstImage flex items-center justify-center'>
          <div>
                <video autoPlay loop height='150' width='420'>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
  
              Your browser does not support the video tag.
            </video>
          </div>
        </aside>
      </div>

      <div className='bg-black w-full min-h-[500px] border-t-[10px] border-t-gray-800 flex md:flex-row flex-col items-center justify-center space-x-6  px-4 md:px-[60px] py-[60px]'>
        
        <aside className='md:w-[50%] w-full flex items-center justify-center mb-6 md:mb-0'>
          <Image src={kids} alt='Netflix Kids' />
        </aside>
        
        <section className='md:w-[45%] w-full '>
          <h2 className='font-bold  md:text-5xl text-3xl text-white mb-6 md:text-left text-center'>Create profiles for kids</h2>
          <h3 className='text-white md:text-2xl text-xl md:text-left text-center'>
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
        </section>
     
      </div>

       <div className='bg-black w-full border-t-[10px] border-t-gray-800 flex flex-col items-center justify-center py-[80px] px-4'>
        
          <h2 className='font-bold md:text-5xl text-3xl text-white mb-10 md:text-left text-center'>Frequently Asked Questions</h2>
          
        <div className='mb-6 w-full flex flex-col items-center justify-center'>
          {faqs.map((data, index )=> (
            <div className='md:w-5/6 w-full mb-2' key={index}>
            <div className='bg-stone-800 p-6 rounded flex items-center justify-between mb-[1.5px]'>
                <p className='text-white md:text-2xl text-xl'>{data.title}</p>
                {clicked === index ? (
                   <FaTimes className='text-4xl font-extralight text-white cursor-pointer' onClick={() => toggleClick(index)}/>
                ) : (
                     <AiOutlinePlus className='text-4xl text-white cursor-pointer' onClick={() => toggleClick(index)}/>
                )}
              </div>
              <Collapse isOpened={clicked === index}>
                <div className='bg-stone-800 p-6 rounded'>
                  <p className='text-white md:text-xl text-md opacity-70'>{data.content}</p>
                </div>
              </Collapse>
          </div>
          ))}
          </div>
          
        
        <p className='text-white text-lg text-center mb-6'>Ready to watch? Enter your email to create or restart your membership.</p>
        
      <form className='flex items-center md:flex-row flex-col md:space-x-6 w-full justify-center'>
            <input type='email' placeholder='Email address' className='p-4 bg-transparent border-[1px] md:w-1/3 w-full rounded text-gray-200 md:mb-0 mb-4' />
            <button className='bg-red-600 text-white p-4 md:w-[150px] w-full rounded font-semibold text-lg outline-none'>Get started</button>
          </form> 
      </div>

      <footer className='bg-black w-full min-h-[10vh] border-t-[10px] border-t-gray-800 flex flex-col items-center justify-center py-6 px-4'>
        <p className='text-gray-400 text-center mb-2'>Built by David Asaolu</p>
        <p className='text-gray-400 text-center text-sm'>&copy; Copyright, {new Date().getFullYear()}</p>
      </footer>
      </main>
      </div>
  )
}
