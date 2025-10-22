import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import CustomerReview from "../components/CustomerReview";
import KeyFeature from "../components/KeyFeature";
import ShopProduct from "../components/ShopProduct";
import ShopSwiper from "../components/ShopSwiper";

function MiniPage(){
    return(
        <>
          <section className="relative ">
            
                <ShopProduct />
               <AdditionalInformation />
               <KeyFeature />
               <AlsoLikeSwiper />
               <ShopSwiper />  
          </section>
        </>
    )
}
export default MiniPage;