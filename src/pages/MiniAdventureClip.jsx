import AdditionalInformation from "../components/AdditionalInformation";
import AlsoLikeSwiper from "../components/AlsoLikeSwiper";
import KeyFeature from "../components/KeyFeature";
import MiniAdventureShop from "../components/MiniAdventureShop";
import ShopSwiper from "../components/ShopSwiper";

function MiniAdventureClipPage() {
    return (
        <>
            <section className="relative">
                <MiniAdventureShop />
                <AdditionalInformation />
                <KeyFeature />
                <AlsoLikeSwiper />
                <ShopSwiper />
            </section>
        </>
    )
}
export default MiniAdventureClipPage;