import { Container } from "@/common/components/Container/Container";
import Image from "next/image"
import photo from "../../../../../../public/images/restoraunt/Rectangle12.png"
import photo2 from "../../../../../../public/images/restoraunt/Rectangle13.png"

export const Restoraunt = () => {
    return(
        <Container>
            <h2 className="uppercase text-5xl mb-16 text-center">Indulge in Greek Flavors and Breathtaking Views at Our Restaurant</h2>
            <div className="grid grid-cols-12 grid-rows-5 gap-3 justify-items-stretch place-items-center">
                <p className="col-span-7 row-span-2 uppercase text-lg leading-5	">At Santorini Breeze Hotel, we believe that dining is an essential part of any vacation experience. That's why we've created an exceptional culinary experience for our guests in our in-house restaurant.</p>
                <Image className="col-start-8  col-span-5 row-start-1 row-end-8 place-self-center" src={photo} alt="" />
                <Image className="col-start-1 col-end-3 row-start-3 row-end-6 place-self-center" src={photo2} alt=""/>
                <p className="col-start-3 col-span-4 row-start-3 row-end-5 text-base leading-5">Our menu features a wide range of options, including fresh seafood, grilled meats, vegetarian options, and delectable desserts. Our wine list is extensive, offering a variety of local and international wines that perfectly complement our dishes.</p>
                <button className="col-start-3 col-span-2 h-7 border-2 rounded-2xl border-solid border-black" type="button">READ MORE</button>
            </div>
        </Container>
    )
}

{/* <Container>
            <h2 className="uppercase text-5xl mb-16">Indulge in Greek Flavors and Breathtaking Views at Our Restaurant</h2>
            <div className="grid grid-cols-12 grid-rows-8 gap-4">
                <p className="col-span-7 row-span-2 uppercase text-lg">At Santorini Breeze Hotel, we believe that dining is an essential part of any vacation experience. That's why we've created an exceptional culinary experience for our guests in our in-house restaurant.</p>
                <Image className="col-start-9 col-end-12 row-start-1 row-end-8" src={photo} alt="" width={300} height={400}/>
                <Image className="col-start-1 col-end-3 row-start-5 row-end-9" src={photo2} alt="" width={300} height={400}/>
                <p className="col-start-3 col-span-4 row-start-5 row-end-7 text-base">Our menu features a wide range of options, including fresh seafood, grilled meats, vegetarian options, and delectable desserts. Our wine list is extensive, offering a variety of local and international wines that perfectly complement our dishes.</p>
                <button className="col-start-3 col-span-2 row-start-8 row-span-1" type="button">read more</button>
            </div>
        </Container> */}


        // <Container>
        //     <h2 className="uppercase text-5xl mb-16">Indulge in Greek Flavors and Breathtaking Views at Our Restaurant</h2>
        //     <div className="">
        //         <p className=" uppercase text-lg">At Santorini Breeze Hotel, we believe that dining is an essential part of any vacation experience. That's why we've created an exceptional culinary experience for our guests in our in-house restaurant.</p>
        //         <Image className="" src={photo} alt="" width={300} height={400}/>
        //         <Image className="" src={photo2} alt="" width={300} height={400}/>
        //         <p className=" text-base">Our menu features a wide range of options, including fresh seafood, grilled meats, vegetarian options, and delectable desserts. Our wine list is extensive, offering a variety of local and international wines that perfectly complement our dishes.</p>
        //         <button className="" type="button">read more</button>
        //     </div>
        // </Container>