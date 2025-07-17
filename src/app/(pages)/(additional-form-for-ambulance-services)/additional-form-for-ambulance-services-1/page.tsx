'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import { AdditionalFormForAmbulanceServices1Image } from "@/assets";
import Tooltip from '@mui/material/Tooltip';
import { Stack, Typography } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const AdditionalFormForAmbulanceServicesPage = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Provider and location details',
			href: '/additional-form-for-ambulance-services-01',
			x: 75.46438746438746,
			y: 286.062678062678,
			width: 410.6666666666667,
			height: 50.89458689458695,
		},
		{
			id: 2,
			title: 'Existing provider (if you\'re restructuring business and are changing your legal entity)',
			href: '/additional-form-for-ambulance-services-02',
			x: 623.0199430199431,
			y: 286.06267806267806,
			width: 1177.5954415954416,
			height: 50.894586894586894,
		},
		{
			id: 3,
			title: 'Sale or Transfer',
			href: '/additional-form-for-ambulance-services-03',
			x: 78.97435897435898,
			y: 787.988603988604,
			width: 231.65811965811966,
			height: 49.13960113960104,
		},
		{
			id: 4,
			title: 'Legal Representative (All Provider)',
			href: '/additional-form-for-ambulance-services-04',
			x: 1133.7207977207977,
			y: 789.7435897435897,
			width: 515.965811965812,
			height: 47.38461538461536,
		},
		{
			id: 5,
			title: 'Services You Will Provide',
			href: '/additional-form-for-ambulance-services-05',
			x: 78.97435897435898,
			y: 1158.2905982905984,
			width: 354.5071225071225,
			height: 50.89458689458684,
		},
		{
			id: 6,
			title: 'Position Statement Letter',
			href: '/additional-form-for-ambulance-services-06',
			x: 75.46438746438747,
			y: 2095.4529914529912,
			width: 370.3019943019943,
			height: 49.13960113960138,
		},
		{
			id: 7,
			title: 'Supporting Documents',
			href: '/additional-form-for-ambulance-services-07',
			x: 600.2051282051282,
			y: 2093.6980056980055,
			width: 324.67236467236467,
			height: 49.13960113960138,
		},
		{
			id: 8,
			title: 'Signature',
			href: '/additional-form-for-ambulance-services-08',
			x: 73.7094017094017,
			y: 2595.6239316239316,
			width: 150.92877492877494,
			height: 49.13960113960093,
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
						router.replace("/additional-form-for-ambulance-services-1");
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
					Additional form for ambulance services
				</Typography>
			</Stack>
			<CheckboxForm onChange={() => { }} />
			<Box sx={{
				position: 'relative',
				width: '100%',
				height: 'auto',
				maxWidth: '1848px',
				margin: '0 auto'
			}}>
				<Image
					src={AdditionalFormForAmbulanceServices1Image}
					alt="Ambulance Services Additional Form"
					width={1848}
					height={3143}
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'contain'
					}}
				/>

				{areas.map((area) => (
					<Tooltip key={area.id} title={area.title} arrow placement="top">
						<Link href={area.href} passHref legacyBehavior>
							<Box
								component="a"
								sx={{
									position: 'absolute',
									left: `${(area.x / 1848) * 100}%`,
									top: `${(area.y / 3143) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 3143) * 100}%`,
									cursor: 'pointer',
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

export default AdditionalFormForAmbulanceServicesPage;

