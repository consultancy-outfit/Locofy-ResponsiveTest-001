"use client";

import { requestSectionHdn1 } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import { Box } from "@mui/material";
// import Image from "next/image";
// import { useCallback } from "react";
// import { useRouter } from "next/navigation";
// import { CommonBackIcon } from "@/assets/common-assets";
// import { CheckboxForm } from "@/components/checkbox-form";
// import { ApoListing } from "@/assets";

const areas = [
  {
    alt: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5443-50&t=RhCX5ntCmQuSkreU-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    title: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5443-50&t=RhCX5ntCmQuSkreU-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5443-50&t=RhCX5ntCmQuSkreU-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "273,623,763,717",
    shape: "rect",
  },
  {
    alt: "Conducts initial assessments",
    title: "Conducts initial assessments",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5539-188&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "471,906,1084,1000",
    shape: "rect",
  },
  {
    alt: "DAS Guidance",
    title: "DAS Guidance",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5390-2&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "893,1166,1179,1278",
    shape: "rect",
  },
  {
    alt: "Funding Rules",
    title: "Funding Rules",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5489-224&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "2837,1281,3159,1411",
    shape: "rect",
  },
  {
    alt: "signs Levy/Non-Levy Agreement",
    title: "signs Levy/Non-Levy Agreement",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5454-69&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "854,1596,1456,1694",
    shape: "rect",
  },
  {
    alt: "Training Plan",
    title: "Training Plan",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5482-2439&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "122,1847,426,1983",
    shape: "rect",
  },
  {
    alt: "Appoints End-Point Assessment Organisation",
    title: "Appoints End-Point Assessment Organisation",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5462-628&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "1441,2553,2217,2685",
    shape: "rect",
  },
  {
    alt: "Closes learner record",
    title: "Closes learner record",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5427-496&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "1152,3417,1610,3526",
    shape: "rect",
  },
  {
    alt: "Conducts final funding audits",
    title: "Conducts final funding audits",
    href: "https://www.figma.com/proto/NBRxXeeWyXuQvkDtN3MSOf/LARS?node-id=5489-224&t=kJ6CHlI8zCva2l9I-0&scaling=min-zoom&content-scaling=fixed&page-id=5385%3A3786",
    coords: "",
    shape: "rect",
  },
];



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

  return (
    <>



      <CommonImgMapPage
        image={requestSectionHdn1}
        backRoute="/"
        areas={areas}
        pageTitle=""
        amendmentButtonRoute1="Apprenticeships Overview"
        amendmentButtonRoute2="Apprenticeships Breakdown"
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
    </>
  );
}
