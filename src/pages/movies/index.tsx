"use client"
import { requests, imageBaseUrl, Banner, fetchTrailer } from '../../utils/util';
import {AiOutlineExclamationCircle} from "react-icons/ai"
import LargeMovie from '@/components/LargeMovie';
import {BsFillPlayFill} from "react-icons/bs"
import { useEffect, useState } from "react"
import Image from "next/image"
import Nav from '@/components/Nav';
import Head from 'next/head';
import Modal from '@/components/Modal';

export async function getServerSideProps() { 
  const promise = await Promise.all([
            fetch(requests.fetchActionMovies).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchComedyMovies).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchDocumentaries).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchHorrorMovies).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchRomanceMovies).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchTopRated).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchTrending).then(res => res.json().then(data => data.results)),
            fetch(requests.fetchNetflixOriginals).then(res => res.json().then(data => data.results)),
        ])
    return {
    props : {promise}
}
}

export default function Home({ promise }: any) {
    const [bannerMovie, setBannerMovie] = useState<Banner>()
    const [showTrailer, setShowTrailer] = useState(false)
    const [trailerURL, setTrailerURL] = useState<string>("")

    useEffect(() => {
        setBannerMovie(promise[7][Math.floor(Math.random() * 20)])  
    }, [promise])

    return (
        <div>
            <Head>
                <title>Netflix - Available Movies</title>
            </Head>
        <main className="bg-black w-full min-h-[100vh]">
            <Nav/>
            <header className="w-full md:h-[70vh] py-6 relative flex flex-col justify-center mb-4">
                    <Image src={`${bannerMovie?.poster_path}` ?
                        `${imageBaseUrl}${bannerMovie?.poster_path}` :
                        `${imageBaseUrl}${bannerMovie?.backdrop_path}`}
                        alt={`{${bannerMovie?.name} || "Null"}`} fill={true}
                        className="object-cover h-full w-full absolute"
                    />

                    <div className=" z-10 top-0 px-6 md:w-2/3 w-full">
                        <h2 className="text-white text-5xl font-bold mb-6">
                       {bannerMovie?.original_name}     
                        </h2>
                        <p className="text-white opacity-80 md:text-lg text-sm mb-4">{bannerMovie?.overview}</p>
                        <div className="w-full flex space-x-4 items-center">
                            <button className="py-3 px-4 bg-white w-[150px] rounded hover:shadow hover:bg-gray-400 hover:text-white flex items-center">
                                <BsFillPlayFill className="mr-2" size={30}/>
                                Play
                            </button>

                            <button className="py-3 px-4 bg-gray-400 text-white w-[150px] rounded hover:shadow flex items-center hover:bg-white hover:text-black text-center" 
                                onClick={() => {
                                    setShowTrailer(true)
                                    fetchTrailer(bannerMovie, setTrailerURL)
                                }}
                            >
                                More info  <AiOutlineExclamationCircle className="ml-2" size={20} /> </button>
                        </div>
                    </div>
            </header>
            
            <section className='p-4'>
                <h3 className='text-white text-xl mb-4'>NETFLIX ORIGINALS</h3>
                <div className='flex space-x-4 overflow-x-scroll overflow-y-hidden scrollEffect w-full py-2'>
                    {promise[7].map((movie: Banner )=> (
                        <Image src={`${movie.poster_path}` ?
                            `${imageBaseUrl}${movie.poster_path}` :
                            `${imageBaseUrl}${movie.backdrop_path}`} alt={movie.name} key={movie.name} width={200} height={300} className='object-contain ease-in-out duration-[450ms] hover:scale-110' onClick={() => {
                                setShowTrailer(true)
                                fetchTrailer(movie, setTrailerURL)
                            }} />
                    ))} 
                </div>
            </section>

                <LargeMovie movies={promise[6]} title='Trending Now' setShowTrailer={setShowTrailer} setTrailerURL={setTrailerURL} />
            <LargeMovie movies={promise[5]} title='Top Rated Movies' setShowTrailer={setShowTrailer}  setTrailerURL={setTrailerURL}  />
            <LargeMovie movies={promise[0]} title='Action Movies' setShowTrailer={setShowTrailer}  setTrailerURL={setTrailerURL}  />
            <LargeMovie movies={promise[1]} title='Comedy Movies' setShowTrailer={setShowTrailer}  setTrailerURL={setTrailerURL} />
            <LargeMovie movies={promise[2]} title='Documentary Movies' setShowTrailer={setShowTrailer}  setTrailerURL={setTrailerURL} />
            <LargeMovie movies={promise[3]} title='Horror Movies' setShowTrailer={setShowTrailer}  setTrailerURL={setTrailerURL} />
            <LargeMovie movies={promise[4]} title='Romance Movies' setShowTrailer={setShowTrailer}  setTrailerURL={setTrailerURL}  />
            
                {showTrailer && <Modal trailerURL={trailerURL} setShowTrailer={setShowTrailer} />}
            </main>
            </div>
    )
}