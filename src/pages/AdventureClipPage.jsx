import AdditionalInformation from "../components/AdditionalInformation";
import AdventureShop from "../components/AdventureShop";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import KeyFeature from "../components/KeyFeature";
import ShopSwiper from "../components/ShopSwiper";

function AdventureClipPage() {
  return (
    <>
      <section className="relative">
        <AdventureShop />
        <AdditionalInformation />
        <KeyFeature />
        <AlsoLikeSwiper />
        <ShopSwiper />
      </section>
    </>
  )
}
export default AdventureClipPage;