import { AdditionalFormForDentists01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForDentists01Page = () => {
	return (
		<CommonPage
			pageTitle={`Additional form for dentists`}
			src={AdditionalFormForDentists01Image}
			backRoute="/dentist-additional-form"
		/>
	);
};

export default AdditionalFormForDentists01Page;
