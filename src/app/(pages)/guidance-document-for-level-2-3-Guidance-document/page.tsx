"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { GuidanceDocumentRedimg1, GuidanceDocumentRedimg2, GuidanceDocumentRedimg3, GuidanceDocumentRedimg4 } from "@/assets";

const images = [GuidanceDocumentRedimg1, GuidanceDocumentRedimg2, GuidanceDocumentRedimg3, GuidanceDocumentRedimg4];
const routes = [
  "/table-1-expectations-for-word-reading-entry-levels-1-to-4",
  "/table-2-entry-level-1-expectations-for-reading-and-spelling",
  "/table-3-entry-level-2-expectations-for-reading-and-spelling",
  "/table-4-entry-level-3-expectations-for-reading-and-spelling"
];

export default function GuidanceDocumentPage() {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleImageClick = (idx: number) => {
    if (routes[idx]) router.push(routes[idx]);
  };

  return (
    <Box p={{ md: 3, xs: 2 }}>
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
          Apprenticeships / Funding Rules / Apprenticeship funding rules 2024_to_2025 / Appendix
        </Typography>
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
