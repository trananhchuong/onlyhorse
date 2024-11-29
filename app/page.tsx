import AuthScreen from "@/app/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/app/components/home/home-screen/HomeScreen";
import { Metadata } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata: Metadata = {
  title: "Only horses",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
};

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>;
}
