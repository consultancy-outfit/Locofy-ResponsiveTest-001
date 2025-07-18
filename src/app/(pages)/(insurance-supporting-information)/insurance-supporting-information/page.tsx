'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { InsuranceSupportingInformationImage } from "@/assets";
import { Stack, Typography } from '@mui/material';
import { CommonBackIcon } from '@/assets/common-assets';
import { CheckboxForm } from '@/components/checkbox-form';
import { useRouter } from 'next/navigation';

const InsuranceSupportingInformationPage = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Confirmation and Evidence of Insurance Cover',
			href: '/section-1-confirmation-and-evidence-of-insurance-cover',
			x: 77.21937321937322,
			y: 294.8376068376068,
			width: 666.894586894587,
			height: 38.60968660968666,
		},
		{
			id: 2,
			title: 'Handling Limitations or Exclusions on Coverage',
			href: '/section-2-confirmation-and-evidence-of-insurance-cover',
			x: 73.70940170940166,
			y: 1295.1794871794873,
			width: 666.8945868945871,
			height: 42.11965811965797,
		},
		{
			id: 3,
			title: 'Other Information',
			href: '/section-3-other-information',
			x: 75.46438746438747,
			y: 1823.4301994301995,
			width: 275.5327635327635,
			height: 43.87464387464388,
		},
	];

	return (
		<Stack px={5} py={3} gap={2}>
			<Stack
				flexDirection={"row"}
				alignItems={"center"}
				mt={{ md: 2, xs: 1 }}
				mb={{ md: 4, sm: 3, xs: 2 }}
			>
				<Image
					src={CommonBackIcon}
					alt={"backIcon"}
					width={40}
					height={40}
					onClick={() => {
						router.replace("/specific-type-of-services");
					}}
					style={{ cursor: "pointer" }}
				/>
				<Typography
					variant="h5"
					color="#5A5867"
					fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
					fontWeight={{ md: 600, xs: 500 }}
					ml={{ md: 2, xs: 1 }}
					sx={{
						fontFamily: "inherit",
					}}
				>
					Insurance Supporting Information
				</Typography>
			</Stack>
			<CheckboxForm onChange={() => { }} />
			<Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
				{/* Replace with your actual image path */}
				<Image
					src={InsuranceSupportingInformationImage}
					alt="Insurance Supporting Information Form"
					width={1848}
					height={2500}
					style={{ width: '100%', height: 'auto' }}
				/>

				{areas.map((area) => (
					<Tooltip key={area.id} title={area.title} arrow>
						<Link href={area.href} passHref legacyBehavior>
							<Box
								component="a"
								sx={{
									position: 'absolute',
									left: `${(area.x / 1848) * 100}%`,
									top: `${(area.y / 2500) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 2500) * 100}%`,
									'&:hover': {
										border: '2px solid white',
										opacity: 0.2,
										backgroundColor: 'rgba(255, 255, 255, 0.2)',
									},
								}}
							/>
						</Link>
					</Tooltip>
				))}
			</Box>
		</Stack>
	);
};

export default InsuranceSupportingInformationPage;







// import { InsuranceSupportingInformationImage } from "@/assets";
// import { CommonPage } from "@/components";
// import React from "react";

// const InsuranceSupportingInformationPage = () => {
// 	return (
// 		<CommonPage
// 			pageTitle={`Insurance Supporting Information`}
// 			src={InsuranceSupportingInformationImage}
// 			backRoute="/insurance-supporting-information"
// 		/>
// 	);
// };

// export default InsuranceSupportingInformationPage;
