import { LocationsRegulatedActivitiesAndServiceTypesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LocationsRegulatedActivitiesAndServiceTypesPage = () => {
  return (
    <CommonPage
      pageTitle={`Locations, regulated activities and service types`}
      src={LocationsRegulatedActivitiesAndServiceTypesImage}
      backRoute="/add-location"
    />
  );
};

export default LocationsRegulatedActivitiesAndServiceTypesPage;
