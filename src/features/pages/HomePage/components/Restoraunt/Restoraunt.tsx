import { Container } from "@/common/components/Container/Container";
import Image from "next/image"
import photo from "../../../../../../public/images/restoraunt/Rectangle12.png"
import photo2 from "../../../../../../public/images/restoraunt/Rectangle13.png"
import { Header } from "@/common/components/Header/Header";

export const Restoraunt = () => {
    return(
        <Container>
            <Header className="mb-12 text-left"><span className="block ml-[24.5%]">Indulge in Greek Flavors</span>and Breathtaking Views at Our Restaurant</Header>
            <div className="grid grid-cols-24 grid-rows-8">
                <p className="col-start-1 col-span-10 w-[95%] row-span-2 primary-text justify-self-start self-start mt-1">At Santorini Breeze Hotel, we believe that dining is an essential part of any vacation experience. Thats why weve created an exceptional culinary experience for our guests in our in-house restaurant.</p>
                <Image className="col-start-15  col-span-10 row-start-1 row-span-8 place-self-center" src={photo} alt="" />
                <Image className="col-start-1 col-span-4 row-start-5 row-span-4 self-end" src={photo2} alt=""/>
                <p className="col-start-5 col-span-7 row-start-5 row-span-3 secondary-text w-[90%] ml-[15px]  self-center">Our menu features a wide range of options, including fresh seafood, grilled meats, vegetarian options, and delectable desserts. Our wine list is extensive, offering a variety of local and international wines that perfectly complement our dishes.</p>
                <button className="col-start-5 col-span-4 row-start-8 row-span-1 secondary-btn ml-[15px] self-end" type="button">READ MORE</button>
            </div>
        </Container>
    )
}