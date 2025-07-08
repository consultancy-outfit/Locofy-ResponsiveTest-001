"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import {
  GuidanceDocumentRedimg1,
  GuidanceDocumentRedimg3,
  GuidanceDocumentRedimg4,
} from "@/assets";

const images = [
  GuidanceDocumentRedimg1,
  GuidanceDocumentRedimg3,
  GuidanceDocumentRedimg4,
];
const routes = [
  "/guidance-document-for-level-2-3-Guidance-document",
  "/guidance-document-witness-testimony-example-1",
  "/guidance-document-witness-testimony-example-2",
  "/guidance-document-witness-testimony-example-3",
];

export default function GuidanceDocumentPage() {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push("/portfolio-assessment-evidence-cards");
  }, [router]);

  const handleImageClick = (idx: number) => {
    if (routes[idx]) router.push(routes[idx]);
  };

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
            Apprenticeship Journey / Apprenticeship Documents / Guidance
            document for Level 2-3 Hospitality Practical Assessment Witness
            Testimony
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
              "https://orcalo-my.sharepoint.com/personal/saqib_hussain_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents%2Fguidance%2Ddocument%2Dfor%2Dwitness%2Dtestimony%2Dpdf%2Epdf&parent=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents&ga=1",
              "_blank"
            );
          }}
        >
          Reference Document
        </Button>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm />
      </Box>

      <Stack direction={{ xs: "column" }} spacing={2}>
        {images.map((img, idx) => (
          <Box
            key={idx}
            sx={{ flex: 1, cursor: "pointer" }}
            onClick={() => handleImageClick(idx)}
          >
            <Image
              src={img}
              alt={`Appendix ${idx + 1}`}
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
