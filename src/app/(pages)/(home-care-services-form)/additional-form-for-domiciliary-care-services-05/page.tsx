import React from "react";
import { AdditionalFormForDomiciliaryCareServices05Image } from "@/assets";
import { CommonPage } from "@/components";

const AdditionalFormForDomiciliaryCareServices05Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 4: Legal Representative (All Providers)`}
			src={AdditionalFormForDomiciliaryCareServices05Image}
			backRoute="/home-care-domiciliary-care-services-form"
		/>
	);
};

export default AdditionalFormForDomiciliaryCareServices05Page;
