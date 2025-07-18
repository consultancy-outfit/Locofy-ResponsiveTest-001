import React from "react";
import { AdditionalFormForDomiciliaryCareServices02Image } from "@/assets";
import { CommonPage } from "@/components";

const AdditionalFormForDomiciliaryCareServices02Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Service provider details`}
			src={AdditionalFormForDomiciliaryCareServices02Image}
			backRoute="/home-care-domiciliary-care-services-form"
		/>
	);
};

export default AdditionalFormForDomiciliaryCareServices02Page;
