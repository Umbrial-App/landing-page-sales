import Image from 'next/image';
import bgImage from '../../public/bg-header.png';
import Image01 from '../../public/image-1.png';
import Logo from './components/Logo';
import NavBar from './components/NabBar';
import CardPrice from './components/CardsPrice';
import TabsBar from './components/TabsBar';
import Footer from './components/Footer';
import CallToAct from './components/CallToAct';

export default function Home() {
  return (
    <div className='overflow-y-hidden'>
      <NavBar />
      <div className="hero-section relative h-screen flex items-center justify-center bg-cover">
        <Image
          src={bgImage}
          alt="Imagem de Fundo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className='flex items-center justify-center w-full h-full max-w-screen-xl mx-auto z-[2]'>
          <div>
            <h1 className="text-4xl flex items-baseline gap-2 text-start font-bold text-white mb-4">Bem vindo ao
              <Logo
                cor='#FAC20F'
                tamanho='200'
                altura='120' />
            </h1>
            <p className="text-lg opacity-65 w-2/3 text-white mb-6">A melhor solução para quem busca administrar sua barbearia de forma completa com todos os recursos essenciais em um único sistema.</p>
            <button className="bg-white hover:text-white hover:bg-[#FAC20F] text-black px-6 py-2 rounded hover:scale-125 text transition-all">
              <strong>
                Cadastrar
              </strong>
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center h-[700px] justify-center '>
        <div className=' max-w-screen-xl flex items-center justify-center'>
          <div className='w-3/4 flex items-center justify-center'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-3xl'>
                <strong>
                  Transformando Atendimento em Experiência Personalizada na Barbearia Moderna
                </strong>
              </h1>
              <p className='text-lg'>Em um mundo onde a personalização é a chave para o sucesso, apresentamos uma solução revolucionária para transformar a experiência do cliente em sua barbearia. Nosso sistema foi meticulosamente desenvolvido para unificar todos os serviços e produtos oferecidos, proporcionando uma abordagem personalizada que vai além do simples corte de cabelo ou barba.</p>
              <div className='flex gap-3'>
                <button className='bg-[#FAC20F] hover:text-[#FAC20F] hover:bg-white transition-all hover:border hover:border-[#FAC20F] hover:scale-125 hover:drop-shadow-xl text-white px-8 py-2 rounded-xl'>Contratar</button>
                <button className='text-[#FAC20F] border-[#FAC20F] hover:text-white hover:bg-[#FAC20F] hover:scale-125 transition-all hover:drop-shadow-xl border bg-white px-8 py-2 rounded-xl'>Entrar em contato</button>
              </div>
            </div>
          </div>
          <div className=' flex items-center justify-center'>
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
      <div className='w-full h-[650px] flex items-center justify-center max-w-screen-xl mx-auto  '>
        <TabsBar />
      </div>
      <div>
        <CallToAct />
      </div>

      <div className='w-full max-w-screen-xl mx-auto '>

        <CardPrice />

      </div>
      <div className='w-full max-w-screen-xl mx-auto '>
        <Footer />
      </div>
    </div>
  );
}
