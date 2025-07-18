import { Section8SignatureImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section8SignaturePage = () => {
	return (
		<CommonPage
			pageTitle={`Section 8 : Signature`}
			src={Section8SignatureImage}
			backRoute="/adult-social-care-1"
		/>
	);
};

export default Section8SignaturePage;
