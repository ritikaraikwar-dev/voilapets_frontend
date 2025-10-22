import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import CustomerReview from "../components/CustomerReview";
import KeyFeature from "../components/KeyFeature";
import LargeShop from "../components/LargeShop";
import ShopProduct from "../components/ShopProduct";
import ShopSwiper from "../components/ShopSwiper";

function LargePage(){
    return(
        <>
          <section className="relative">
            
                <LargeShop />
               <AdditionalInformation />
               <KeyFeature />
               <AlsoLikeSwiper />
               <ShopSwiper />  
          </section>
        </>
    )
}
export default LargePage;