import { Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesPage =
  () => {
    return (
      <AmendmentComparison
        pageTitle={`SC1 - Application for registration as a new provider of regulated activities`}
        src={
          Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesImage
        }
        backRoute="/new-provider-application-breakdown"
      />
    );
  };

export default Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesPage;
