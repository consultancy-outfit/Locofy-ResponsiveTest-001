import React from "react";
import { AdditionalFormForDomiciliaryCareServices06Image } from "@/assets";
import { CommonPage } from "@/components";

const AdditionalFormForDomiciliaryCareServices06Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 5: Services You Will Provide`}
			src={AdditionalFormForDomiciliaryCareServices06Image}
			backRoute="/home-care-domiciliary-care-services-form"
		/>
	);
};

export default AdditionalFormForDomiciliaryCareServices06Page;
