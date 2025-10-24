import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import KeyFeature from "../components/KeyFeature";
import LargeShop from "../components/LargeShop";
import ShopSwiper from "../components/ShopSwiper";

function LargePage() {
  return (
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