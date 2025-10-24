import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import EssentialHatShop from "../components/EssentialHatShop";
import KeyFeature from "../components/KeyFeature";
import ShopProduct from "../components/ShopProduct";
import ShopSwiper from "../components/ShopSwiper";

function  EssentialHatPage(){
    return(
        <>
          <section className="relative">
            
                 <EssentialHatShop />
               <AdditionalInformation />
               <KeyFeature />
               <AlsoLikeSwiper />
               <ShopSwiper />  
          </section>
        </>
    )
}
export default  EssentialHatPage;