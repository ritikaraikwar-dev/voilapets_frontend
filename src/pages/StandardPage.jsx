import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import CustomerReview from "../components/CustomerReview";
import KeyFeature from "../components/KeyFeature";
import ShopProduct from "../components/ShopProduct";
import ShopSwiper from "../components/ShopSwiper";
import StandardShop from "../components/StandardShop";

function StandardPage(){
    return(
        <>
          <section className="relative">
            
                 <StandardShop />
               <AdditionalInformation />
               <KeyFeature />
               <AlsoLikeSwiper />
               <ShopSwiper />  
          </section>
        </>
    )
}
export default StandardPage;