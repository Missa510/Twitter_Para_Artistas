import InfoHome from '@/components/home/info_home';
import MoreInfo from '@/components/home/more_info';

export default function Home() {
  return (
    <>
      <div className="mx-auto px-10">
        <InfoHome />
        <MoreInfo />
      </div>
    </>
  );
}
