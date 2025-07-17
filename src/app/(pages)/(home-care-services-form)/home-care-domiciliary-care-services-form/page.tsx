
'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";
import { HomeCareDomiciliaryCareServicesFormImage } from "@/assets";

const HomeCareDomiciliaryCareServicesFormPage = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Service provider details',
			href: '/additional-form-for-domiciliary-care-services-02',
			x: 75.46438746438746,
			y: 291.32763532763533,
			width: 338.7122507122507,
			height: 47.38461538461536,
		},
		{
			id: 2,
			title: 'Existing Provider (if you’re restructuring business and are changing your legal entity)',
			href: '/additional-form-for-domiciliary-care-services-03',
			x: 623.0199430199431,
			y: 293.0826210826211,
			width: 1172.330484330484,
			height: 43.87464387464388,
		},
		{
			id: 3,
			title: 'Sale or Transfer',
			href: '/additional-form-for-domiciliary-care-services-04',
			x: 77.21937321937322,
			y: 795.008547008547,
			width: 231.6581196581197,
			height: 40.3646723646724,
		},
		{
			id: 4,
			title: 'Legal Representative (All Providers)',
			href: '/additional-form-for-domiciliary-care-services-05',
			x: 1133.7207977207977,
			y: 791.4985754985755,
			width: 517.7207977207977,
			height: 47.38461538461536,
		},
		{
			id: 5,
			title: 'Services You Will Provide',
			href: '/additional-form-for-domiciliary-care-services-06',
			x: 75.46438746438747,
			y: 1160.045584045584,
			width: 358.017094017094,
			height: 47.38461538461547,
		},
		{
			id: 6,
			title: 'Supporting Documents',
			href: '/additional-form-for-domiciliary-care-services-07',
			x: 91.25925925925925,
			y: 2097.2079772079774,
			width: 326.42735042735046,
			height: 42.11965811965774,
		},
		{
			id: 7,
			title: 'Position Statement Letter',
			href: '/additional-form-for-domiciliary-care-services-08',
			x: 89.5042735042735,
			y: 2804.4672364672365,
			width: 365.03703703703707,
			height: 43.87464387464388,
		},
		{
			id: 8,
			title: 'Signature',
			href: '/additional-form-for-domiciliary-care-services-09',
			x: 645.8347578347579,
			y: 2802.712250712251,
			width: 149.17378917378915,
			height: 47.384615384615245,
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
					Home Care (Domiciliary Care) Services Form
				</Typography>
			</Stack>
			<CheckboxForm onChange={() => { }} />
			<Box sx={{
				position: 'relative',
				width: '100%',
				maxWidth: '1848px',
				margin: '0 auto',
				height: 'auto',
				overflow: 'hidden'
			}}>
				{/* Replace with your actual image path */}
				<Image
					src={HomeCareDomiciliaryCareServicesFormImage}
					alt="Home Care Services Form"
					width={1848}
					height={3346}
					priority
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'contain'
					}}
				/>

				{areas.map((area) => (
					<Tooltip
						key={area.id}
						title={area.title}
						arrow
						placement="top"
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: 'common.black',
									'& .MuiTooltip-arrow': {
										color: 'common.black',
									},
									maxWidth: 400,
									fontSize: '0.875rem',
									padding: '8px 12px'
								}
							}
						}}
					>
						<Link href={area.href} passHref legacyBehavior>
							<Box
								component="a"
								sx={{
									position: 'absolute',
									left: `${(area.x / 1848) * 100}%`,
									top: `${(area.y / 3346) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 3346) * 100}%`,
									cursor: 'pointer',
									transition: 'all 0.2s ease',
									textDecoration: 'none'
								}}
							/>
						</Link>
					</Tooltip>
				))}
			</Box>
		</Stack>
	);
};

export default HomeCareDomiciliaryCareServicesFormPage;






// import { CommonPage } from "@/components";
// import React from "react";

// const HomeCareDomiciliaryCareServicesFormPage = () => {
// 	return (
// 		<CommonPage
// 			pageTitle={`Home Care (Domiciliary Care) Services Form`}
// 			src={HomeCareDomiciliaryCareServicesFormImage}
// 			backRoute="/home-care-domiciliary-care-services-form"
// 		/>
// 	);
// };

// export default HomeCareDomiciliaryCareServicesFormPage;
