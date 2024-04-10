'use client'
import { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

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
                    <Button>
                        Entre em contato
                    </Button>

                </div>
                <div className="flex px-12 justify-center w-[1050px] m-auto   items-center align-middle content-center">
                    <div className=" flex lg:hidden w-full">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-2xl focus:outline-none"
                        >
                            &#8801;
                        </button>
                    </div>
                    <div className='-mt-6 pl-0 ml-0 mb-3 m-auto'>
                        <Logo altura="70" tamanho="120" cor="#000" />
                    </div>
                    <div >

                        <nav className=" hidden lg:flex   w-full items-center gap-5 transition-all py-2">
                            <Button variant={'link'}>
                                Produto
                            </Button>
                            <Button variant={'link'}>
                                Solução
                            </Button>
                            <Button variant={'link'}>
                                Sobre
                            </Button>
                            <Button variant={'link'}>
                                Preço
                            </Button>

                            <Button variant={'outline'}>
                                <a href="https://app.umbrial.com/">
                                    Login
                                </a>
                            </Button>
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
