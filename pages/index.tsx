import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tours from '@/components/Tours'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title> Explore Leka</title>
      </Head>
        {/* HEADER */ }
        <div className=' text-gray-400  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16] '>
        <img src="" className='h-screen absolute inset-0 object-cover object-center mx-auto'/>

        <section className='snap-start '>
        <Header />
        </section>

        <Hero />
        </div>


        {/* HERO */ }
        <section className='snap-start ' >
        <Tours  />
        </section>

         {/* TOURS */ }

        {/* ABOUT */ }

      <section className='snap-start ' >
        <About  />
        </section>

       

        {/* RENT BIKE */ }

        {/* FEEDBACK */ }

        {/* CONTACT */ }
      
      

        
    
    </div>
  )
}

export default Home
