import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className='app'>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <Header />
        <Banner />
        <About />
        <Portfolio />
        <Footer />
      </div>

      <style jsx>{`
        .app {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
