import React from "react";
import { AdditionalFormForDomiciliaryCareServices01Image } from "@/assets";
import { CommonPage } from "@/components";

const AdditionalFormForDomiciliaryCareServices01Page = () => {
	return (
		<CommonPage
			pageTitle={`Additional form for domiciliary care services`}
			src={AdditionalFormForDomiciliaryCareServices01Image}
			backRoute="/home-care-domiciliary-care-services-form"
		/>
	);
};

export default AdditionalFormForDomiciliaryCareServices01Page;
