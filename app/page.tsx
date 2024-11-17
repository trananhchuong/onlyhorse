import AuthScreen from "@/components/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/components/components/home/home-screen/HomeScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Only horses",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
};

export default function Home() {
  const user = false;

  return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>;
}
