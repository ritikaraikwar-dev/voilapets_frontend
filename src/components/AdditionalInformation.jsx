import { useState } from 'react';
import faq from '../assets/img/faq.webp';
import faq2 from '../assets/img/faq2.webp';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';


const faqItems = [
    {
        question: "What Makes Our Ultimate Treat Pouch™ Stand Out?",
        answer: "We’re so glad you asked! While there are plenty of treat pouches on the market, ours is truly one of a kind. Crafted from premium silicone, it features a spring-assisted mechanism for effortless opening and closing. Every detail has been thoughtfully designed—from the wide-access opening that makes grabbing treats a breeze to the sturdy, stay-put belt that keeps your hands free during training. Our custom-designed hinges ensure the pouch stays securely closed when not in use, preventing spills or accidental access. Plus, the stainless steel frame not only adds durability but also resists rust, ensuring your pouch stands the test of time. With minimal maintenance required, this is a product built to last. Finally, its slim, sleek profile makes it super comfortable to wear without feeling bulky or cumbersome. We’ve put care into every feature, and we’re confident you’ll notice the difference from the very first use! ", // truncated
    },
    {
        question: "Which Size Should I Choose? ",
        answer: "Great question! Choosing between the Standard, Large, or Sealable Edition treat pouch depends on more than just the size or breed of your dog. While capacity is an obvious difference, here are a few key features to consider to help you decide: Each pouch is thoughtfully designed to meet different needs. Consider your typical activities, the number of dogs, and your preference for the amount of food or treats you will carry to choose the one that best fits your lifestyle. A convenient accessory to enhance your experience is our Adventure Clip, designed to make it effortless to carry and use multiple pouches at once!  ",
    },
    {
        question: "Can I wash my Ultimate Treat Pouch™ in water?",
        answer: "Yes! Your pouch is dishwasher safe, however for best results, we recommend hand washing. Fill the pouch about halfway with lukewarm water, add a couple drops of dishwasher detergent, close the pouch and swirl it to disperse the liquid evenly. Rinse thoroughly before use. Avoid using harsh chemicals.",
    },
    {
        question: "My New Pouch Feels Stiff and Makes a Slight Grinding Noise When Opening and Closing. Is This Normal?",
        answer: "Yes, this is completely normal! The custom-designed spring in your pouch may require a short “break-in” period. During this time, the metal contact points at the hinges adjust to ensure smooth and seamless operation. In most cases, this minor stiffness and noise resolve naturally after a bit of regular use. If the pouch still feels “sticky” or doesn’t open and close smoothly after some time, simply apply a couple of drops of the oil provided with your pouch to the hinges. This should quickly improve functionality. If you continue to experience issues, don’t hesitate to reach out to us—we’re always happy to help.",
    },
    {
        question: "What is your Limited Lifetime Warranty policy?",
        answer: "Our Ultimate Treat Pouch is designed with the strictest quality standards. With normal usage and proper care, our products are meant to last many years. We are committed to offering excellent service —which is why we offer a non-transferable Lifetime Warranty to the person who originally made the purchase. If your pouch or accessory becomes damaged as a result of manufacturing error, or if defects appear due to substandard materials, we’ll gladly repair or replace it free of charge*. Punctures, rips, and excessive wear and tear due to improper usage or care are not covered. Must provide proof of purchase from authorized retailer or VoilaPets.com. Products purchased from unauthorized marketplaces such as Amazon, eBay, or other resale platforms may be considered counterfeit, defective, stolen, or otherwise fraudulent merchandise and therefore are not covered under the warranty.",
    },
    {
        question: "How do I submit a warranty claim?",
        answer: "We accept returns and exchanges within 30 days of delivery. Items must be in their original packaging, unused, and in salable condition—free from damage, marks, stains, or pet fur. Returns must be shipped out within the 30-day window to qualify for a refund. International returns are not accepted. Refunds are issued to the original payment method within 5-7 business days after we receive and inspect your return, with return shipping costs deducted from the refund. Exchanges are offered within the same 30-day period and are subject to availability; if the requested item is unavailable, we will process your return as a refund. To initiate the return process, please Contact Us and enter your order information.",
    },




]
function AdditionalInformation() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };



    return (
        <>
            <section className="relative bg-[#D8E2DC]  py-20 px-8 group overflow-hidden">





            


                    <div  >
                        <p className='uppercase text-3xl text-center font-bold pb-10   text-[#4B4D51]'>Additional Information</p>



                        <div className='rounded-md bg-[#F5FCF8] px-6'>

                            {faqItems.map((item, index) => (
                                <div key={index} className="border-b overflow-hidden">
                                    <p
                                        onClick={() => toggleContent(index)}
                                        className="flex gap-2 items-center w-full py-6 text-left cursor-pointer focus:outline-none"
                                    >
                                        <span
                                            className={`text-[#838789] transition-transform duration-600 ${activeIndex === index ? 'rotate-90' : 'rotate-0'
                                                }`}
                                        >
                                            {activeIndex === index ? <CloseIcon /> : <AddIcon />}
                                        </span>
                                        <span className="text-[17px] text-[#53565A] font-semibold">{item.question}</span>
                                    </p>

                                    <div
                                        className={`transition-all duration-600 bg-[#F5FCF8] overflow-hidden px-4 text-[18px] text-[#67696D] ${activeIndex === index ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                                            }`}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>

                            ))}
                        </div>


                    </div>
                

            </section>
        </>
    )
}
export default AdditionalInformation;