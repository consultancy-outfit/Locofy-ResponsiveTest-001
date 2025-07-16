import { DentistAdditionalFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DentistAdditionalFormPage = () => {
	return (
		<CommonPage
			pageTitle={`Dentist Additional Form`}
			src={DentistAdditionalFormImage}
			backRoute="/dentist-additional-form"
		/>
	);
};

export default DentistAdditionalFormPage;
