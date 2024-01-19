import { Metadata } from "next";
import { HomePage } from "@/features/pages/HomePage/HomePage";

export const metadata:Metadata = {
  title: "Santorini Breeze", 
  description: "Santorini description*"
}

export default async function RootPage() {
  return <HomePage/>
}