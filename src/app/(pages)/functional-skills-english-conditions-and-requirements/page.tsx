"use client";
import {
  img1FunctionalSkillsEnglishConditionsAndRequirementsImage,
  img2FunctionalSkillsEnglishConditionsAndRequirementsImage,
  img3FunctionalSkillsEnglishConditionsAndRequirementsImage,
  img4FunctionalSkillsEnglishConditionsAndRequirementsImage,
} from "@/assets";
import { MultiBackIcon } from "@/assets/common-assets";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const FunctionalSkillsEnglishConditionsAndRequirementsPageData = [
  {
    key: "functional-1",
    link: "/introduction-functional-skills-mathematics-conditions-and-requirements",
    icon: img1FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Introduction",
  },
  {
    key: "functional-2",
    link: "/subject-level-conditions-functional-skills-mathematics-conditions-and-requirements",
    icon: img2FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Subject Level Conditions",
  },
  {
    key: "functional-3",
    link: "/functionalskils-math",
    icon: img3FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Requirements for Functional Skills  qualifications in Mathematics",
  },
  {
    key: "functional-4",
    link: "/functional-skills-math",
    icon: img4FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title:
      "Appendix 1: subject content (published by the  Department for Education)",
  },
];

const FunctionalSkillsEnglishConditionsAndRequirementsPage = () => {
  const pageTitle = "Functional Skills English Conditions and Requirements";
  const backRoute = "/functional-skills-support";
  const background = "#e7f0ff";
  const fontSize = { xs: "20px", sm: "30px", md: "40px" };
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 5, sm: 3, xs: 2 }}
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Image
            src={MultiBackIcon}
            alt={pageTitle}
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#0246BC"
            fontSize={fontSize}
            fontWeight={{ md: 600, xs: 500 }}
            ml={{ md: 2, xs: 1 }}
            sx={{
              fontFamily: "inherit",
            }}
          >
            {pageTitle}
          </Typography>
        </Box>
        <Button
          variant="text"
          onClick={() => {
            window.open(
              "https://orcalo-my.sharepoint.com/personal/shanulhaq_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fshanulhaq%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FFunctional%5FSkills%5FMathematics%5FConditions%5Fand%5FRequirements%5F2024%2Epdf&parent=%2Fpersonal%2Fshanulhaq%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1",
              "_blank"
            );
          }}
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
          Reference Document
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {!!FunctionalSkillsEnglishConditionsAndRequirementsPageData.length &&
          FunctionalSkillsEnglishConditionsAndRequirementsPageData.map(
            (item) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={item.key}>
                <Card
                  onClick={() => {
                    if (item.link) {
                      router.push(item.link);
                    }
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: background,
                    cursor: item.link ? "pointer" : "default",
                    borderRadius: 6,
                    textAlign: "center",
                    boxShadow: "none",
                    p: 4,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title ?? item.key}
                    width={200}
                    height={200}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="#3571b0"
                      fontSize={{ xs: "1.2rem", sm: "18px", md: "32px" }}
                      fontWeight={{ md: 600, xs: 500 }}
                      sx={{
                        fontFamily: "inherit",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
      </Grid>
    </Box>
  );
};

export default FunctionalSkillsEnglishConditionsAndRequirementsPage;
