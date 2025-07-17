import React from "react";
import { AdditionalFormForDomiciliaryCareServices03Image } from "@/assets";
import { CommonPage } from "@/components";

const AdditionalFormForDomiciliaryCareServices03Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 2: Existing Provider (if you’re restructuring business and are changing your legal entity)`}
			src={AdditionalFormForDomiciliaryCareServices03Image}
			backRoute="/home-care-domiciliary-care-services-form"
		/>
	);
};

export default AdditionalFormForDomiciliaryCareServices03Page;
