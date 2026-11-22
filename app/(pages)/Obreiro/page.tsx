'use client'
import ObreiroCabecario from './components/ObreiroCabecario'
import HomeObreiro from './components/HomeObreiro'
import Rodape from '@/app/components/Rodape'


export default function MainObreiro() {

    return (
        <main>
            <ObreiroCabecario/>
            <HomeObreiro/>
            <Rodape/>
        </main>
    )
}