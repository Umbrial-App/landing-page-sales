import Image from 'next/image';
import bgImage from '../../public/bg-header.png';
import Image01 from '../../public/image-1.png';
import Logo from './components/Logo';
import NavBar from './components/NabBar';
import CardPrice from './components/CardsPrice';
import TabsBar from './components/TabsBar';
import Footer from './components/Footer';
import Acordeon from './components/Acordeon';

export default function Home() {
  return (
    <div className='overflow-y-hidden'>
      <NavBar />
      <div className="hero-section relative lg:h-[700px] h-[600px] flex items-center justify-center bg-cover">
        <Image
          src={bgImage}
          alt="Imagem de Fundo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="flex w-[950px] items-center justify-center lg:flex lg:justify-start h-full max-w-screen-xl mx-auto z-[2]">
          <div className="flex gap-6 items-center lg:items-start lg:flex-col justify-center flex-col">
            <div className='lg:flex items-center gap-2 lg:flex-row flex-col justify-center flex lg:justify-start w-full lg:items-baseline'>
              <h1 className=" text-4xl -mb-12 lg:text-4xl items-baseline gap-2 text-start font-bold text-white">
                Bem vindo ao
              </h1>
              <Logo cor="#FAC20F" tamanho="200" altura="120" />
            </div>
            <p className="text-lg text-center lg:text-start opacity-65 w-full max-w-2xl text-white mb-6">
              A melhor solução para quem busca administrar sua barbearia de forma completa com todos os recursos essenciais em um único sistema.
            </p>
            <button className="bg-white w-max hover:text-white hover:bg-[#FAC20F] text-black px-6 py-2 rounded hover:scale-125 text transition-all">
              <strong>Cadastrar</strong>
            </button>
          </div>
        </div>
      </div>

      <div className='flex items-center lg:h-[700px]  justify-center '>
        <div className='w-[1020px] p-7 flex gap-8 flex-col lg:flex-row items-center justify-center'>
          <div className='w-full gap-8 lg:w-3/4 flex flex-col lg:flex-row items-center justify-center'>
            <div className='flex flex-col gap-6 text-center lg:text-left'>
              <h1 className='text-3xl text-justify'>
                <strong>
                  Transformando Atendimento em Experiência Personalizada na Barbearia Moderna
                </strong>
              </h1>
              <p className='lg:text-lg text-base text-justify'>
                Em um mundo onde a personalização é a chave para o sucesso, apresentamos uma solução revolucionária para transformar a experiência do cliente em sua barbearia. Nosso sistema foi meticulosamente desenvolvido para unificar todos os serviços e produtos oferecidos, proporcionando uma abordagem personalizada que vai além do simples corte de cabelo ou barba.
              </p>
              <div className='flex flex-col lg:flex-row gap-3'>
                <button className='bg-[#FAC20F] hover:text-[#FAC20F] hover:bg-white transition-all hover:border hover:border-[#FAC20F] hover:scale-125 hover:drop-shadow-xl text-white px-8 py-2 rounded-xl mb-3 lg:mb-0 lg:mr-3'>Contratar</button>
                <button className='text-[#FAC20F] border-[#FAC20F] hover:text-white hover:bg-[#FAC20F] hover:scale-125 transition-all hover:drop-shadow-xl border bg-white px-8 py-2 rounded-xl'>Entrar em contato</button>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src={Image01}
              width={541}
              height={192}
              alt="Imagem de Fundo"
              quality={100}
            />
          </div>
        </div>

      </div>
      <div className='w-screen  flex items-center justify-center max-w-screen-xl mx-auto  '>
        <TabsBar />
      </div>


      <div className='w-[1050px] max-w-screen-xl mx-auto '>

        <CardPrice />

      </div>

      <Acordeon />

      <div className='w-[px] max-w-screen-xl mx-auto '>
        <Footer />
      </div>
    </div>
  );
}
