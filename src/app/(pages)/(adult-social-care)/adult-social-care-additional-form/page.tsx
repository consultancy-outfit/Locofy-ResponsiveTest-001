import { AdultSocialCareAdditionalFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdultSocialCareAdditionalFormPage = () => {
	return (
		<CommonPage
			pageTitle={`Adult Social Care Additional Form`}
			src={AdultSocialCareAdditionalFormImage}
			backRoute="/adult-social-care-1"
		/>
	);
};

export default AdultSocialCareAdditionalFormPage;
