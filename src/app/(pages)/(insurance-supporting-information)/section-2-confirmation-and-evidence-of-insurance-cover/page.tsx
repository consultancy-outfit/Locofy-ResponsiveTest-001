import React from "react";
import { Section2ConfirmationAndEvidenceOfInsuranceCoverImage } from "@/assets";
import { CommonPage } from "@/components";

const Section2ConfirmationAndEvidenceOfInsuranceCoverPage = () => {
	return (
		<CommonPage
			pageTitle={`Section 2: Handling Limitations or Exclusions on Coverage`}
			src={Section2ConfirmationAndEvidenceOfInsuranceCoverImage}
			backRoute="/insurance-supporting-information"
		/>
	);
};

export default Section2ConfirmationAndEvidenceOfInsuranceCoverPage;
