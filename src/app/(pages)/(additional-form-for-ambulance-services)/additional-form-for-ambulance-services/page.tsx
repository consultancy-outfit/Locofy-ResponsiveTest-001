import { AdditionalFormForAmbulanceServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForAmbulanceServicesPage = () => {
	return (
		<CommonPage
			pageTitle={`Additional form for ambulance services`}
			src={AdditionalFormForAmbulanceServicesImage}
			backRoute="/additional-form-for-ambulance-services-1"
		/>
	);
};

export default AdditionalFormForAmbulanceServicesPage;
