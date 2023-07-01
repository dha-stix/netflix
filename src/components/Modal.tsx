import ReactPlayer from "react-player/lazy";
import { MdCancel } from "react-icons/md"

export interface URL {
    trailerURL: string;
    setShowTrailer: any
}
export default function Modal({trailerURL,setShowTrailer}: URL) {
    return (
        <main className="w-full h-screen flex items-center justify-center flex-col dim py-6 md:px-12 px-4 z-50 absolute top-0 left-0">
            <div className="mb-4 w-full flex items-center justify-end mt-[150px]">
                   <MdCancel className="text-xl text-white cursor-pointer" size={40} onClick={() =>setShowTrailer(false)}/>
            </div>
         
            {trailerURL.length > 1 ? (
                <div className="w-full">
                    <div className="w-full h-[100vh]"> 
                         <ReactPlayer url={trailerURL}
                        width="100%"
                            height="70%"  
                            playing
                            controls
                        />
                        
                    </div>
                </div>
                
            ): <p className="text-white">No trailer for this movie</p>}
            
        </main>
    )
}