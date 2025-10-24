import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import KeyFeature from "../components/KeyFeature";
import ShopSwiper from "../components/ShopSwiper";
import StandardShop from "../components/StandardShop";

function StandardPage() {
  return (
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