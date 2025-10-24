import { useState } from 'react';
import faq from '../assets/img/faq.webp';
import faq2 from '../assets/img/faq2.webp';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

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
    {
        question: "When will I receive my refund?",
        answer: "Once we receive your return, please allow 5-7 business days for the refund to process. Refunds will be issued in the original form of payment.",
    },
    {
        question: "Can I trim the belt if it’s too long?",
        answer: "Absolutely! Once you’ve decided on the correct length, we recommend using a sharpie to mark the belt where you plan to cut. Carefully trim the belt with a pair of sharp scissors. Then, lightly seal the cut ends with a lighter to harden the fabric and prevent fraying.",
    },
    {
        question: "Any tips on how I can make it easier to close my Sealable Edition treat pouch so that it’s airtight?",
        answer: "To install the D-ring, follow these steps: ",
    },
    {
        question: "Is the pouch waterproof?",
        answer: "To make sealing your treat pouch easier, apply a small amount of dog-safe cooking oil to the sealing tracks. Simply dab your finger in the oil and run it along the tracks. This will make it much easier to press and seal the pouch! To ensure the pouch is sealed properly, gently squeeze it. If the seal is secure, you’ll notice the air is trapped inside the pouch. ",
    },
    {
        question: "Treats spill out of my pouch when I bend over even when closed, is this normal? ",
        answer: "Our Ultimate Treat Pouches are designed to securely hold even the smallest kibble when closed. However, small crumbs may occasionally fall out if the pouch is turned upside down. To minimize the gap when closed, simply follow the bending instructions in the video below:",
    },
    {
        question: "My treat pouch doesn’t stay open or closes too easily. Can this be fixed? ",
        answer: "The hinge is designed to stay open using friction. If it closes too easily, it could be due to excessive oiling or a faulty spring. Please contact us at support@voilapets.com, and our team will be happy to assist you.",
    },

]
function Faq() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <>
            <section>
                <div className="relative group overflow-hidden">
                    <img
                        src={faq}
                        alt="FAQ"
                        className="w-full object-cover  h-[500px]"
                    />
                    {/* Overlay */}
                    <div className=" py-36 absolute inset-0 bg-black bg-opacity-20  flex flex-col items-center justify-center px-6 text-white text-center">

                        <p className='  text-3xl text-white  font-semibold'>FAQS</p>
                        <p className=' text-sm px-6 text-white lg:text-lg  lg:px-36 py-2'>Welcome to our FAQ page! Here you’ll find answers to some of the most frequently asked questions about our products. Whether you’re curious about our policies, need a little help troubleshooting, or just want to know more about what we offer, you’re in the right place! If you don’t find what you’re looking for, don’t hesitate to reach out to our friendly customer support team—we’re here to help!</p>
                    </div>


                </div>


                <div className='bg-[#F5FCF8] gap-4 py-16 px-8 grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <img src={faq2} alt="" className='rounded-md sticky top-4' />
                    </div>

                    <div className=' '>
                        <p className='uppercase text-3xl font-bold text-[#4B4D51]'>General Questions</p>
                        <p className='py-4 text-lg text-[#4B4D51]'>Find answers to common questions or get in touch with us for more information!</p>
                        {faqItems.map((item, index) => (
                            <div key={index} className="border rounded mt-4 overflow-hidden">
                                <button
                                    onClick={() => toggleContent(index)}
                                    className="flex justify-between items-center w-full bg-white px-4 py-3 text-left text-black focus:outline-none"
                                >
                                    <span className="text-[17px] text-[#53565A] font-medium" >{item.question}</span>
                                    <span>{activeIndex === index ? <CloseIcon /> : <AddIcon />}</span>
                                </button>

                                <div
                                    className={`transition-all bg-white duration-400 overflow-hidden px-4 text-[18px]   text-[#67696D] ${activeIndex === index ? ' py-2 opacity-100' : 'max-h-0 opacity-0'
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
export default Faq;