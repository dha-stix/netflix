import { Banner, imageBaseUrl } from "@/utils/util"
import { fetchTrailer } from "@/utils/util";
import Image from "next/image"

interface Props {
    movies: Banner[];
    title: string;
    setShowTrailer: any
    setTrailerURL: any
}
export default function LargeMovie({ movies, title,  setShowTrailer, setTrailerURL }: Props ) {
    return (
        <section className='p-4'>
                <h3 className='text-white text-xl mb-2'>{title}</h3>
                <div className='flex space-x-4 overflow-x-scroll overflow-y-hidden scrollEffect w-full py-2'>
                    {movies.map((movie: Banner )=> (
                        <Image key={movie.name} src={`${movie.poster_path}` ?
                            `${imageBaseUrl}${movie.backdrop_path}` :
                            `${imageBaseUrl}${movie.poster_path}`}
                            alt={movie.name} width={300} height={150} className='object-contain ease-in-out duration-[450ms] hover:scale-105'
                            onClick={() => {
                                setShowTrailer(true)
                                fetchTrailer(movie, setTrailerURL)
                            }}
                        />
                    ))} 
                </div>
            </section>
    )
}