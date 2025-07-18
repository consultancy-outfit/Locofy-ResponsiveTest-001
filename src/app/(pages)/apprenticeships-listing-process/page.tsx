"use client";

import { ApoListin2, ApoListing } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import { Box } from "@mui/material";
// import Image from "next/image";
// import { useCallback } from "react";
// import { useRouter } from "next/navigation";
// import { CommonBackIcon } from "@/assets/common-assets";
// import { CheckboxForm } from "@/components/checkbox-form";
// import { ApoListing } from "@/assets";

export default function ApprenticeshipsListingProcessPage() {
  // const router = useRouter();
  // const pageTitle = `Apprenticeships / Apprenticeships Listing Process`;
  // const backRoute = "/apprenticeshipjourney-1";
  // const relevantDiagramsRoute = "/apprenticeship";
  // const amendmentComparisonRoute =
  //   "/overview-of-apprenticeship-delivery-process";

  // const onBackIconClick = useCallback(() => {
  //   router.push(backRoute);
  // }, [router, backRoute]);

  // const onRelevantDiagramsClick = useCallback(() => {
  //   router.push(relevantDiagramsRoute);
  // }, [router, relevantDiagramsRoute]);

  // const onAmendmentButtonClick = useCallback(() => {
  //   router.push(amendmentComparisonRoute);
  // }, [router, amendmentComparisonRoute]);
const areas = [
  {
    alt: "Provides Application Form",
    title: "Provides Application Form",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5443-50&t=RhCX5ntCmQuSkreU-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "139,339,431,409",
    shape: "rect",
  },
  {
    alt: "Conducts initial assessments",
    title: "Conducts initial assessments",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5539-188&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "280,503,579,562",
    shape: "rect",
  },
  {
    alt: "DAS Guidance",
    title: "DAS Guidance",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5390-2&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "500,651,674,707",
    shape: "rect",
  },
  {
    alt: "Funding Rules",
    title: "Funding Rules",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5489-224&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "1575,705,1757,781",
    shape: "rect",
  },
  {
    alt: "Training Plan",
    title: "Training Plan",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5482-2439&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "75,1027,237,1093",
    shape: "rect",
  },
  {
    alt: "Appoints End-Point Assessment Organisation",
    title: "Appoints End-Point Assessment Organisation",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5462-628&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786&fuid=1218603068772383201",
    coords: "801,1423,1230,1487",
    shape: "rect",
  },
  {
    alt: "Closes learner record",
    title: "Closes learner record",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5427-496&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "651,1906,893,1957",
    shape: "rect",
  },
  {
    alt: "Conducts final funding audite",
    title: "Conducts final funding audite",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5489-224&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "1253,2015,1555,2067",
    shape: "rect",
  },
];


  return (
    <Box>


      <CommonImgMapPage
        image={ApoListing}
        backRoute="/apprenticeshipjourney-1"
        areas={areas}
        target="_blank"
        pageTitle="Apprenticeships / Apprenticeships Listing Process"
        amendmentButtonRoute1="/overview-of-apprenticeship-delivery-process"
        amendmentButtonRoute2="/apprenticeship"
        amendmentButtonTitle1="Apprenticeships Overview"
        amendmentButtonTitle2="Apprenticeships Breakdown"
      />


      {/* <Stack
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
      /> */}
    </Box>
  );
}
