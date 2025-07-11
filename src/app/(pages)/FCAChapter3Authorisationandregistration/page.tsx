"use client";
import { FCAChapter3Authorisationandregistrationup1, FCAChapter3Authorisationandregistrationup2, FcaOverviewImage, GovernanceInternalControlRiskManagement, InitialCapitalRequirements, LocationofOfficesandBusinessActivities, ProfessionalIndemnityInsurancePII, SafeguardingMeasuresforUsersFunds, StructuralOrganisationandCloseLinks } from "@/assets";
import MultiImagesNoBtn from "@/components/multi-images-no-btn";
import { Box } from "@mui/material";

const ElectronicsPage = () => {
  const handleCheckboxChange = (selectedValue: string, page: string) => {
    console.log(`Selected: ${selectedValue} on page: ${page}`);
  };

  // const imagesData =

  return (
    <Box>
      <MultiImagesNoBtn
        backRoute="/productsds"
        pageTitle="Electronics Products"
        images={[
          { src: FCAChapter3Authorisationandregistrationup1, alt: "Modern TV", route: "/FCAChapter3Authorisationandregistration" },
          { src: StructuralOrganisationandCloseLinks, alt: "Modern TV", route: "/authorisation-and-registration" },
          { src: InitialCapitalRequirements, alt: "Modern TV", route: "/authorisation-and-registration" },
          { src: LocationofOfficesandBusinessActivities, alt: "Modern TV", route: "/authorisation-and-registration" },
          { src: ProfessionalIndemnityInsurancePII, alt: "Modern TV", route: "/authorisation-and-registration" },
          { src: FCAChapter3Authorisationandregistrationup2, alt: "Modern TV", route: "/FCAChapter3Authorisationandregistration" },

        ]}
        onChange={handleCheckboxChange}
      />
    </Box>
  );
};

export default ElectronicsPage;