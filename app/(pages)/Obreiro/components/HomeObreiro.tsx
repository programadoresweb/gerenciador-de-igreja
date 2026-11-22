'use client' 
import { useState } from "react"

export default function HomeObreiro () {
    return (
        <section className="flex flex-col justify-around items-center 
        w-full h-[80vh] ">
            <button className="botao1">adicionar dismo</button>
            <button className="botao1">adicionar oferta</button>
            <button className="botao1">solicitar cargo</button>
            <button className="botao1">meu perfil</button>
        </section>
    )
}