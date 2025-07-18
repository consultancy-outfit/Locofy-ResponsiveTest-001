import { Section1AdultServiceProviderDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section1AdultServiceProviderDetailsPage = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Adult Service Provider Details`}
			src={Section1AdultServiceProviderDetailsImage}
			backRoute="/adult-social-care-1"
		/>
	);
};

export default Section1AdultServiceProviderDetailsPage;
