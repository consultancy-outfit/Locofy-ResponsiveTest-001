import { AuthorisationAndRegistrationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";
 
const AuthorisationAndRegistrationPage = () => {
  return (
    <CommonPage
      pageTitle={`Diagram of Close Links`}
      src={AuthorisationAndRegistrationImage}
      backRoute="/umer-demo"
    />
  );
};
 
export default AuthorisationAndRegistrationPage;
