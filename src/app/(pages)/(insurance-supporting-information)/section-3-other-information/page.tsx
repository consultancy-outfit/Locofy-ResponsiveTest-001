import React from "react";
import { Section3OtherInformationImage } from "@/assets";
import { CommonPage } from "@/components";

const Section3OtherInformationPage = () => {
	return (
		<CommonPage
			pageTitle={`Section 3: Other Information`}
			src={Section3OtherInformationImage}
			backRoute="/insurance-supporting-information"
		/>
	);
};

export default Section3OtherInformationPage;
