"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "../auth-screen/ModeToggle";
import { Button } from "../../ui/button";

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
