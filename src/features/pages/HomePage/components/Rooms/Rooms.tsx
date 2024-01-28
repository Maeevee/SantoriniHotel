import { Container } from "@/common/components/Container/Container"
import Image from "next/image"
import { useImg } from "./hooks/useImg"
// import { Swiper, SwiperSlide } from 'swiper/react';


export const Rooms = () => {

   const img = useImg()

    return(
        <Container>
            <h2 className="text-5xl">Experience Comfort in Every Room</h2>
            <p className="text-xl mt-10 mb-7">As soon as you step through our doors, you will be greeted by our friendly and attentive staff. Our rooms and suites are designed with your comfort in mind, featuring modern furnishings and stunning views of the island and the Aegean Sea.</p>
            
        </Container>
    )
}