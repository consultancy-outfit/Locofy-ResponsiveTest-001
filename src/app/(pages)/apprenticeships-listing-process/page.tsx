"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { ApoListing } from "@/assets";

export default function ApprenticeshipsListingProcessPage() {
  const router = useRouter();
  const pageTitle = `Apprenticeships / Apprenticeships Listing Process`;
  const backRoute = "/apprenticeshipjourney-1";
  const relevantDiagramsRoute = "/apprenticeship-documents";
  const amendmentComparisonRoute = "/overview-of-apprenticeship-delivery-process";

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const onRelevantDiagramsClick = useCallback(() => {
    router.push(relevantDiagramsRoute);
  }, [router, relevantDiagramsRoute]);

  const onAmendmentButtonClick = useCallback(() => {
    router.push(amendmentComparisonRoute);
  }, [router, amendmentComparisonRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        mt={{ md: 2, xs: 4 }}
        mb={{ md: 4, sm: 3, xs: 4 }}
        gap={{ xs: 2, md: 0 }}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
          <Image
            src={CommonBackIcon}
            alt={pageTitle}
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
            {pageTitle}
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "stretch", md: "center" }}
        justifyContent="space-between"
        spacing={2}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Box flex={1}>
          <CheckboxForm />
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          ml={{ md: "auto" }}
        >
          <Button
            variant="contained"
            onClick={onRelevantDiagramsClick}
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
          >
           Apprenticeships Breakdown
          </Button>
          <Button
            variant="contained"
            onClick={onAmendmentButtonClick}
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
          >
           Apprenticeships Overview 
          </Button>
        </Box>
      </Stack>
      <Image
        src={ApoListing}
        alt={pageTitle}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
}
