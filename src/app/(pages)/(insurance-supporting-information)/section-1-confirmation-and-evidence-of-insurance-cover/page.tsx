import React from "react";
import { Section1ConfirmationAndEvidenceOfInsuranceCoverImage } from "@/assets";
import { CommonPage } from "@/components";

const Section1ConfirmationAndEvidenceOfInsuranceCoverPage = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Confirmation and Evidence of Insurance Cover`}
			src={Section1ConfirmationAndEvidenceOfInsuranceCoverImage}
			backRoute="/insurance-supporting-information"
		/>
	);
};

export default Section1ConfirmationAndEvidenceOfInsuranceCoverPage;
