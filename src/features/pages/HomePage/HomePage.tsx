"use client"

import { Banner } from "./components/Banner/Banner"
import { EnjoySection } from "./components/EnjoySection/EnjoySection"
import { RelaxSection } from "./components/RelaxSection/RelaxSection"
import { Restoraunt } from "./components/Restoraunt/Restoraunt"
import { Rooms } from "./components/Rooms/Rooms"

export const HomePage = () => {
    return(
        <>
            <Banner/>
            <EnjoySection/>
            <Rooms/>
            <Restoraunt/>
            <RelaxSection/>
        </>
    )
}