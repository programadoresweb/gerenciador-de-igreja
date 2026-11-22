import { Link } from 'lucide-react';


export default function Rodape () {

    return (
        <div className="w-full h-[30px] bg-bg text-letra-clara 
                fixed bottom-0 flex flex-row items-center justify-center gap-2" >
            <p>Feito por: <a href="https://ezequiasgscosta.vercel.app" target="_blank" 
            className='text-branco font-opensans'>Ezequias gs costa</a>
             
            </p>

            <Link className="w-4 h-auto text-letra-clara mr-2!" />
        </div>
    )
}