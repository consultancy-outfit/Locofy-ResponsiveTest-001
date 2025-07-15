"use client";

import { EmployerTrainingPlanToolkitForApprenticeshipsImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import AmendmentComparison from "@/components/amendment-comparison";
import { CheckboxForm } from "@/components/checkbox-form";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import {
  TrainingPlanImage1,
  TrainingPlanImage2,
  TrainingPlanImage3,
} from "@/assets";

const images = [TrainingPlanImage1, TrainingPlanImage2, TrainingPlanImage3];
const EmployerTrainingPlanToolkitForApprenticeshipsPage = () => {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push("/progress-reviews-tracking");
  }, [router]);
  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          mt={{ md: 2, xs: 1 }}
          mb={{ md: 4, sm: 3, xs: 2 }}
        >
          <Image
            src={CommonBackIcon}
            alt="Back"
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
            fontWeight={{ md: 600, xs: 500 }}
            ml={{ md: 2, xs: 1 }}
            sx={{ fontFamily: "inherit" }}
          >
            Apprenticeship Journey / Apprenticeship Documents /
            Employer-Training-Plan-Toolkit-for-Apprenticeships
          </Typography>
        </Stack>
        <Button
          sx={{
            backgroundColor: "#5A5867",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#4A4857",
            },
            cursor: "pointer",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
            padding: { xs: "6px 12px", md: "8px 16px" },
            textTransform: "capitalize",
          }}
          onClick={() => {
            window.open(
              " https://orcalo-my.sharepoint.com/:w:/g/personal/iram_bashir_consultancyoutfit_co_uk/EWmqiu4893pGhsTNp6Cfe7IBYFG6MmSPYXFIbR0obgYm6g?e=7DDoqJ"
            );
          }}
        >
          Reference Document
        </Button>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm />
      </Box>
      <Stack spacing={2} mx="auto">
        <Box sx={{ width: "100%" }}>
          <Image
            src={TrainingPlanImage1}
            alt={`Appendix`}
            width={40}
            height={40}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/diagrams");
          }}
        >
          <Image
            src={TrainingPlanImage2}
            alt={`Appendix `}
            width={40}
            height={40}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>{" "}
        <Box>
          <Image
            src={TrainingPlanImage3}
            alt={`Appendix `}
            width={40}
            height={40}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
      {/* <AmendmentComparison
        pageTitle={`Apprenticeship Journey  / Apprenticeship Documents / Employer-Training-Plan-Toolkit-for-Apprenticeships`}
        src={EmployerTrainingPlanToolkitForApprenticeshipsImage}
        backRoute="/progress-reviews-tracking"
        amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/iram_bashir_consultancyoutfit_co_uk/EWmqiu4893pGhsTNp6Cfe7IBYFG6MmSPYXFIbR0obgYm6g?e=7DDoqJ"
      /> */}
    </Box>
  );
};

export default EmployerTrainingPlanToolkitForApprenticeshipsPage;
