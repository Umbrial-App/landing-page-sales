'use client'
import { useState } from 'react';
import Logo from './Logo';

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`fixed top-0 z-10 w-full ${isMenuOpen ? '' : 'bg-white'} flex fixed top-0 flex-col items-center justify-center`}>

                <div className="w-full h-12 flex items-center justify-center gap-4 bg-[#FAC20F] hidden lg:flex">
                    <strong>
                        Revolucione Sua Barbearia com 30 Dias Grátis do Nosso Sistema de Experiência Personalizada!
                    </strong>
                    <button
                        type="button"
                        className="bg-slate-950 px-6 py-1 text-white rounded hover:drop-shadow-sm hover:bg-slate-700 transition-all"
                    >
                        Contrate Agora
                    </button>
                </div>
                <div className="flex px-12 justify-evenly w-full  items-center align-middle content-center">
                    <div className=" flex lg:hidden w-full">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-2xl focus:outline-none"
                        >
                            &#8801;
                        </button>
                    </div>
                    <div className='-mt-6 mb-3'>
                        <Logo altura="70" tamanho="120" cor="#000" className="lg:hidden" />
                    </div>
                    <div >

                        <nav className=" hidden lg:flex   w-full items-center gap-5 transition-all py-2">
                            <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Produto</p>
                            <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Solução</p>
                            <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Sobre</p>
                            <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Preços</p>
                        </nav>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className={`transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0'} lg:w-full lg:justify-around fixed top-0 justify-evenly z-10 w-full bg-white flex flex-col`}>
                    <div className="flex transition-all w-full justify-end px-4 py-2">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-2xl focus:outline-none"
                        >
                            &#10005;
                        </button>
                    </div>
                    <nav className="flex w-full flex-col items-center gap-5 transition-all py-2">
                        <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Produto</p>
                        <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Solução</p>
                        <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Sobre</p>
                        <p className="hover:border-b-[0.7px] border-black py-2 cursor-pointer transition-all">Preços</p>
                    </nav>
                </div>
            )}
        </div>
    );
}
