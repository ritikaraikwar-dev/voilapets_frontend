import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import KeyFeature from "../components/KeyFeature";
import SealableShop from "../components/SealableShop";
import ShopSwiper from "../components/ShopSwiper";

function SealablePage() {
  return (
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