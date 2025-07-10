"use client";

import { EnglandApprenticeshipCertificsteExampleImage } from "@/assets";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

const EnglandApprenticeshipCertificsteExamplePage = () => {
  const pageTitle = `Apprenticeship Journey / Apprenticeship Documents / England_apprenticeship certificate example`;
  const backRoute = "/gateway-completion-evaluation";
  const certificateRoute = "/certificate";
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const onCertificateButtonClick = useCallback(() => {
    router.push(certificateRoute);
  }, [router, certificateRoute]);

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
        {/* Right Section: Button */}
        <Box ml={{ md: "auto" }}>
          <Button
            variant="contained"
            onClick={onCertificateButtonClick}
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
            Reference Image
          </Button>
        </Box>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm />
      </Box>
      <Image
        src={EnglandApprenticeshipCertificsteExampleImage}
        alt={pageTitle}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default EnglandApprenticeshipCertificsteExamplePage;
