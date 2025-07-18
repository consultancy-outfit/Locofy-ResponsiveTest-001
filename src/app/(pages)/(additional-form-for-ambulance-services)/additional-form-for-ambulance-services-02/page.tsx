import { AdditionalFormForAmbulanceServices02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForAmbulanceServices02Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 2: Existing Provider (if you’re restructuring business and are changing your legal entity)`}
			src={AdditionalFormForAmbulanceServices02Image}
			backRoute="/additional-form-for-ambulance-services-1"
		/>
	);
};

export default AdditionalFormForAmbulanceServices02Page;
