import AuthScreen from "@/components/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/components/components/home/home-screen/HomeScreen";

export default function Home() {
  const user = false;

  return <main>{user ? <HomeScreen /> : <AuthScreen />}</main>;
}
