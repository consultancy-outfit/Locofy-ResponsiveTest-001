import { Section7SupportingDocumentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section7SupportingDocumentsPage = () => {
	return (
		<CommonPage
			pageTitle={`Section 7: Supporting Documents`}
			src={Section7SupportingDocumentsImage}
			backRoute="/adult-social-care-1"
		/>
	);
};

export default Section7SupportingDocumentsPage;
