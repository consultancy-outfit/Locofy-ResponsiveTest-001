"use client";
import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { AddPartnerDiagram } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
}
const AddAPartnerPage: React.FC = () => {
  const router = useRouter();
  const imageWidth = 1848;
  const imageHeight = 4661;
  const imageSrc = AddPartnerDiagram; // Update this path to your actual image location

  // Define all the clickable areas
  const areas: ImageMapArea[] = [
    {
      x: 107.05413105413106,
      y: 856.4330484330485,
      width: 293.082621082621,
      height: 29.834757834757852,
      href: "/partnership-details",
      title: "Partnership Details",
    },
    {
      x: 1009.1168091168091,
      y: 847.6581196581196,
      width: 307.12250712250705,
      height: 43.87464387464388,
      href: "/main-contact-partner",
      title: "Main Contact Partner",
    },
    {
      x: 110.56410256410254,
      y: 1309.2193732193734,
      width: 370.30199430199434,
      height: 29.834757834757966,
      href: "/name-and-contact-details",
      title: "Name and Contact Details",
    },
    {
      x: 1007.3618233618236,
      y: 1303.9544159544157,
      width: 422.95156695156675,
      height: 43.87464387464388,
      href: "/previous-registration-history",
      title: "Previous Registration History",
    },
    {
      x: 103.54415954415948,
      y: 1623.361823361823,
      width: 305.36752136752136,
      height: 29.834757834757966,
      href: "/employment-history",
      title: "Employment History",
    },
    {
      x: 1003.8518518518516,
      y: 1618.0968660968665,
      width: 391.3618233618232,
      height: 36.854700854700695,
      href: "/refusals-and-cancellations",
      title: "Refusals and Cancellations",
    },
    {
      x: 114.07407407407405,
      y: 1930.4843304843305,
      width: 384.34188034188037,
      height: 36.854700854700695,
      href: "/bankruptcyadministration",
      title: "Bankruptcy /Administration",
    },
    {
      x: 1002.096866096866,
      y: 1930.4843304843305,
      width: 222.883190883191,
      height: 35.09971509971501,
      href: "/medical-history",
      title: "Medical History",
    },
    {
      x: 117.58404558404557,
      y: 2242.871794871795,
      width: 157.94871794871796,
      height: 33.34472934472933,
      href: "/gp-details",
      title: "GP Details",
    },
    {
      x: 1003.8518518518518,
      y: 2244.6267806267806,
      width: 396.6267806267807,
      height: 31.589743589743648,
      href: "/qualifications-experience",
      title: "Qualifications & Experience",
    },
    {
      x: 112.31908831908832,
      y: 2551.7492877492878,
      width: 368.54700854700855,
      height: 40.364672364672515,
      href: "/professional-declarations",
      title: "Professional Declarations",
    },
    {
      x: 1010.8717948717949,
      y: 2548.2393162393164,
      width: 400.1367521367522,
      height: 45.62962962962956,
      href: "/declarations-by-all-partners",
      title: "Declarations by all partners",
    },
    {
      x: 122.84900284900284,
      y: 2853.6068376068374,
      width: 171.98860398860398,
      height: 33.34472934472933,
      href: "/dbs-details",
      title: "DBS Details",
    },
    {
      x: 1014.3817663817664,
      y: 2848.3418803418804,
      width: 242.18803418803407,
      height: 33.34472934472933,
      href: "/referee-contact",
      title: "Referee Contact",
    },
    {
      x: 119.33903133903134,
      y: 3141.4245014245016,
      width: 259.73789173789174,
      height: 38.60968660968638,
      href: "/partner-s-signature",
      title: "Partner Signature",
    },
    {
      x: 103.54415954415954,
      y: 3539.806267806268,
      width: 370.30199430199434,
      height: 47.384615384615245,
      href: "/partner-s-role-and-impact",
      title: "Partner's Role and Impact",
    },
    {
      x: 701.994301994302,
      y: 3541.5612535612536,
      width: 365.03703703703707,
      height: 42.1196581196582,
      href: "/documentation-checklist",
      title: "Documentation Checklist",
    },
    {
      x: 1295.179487179487,
      y: 3552.091168091168,
      width: 261.49287749287737,
      height: 35.09971509971501,
      href: "/supporting-notes",
      title: "Supporting Notes",
    },
    {
      x: 87.74928774928775,
      y: 3850.4387464387464,
      width: 182.51851851851853,
      height: 38.60968660968683,
      href: "/declaration",
      title: "Declaration",
    },
    {
      x: 93.01424501424502,
      y: 4168.091168091168,
      width: 170.2336182336182,
      height: 43.87464387464388,
      href: "/submission",
      title: "submission",
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
            router.replace("/new-provider-application-breakdown");
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
          Add a Partner{" "}
        </Typography>
      </Stack>
      <CheckboxForm onChange={() => {}} />

      <Box
        sx={{ position: "relative", width: "100%", height: "auto", m: "auto" }}
      >
        {/* Image */}
        <Image
          src={imageSrc}
          alt="Add a partner form"
          width={imageWidth}
          height={imageHeight}
          style={{ width: "100%", height: "auto" }}
        />

        {/* Clickable areas */}
        {areas.map((area, index) => (
          <Link
            key={index}
            href={area.href}
            target="_parent"
            title={area.title}
            sx={{
              position: "absolute",
              left: `${(area.x / imageWidth) * 100}%`,
              top: `${(area.y / imageHeight) * 100}%`,
              width: `${(area.width / imageWidth) * 100}%`,
              height: `${(area.height / imageHeight) * 100}%`,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "2px solid white",
              },
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AddAPartnerPage;
