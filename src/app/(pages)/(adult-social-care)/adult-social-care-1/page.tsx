'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { AdultSocialCare1Image } from "@/assets";
import { Stack } from '@mui/material';
import { CheckboxForm } from '@/components/checkbox-form';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from "next/navigation";

const AdultSocialCare1Page = () => {
	const router = useRouter();
	const areas = [
		{
			id: 1,
			title: 'Service Provider Details',
			href: '/section-1-adult-service-provider-details',
			x: 73.7094017094017,
			y: 286.06267806267806,
			width: 350.99715099715104,
			height: 54.40455840455843,
		},
		{
			id: 2,
			title: 'Existing Provider (for restructuring or creating a new legal entity)',
			href: '/section-2-existing-provider-for-restructuring-or-creating-a-new-legal-entity',
			x: 624.7749287749288,
			y: 287.8176638176638,
			width: 917.8575498575498,
			height: 49.139601139601155,
		},
		{
			id: 3,
			title: 'Sale or Transfer',
			href: '/section-3-sale-or-transfer',
			x: 75.46438746438747,
			y: 786.2336182336182,
			width: 235.16809116809117,
			height: 54.40455840455843,
		},
		{
			id: 4,
			title: 'Legal Representative (All Providers)',
			href: '/section-4-legal-representative-all-providers',
			x: 1135.4757834757834,
			y: 787.988603988604,
			width: 507.19088319088337,
			height: 54.404558404558315,
		},
		{
			id: 5,
			title: 'Services You Will Provide',
			href: '/section-5-service-you-will-provide',
			x: 73.7094017094017,
			y: 1161.8005698005697,
			width: 366.79202279202275,
			height: 43.87464387464388,
		},
		{
			id: 6,
			title: 'Position Statement Letter',
			href: '/section-6-position-statement-letter',
			x: 77.21937321937321,
			y: 2202.5071225071224,
			width: 366.7920227920228,
			height: 47.3846153846157,
		},
		{
			id: 7,
			title: 'Supporting Documents',
			href: '/section-7-supporting-documents',
			x: 600.2051282051282,
			y: 2200.7521367521367,
			width: 328.18233618233626,
			height: 43.87464387464388,
		},
		{
			id: 8,
			title: 'Signature',
			href: '/section-8-signature',
			x: 73.7094017094017,
			y: 2704.4330484330485,
			width: 154.43874643874645,
			height: 47.3846153846157,
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
					Adult Social Care
				</Typography>
			</Stack>
			<CheckboxForm onChange={() => { }} />
			<Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
				<Image
					src={AdultSocialCare1Image}
					alt="Adult Social Care Additional Form"
					width={1848}
					height={3248}
					layout="responsive"
				/>

				{areas.map((area) => (
					<Tooltip key={area.id} title={area.title} arrow>
						<Link href={area.href} passHref legacyBehavior>
							<Box
								component="a"
								sx={{
									position: 'absolute',
									left: `${(area.x / 1848) * 100}%`,
									top: `${(area.y / 3248) * 100}%`,
									width: `${(area.width / 1848) * 100}%`,
									height: `${(area.height / 3248) * 100}%`,
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

export default AdultSocialCare1Page;