import Arrival from '../components/Arrival';
import AsSeenSwiper from '../components/AsSeenSwiper';
import Elegance from '../components/Elegance';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import PetLoversSwiper from '../components/PetLoversSwiper';
import Sealable from '../components/Sealable';
import ShopByColorSwiper from '../components/ShopByColorSwiper';
import Ultimate from '../components/ultimate';
import Welcome from '../components/Welcome';


function Home() {
   return (
      <>
         <Hero />
         <Welcome />
         <Arrival />
         <PetLoversSwiper />
         <Elegance />
         <Feature />
         <Ultimate />
         <Sealable />
         <ShopByColorSwiper />
         <AsSeenSwiper />

      </>
   )
}
export default Home;