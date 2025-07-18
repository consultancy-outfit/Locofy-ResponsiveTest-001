"use client";
import React from "react";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import { ApplicationContinueAsAManager } from "@/assets";

const ApplicationToContinueRegistrationAsAManager = () => {
  const router = useRouter();
  const links = [
    {
      href: "/eligibility-criteria",
      title: "Eligibility Criteria",
      position: {
        left: "4.65%",
        top: "14.53%",
        width: "13.67%",
        height: "0.88%",
      },
    },
    {
      href: "/provider-definitions-manager-responsibilities-legal-basis-health-and-social-care-act",
      title: "Provider Definitions",
      position: {
        left: "3.99%",
        top: "22.25%",
        width: "16.43%",
        height: "1.03%",
      },
    },
    {
      href: "/provider-definitions-manager-responsibilities-legal-basis-health-and-social-care-act",
      title: "Legal Basis (Health and Social Care Act)",
      position: {
        left: "4.37%",
        top: "30.19%",
        width: "30.77%",
        height: "0.96%",
      },
    },
    {
      href: "/provider-definitions-manager-responsibilities-legal-basis-health-and-social-care-act",
      title: "Manager Responsibilities (Self-managed registration)",
      position: {
        left: "5.03%",
        top: "35.6%",
        width: "40.74%",
        height: "0.88%",
      },
    },
    {
      href: "/form-completion-rules-submit-with-provider-app",
      title: "Form Completion Rules",
      position: {
        left: "4.56%",
        top: "41.12%",
        width: "18.14%",
        height: "0.88%",
      },
    },
    {
      href: "/form-completion-rules-submit-with-provider-app",
      title: "Submit with Provider App",
      position: {
        left: "4.56%",
        top: "46.45%",
        width: "19.94%",
        height: "0.99%",
      },
    },
    {
      href: "/section-1-application-details",
      title: "Application Details",
      position: {
        left: "11.49%",
        top: "52.11%",
        width: "18.8%",
        height: "0.81%",
      },
    },
    {
      href: "/section-2-regulated-activities-and-locations",
      title: "Activities & Locations",
      position: {
        left: "11.97%",
        top: "64.72%",
        width: "16.62%",
        height: "0.92%",
      },
    },
    {
      href: "/section-3-additional-information",
      title: "Additional Information",
      position: {
        left: "11.78%",
        top: "77.52%",
        width: "18.04%",
        height: "0.88%",
      },
    },
    {
      href: "/section-4-application-declaration",
      title: "Declaration (4.1 Legal declaration)",
      position: {
        left: "11.97%",
        top: "90.14%",
        width: "26.21%",
        height: "0.96%",
      },
    },
    {
      href: "/how-to-submit-this-application-and-accompanying-documents-section1",
      title: "Submission Instructions (Submit form with)",
      position: {
        left: "65.91%",
        top: "90.1%",
        width: "32.19%",
        height: "1.07%",
      },
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
          Application to continue registration as a manager under a new provide
        </Typography>
      </Stack>
      <CheckboxForm onChange={() => {}} />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          maxWidth: "1848px",
          margin: "0 auto",
          "& a": {
            transition: "all 0.2s ease-in-out",
          },
        }}
      >
        <Image
          src={ApplicationContinueAsAManager}
          alt="Section 2 Form"
          width={1848}
          height={4776}
          style={{ width: "100%", height: "auto" }}
          priority={true} // Optional: if this is above the fold
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
                  outline: "2px solid rgba(255, 255, 255, 0.7)",
                  opacity: 0.2,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
                "&:focus-visible": {
                  outline: "3px solid #1976d2",
                  opacity: 0.3,
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
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
export default ApplicationToContinueRegistrationAsAManager;
