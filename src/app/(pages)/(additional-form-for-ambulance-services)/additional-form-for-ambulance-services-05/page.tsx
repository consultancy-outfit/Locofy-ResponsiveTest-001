import { AdditionalFormForAmbulanceServices05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForAmbulanceServices05Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 5: Services You Will Provide`}
			src={AdditionalFormForAmbulanceServices05Image}
			backRoute="/additional-form-for-ambulance-services-1"
		/>
	);
};

export default AdditionalFormForAmbulanceServices05Page;
