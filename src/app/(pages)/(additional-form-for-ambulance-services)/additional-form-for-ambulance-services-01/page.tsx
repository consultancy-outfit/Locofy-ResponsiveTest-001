import { AdditionalFormForAmbulanceServices01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForAmbulanceServices01Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Provider and location details`}
			src={AdditionalFormForAmbulanceServices01Image}
			backRoute="/additional-form-for-ambulance-services-1"
		/>
	);
};

export default AdditionalFormForAmbulanceServices01Page;
