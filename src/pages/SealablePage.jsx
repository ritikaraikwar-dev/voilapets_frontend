import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import CustomerReview from "../components/CustomerReview";
import KeyFeature from "../components/KeyFeature";
import SealableShop from "../components/SealableShop";
import ShopProduct from "../components/ShopProduct";
import ShopSwiper from "../components/ShopSwiper";

function SealablePage(){
    return(
        <>
          <section className="relative">
            
                 <SealableShop />
               <AdditionalInformation />
               <KeyFeature />
               <AlsoLikeSwiper />
               <ShopSwiper />  
          </section>
        </>
    )
}
export default SealablePage;