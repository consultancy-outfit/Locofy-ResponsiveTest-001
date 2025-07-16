import { AdditionalFormForDentists02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForDentists02Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Service provider details`}
			src={AdditionalFormForDentists02Image}
			backRoute="/dentist-additional-form"
		/>
	);
};

export default AdditionalFormForDentists02Page;
