import pet1 from '../assets/img/pet1.webp';
import pet2 from '../assets/img/pet2.webp';
import freefood from '../assets/img/freefood.webp';
import easyclean from '../assets/img/easyclean.webp';
import spring from '../assets/img/spring.webp';
import spill from '../assets/img/Spill-Proof-Icon-_3.webp';
import belt from '../assets/img/adjustablebelt.avif'

const data = [
  { 
    img: freefood  ,
     des: "Made from tear-resistant, non-toxic, BPA-free,",
     span:"100% food grade silicone"
  },
  
  {
     img: spring,
      des: "prevents unwanted access and spillage",
      span:"Spring-assisted closure"
    },
  {
     img: spill,
      des: "ensures treats stay in the pouch",
      span2:"Spill-proof closure"
      
    },
  {
     img: easyclean, 
     des: "Easy-to-clean",
     span:"stink-proof, antimicrobial material"
     },
  { 
    img: belt,
     des: "belt and clasp",
     span2:"Sturdy and adjustable "
 },
];

const firstThree = data.slice(0, 3);  
const lastTwo = data.slice(3);        

function KeyFeature() {
  return (
    <section className="bg-[#F5FCF8] py-16 px-8">
      <div>
        <p className="uppercase tracking-wider text-3xl text-center font-bold text-[#53565A]">
          Key Features
        </p>

    
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {firstThree.map((item, index) => (
            <div
              key={index}
              className="rounded-md py-12 px-8 flex flex-col justify-center items-center gap-3 bg-[#D2DCD7] text-[#5B565A]"
            >
              <img src={item.img} alt="" className="h-12" />
               <p className="leading-tight text-center text-[18px]"> <span className='font-bold'>{item.span2}</span> {item.des} <span className='font-bold'>{item.span}</span></p>
            </div>
          ))}
        </div>

        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {lastTwo.map((item, index) => (
            <div
              key={index}
              className="rounded-md py-12 px-6 flex flex-col justify-center items-center gap-3 bg-[#D2DCD7] text-[#5B565A]"
            >
              <img src={item.img} alt="" className="h-12" />
                 <p className="text-center text-[18px]"> <span className='font-bold'>{item.span2} </span> {item.des} <span className='font-bold'>{item.span}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeature;
