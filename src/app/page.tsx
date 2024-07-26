import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import InfoHome from '@/components/home/info_home';
import MoreInfo from '@/components/home/more_info';

export default function Home() {
  return (
    <main className='bg-banner-fondo-claro dark:bg-banner-fondo conteiner bg-no-repeat bg-cover bg-center'>
      <NavBar />
      <div className="mx-auto px-10">
        <InfoHome />
        <MoreInfo />
      </div>
      <Footer />
    </main>
  );
}
