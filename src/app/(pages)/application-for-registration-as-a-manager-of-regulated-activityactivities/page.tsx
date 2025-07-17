"use client";
import React from "react";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import { ApplicationRegistrationAsAManager } from "@/assets";

const ApplicationForRegistrationAsAManager = () => {
  const links = [
    {
      href: "/section-1-applicant-provider-details",
      title: "Section 1: Applicant & Provider Details",
      position: {
        left: "44.82%",
        top: "24.93%",
        width: "29.15%",
        height: "0.73%",
      },
    },
    {
      href: "/applicant-details",
      title: "Applicant Details",
      position: {
        left: "4.46%",
        top: "27.9%",
        width: "13.58%",
        height: "0.66%",
      },
    },
    {
      href: "/alternative-correspondence-addressoptional",
      title: "Alternative Correspondence Address(Optional)",
      position: {
        left: "4.56%",
        top: "32.85%",
        width: "35.42%",
        height: "0.76%",
      },
    },
    {
      href: "/service-provider-s-details-section1",
      title: "Service Provider's Details",
      position: {
        left: "44.82%",
        top: "32.81%",
        width: "20.99%",
        height: "0.83%",
      },
    },
    {
      href: "/location-details",
      title: "Location Details",
      position: {
        left: "4.27%",
        top: "37.93%",
        width: "13.39%",
        height: "0.83%",
      },
    },
    {
      href: "/managing-multiple-locations",
      title: "Managing Multiple Locations",
      position: {
        left: "4.46%",
        top: "43.29%",
        width: "22.51%",
        height: "0.93%",
      },
    },
    {
      href: "/disclosure-and-barring-service-dbs",
      title: "Disclosure and Barring Service (DBS)",
      position: {
        left: "44.54%",
        top: "43.32%",
        width: "28.3%",
        height: "0.83%",
      },
    },
    {
      href: "/schedule-3-required-documents-checklist",
      title: "Schedule 3 Required Documents (Checklist)",
      position: {
        left: "4.46%",
        top: "48.51%",
        width: "32.19%",
        height: "0.76%",
      },
    },
    {
      href: "/history-as-a-registered-person-have-you-been-registered-under",
      title: "History as a Registered Person (Have you been registered under)",
      position: {
        left: "4.56%",
        top: "53.93%",
        width: "48.34%",
        height: "0.73%",
      },
    },
    {
      href: "/employment-history-section3",
      title: "Employment History",
      position: {
        left: "4.37%",
        top: "62.3%",
        width: "16.24%",
        height: "0.9%",
      },
    },
    {
      href: "/medical-history-section3",
      title: "Medical History",
      position: {
        left: "45.2%",
        top: "62.37%",
        width: "12.06%",
        height: "0.8%",
      },
    },
    {
      href: "/refusals-or-cancellations",
      title: "Refusals or Cancellations",
      position: {
        left: "4.75%",
        top: "67.52%",
        width: "19.85%",
        height: "0.83%",
      },
    },
    {
      href: "/gp-details-section3",
      title: "GP Details",
      position: {
        left: "37.8%",
        top: "67.7%",
        width: "8.45%",
        height: "0.62%",
      },
    },
    {
      href: "/qualifications-skills-experience-section1",
      title: "Qualifications, Skills & Experience",
      position: {
        left: "70.56%",
        top: "67.52%",
        width: "20.8%",
        height: "0.86%",
      },
    },
    {
      href: "/declarations-by-a-health-or-social-care-professional-section1",
      title: "Declarations by a Health or Social Care Professional",
      position: {
        left: "4.94%",
        top: "72.75%",
        width: "39.89%",
        height: "0.8%",
      },
    },
    {
      href: "/safeguarding-dbs-bars-or-investigations",
      title: "Safeguarding, DBS Bars, or Investigations",
      position: { left: "53.94%", top: "72.71%", width: "32%", height: "0.9%" },
    },
    {
      href: "/referee-details",
      title: "Referee Details",
      position: {
        left: "4.94%",
        top: "77.83%",
        width: "12.06%",
        height: "0.93%",
      },
    },
    {
      href: "/supporting-notes-2",
      title: "Supporting Notes",
      position: {
        left: "62.39%",
        top: "77.79%",
        width: "14.81%",
        height: "0.9%",
      },
    },
    {
      href: "/section-2-final-declaration",
      title: "Section 2: Final Declaration",
      position: {
        left: "39.13%",
        top: "83.46%",
        width: "21.18%",
        height: "0.93%",
      },
    },
    {
      href: "/submission-instructions-checklist-include",
      title: "Submission Instructions (Checklist include)",
      position: {
        left: "4.27%",
        top: "90.58%",
        width: "32.1%",
        height: "0.73%",
      },
    },
  ];
  const router = useRouter();
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
            router.replace("/manager-registration");
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
          Application for registration as a manager of regulated
          activity/activities
        </Typography>
      </Stack>
      <CheckboxForm onChange={() => {}} />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          maxWidth: "1864px",
          margin: "0 auto",
        }}
      >
        <Image
          src={ApplicationRegistrationAsAManager}
          alt="Manager registration form"
          width={1864}
          height={5120}
          style={{ width: "100%", height: "auto" }}
        />

        {links.map((link, index) => (
          <NextLink key={index} href={link.href} passHref legacyBehavior>
            <MuiLink
              component="a"
              title={link.title}
              sx={{
                position: "absolute",
                left: link.position.left,
                top: link.position.top,
                width: link.position.width,
                height: link.position.height,
                cursor: "pointer",
                "&:hover": {
                  outline: "2px solid white",
                  opacity: 0.2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "&:focus": {
                  outline: "2px solid #1976d2",
                  opacity: 0.3,
                },
              }}
              aria-label={link.title}
            />
          </NextLink>
        ))}
      </Box>
    </Stack>
  );
};
export default ApplicationForRegistrationAsAManager;
