import { Container } from "@/common/components/Container/Container"
import Image from "next/image"
import { useImg } from "./hooks/useImg"
import { Header } from "@/common/components/Header/Header"
// import { Swiper, SwiperSlide } from 'swiper/react';


export const Rooms = () => {

   const img = useImg()

    return(
        <Container>
            <Header>Experience Comfort in Every Room</Header>
            <p className="primary-text mt-10 mb-7 w-[49%]">As soon as you step through our doors, you will be greeted by our friendly and attentive staff. Our rooms and suites are designed with your comfort in mind, featuring modern furnishings and stunning views of the island and the Aegean Sea.</p>
    
        </Container>
    )
}