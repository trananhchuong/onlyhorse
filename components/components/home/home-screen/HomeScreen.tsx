"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../auth-screen/ModeToggle";

const HomeScreen = () => {
  return (
    <div>
      <LogoutLink>
        <Button variant={"outline"}>Logout</Button>
      </LogoutLink>
      <ModeToggle />
    </div>
  );
};
export default HomeScreen;
