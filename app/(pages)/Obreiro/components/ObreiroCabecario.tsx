import { LogIn } from 'lucide-react';

export default function ObreiroCabecario() {
  return (
    <header className="w-full h-[70px] bg-bg  font-sans 
    font-bold flex flex-row justify-between items-center text-[1.6em] sm:text-[1.2em]
    uppercase text-branco">
      
      <h1 className='ml-4'>porteiro:</h1>

      <h1 className="text-center truncate px-2">antonio </h1>

      <div className="flex justify-end items-center ">
        <LogIn className="w-7 h-7 text-letra-clara mr-2!" />
      </div>

    </header>
  );
}
