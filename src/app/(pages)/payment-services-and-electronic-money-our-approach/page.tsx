"use client";

import {
  paymentService1,
  paymentService10,
  paymentService11,
  paymentService12,
  paymentService13,
  paymentService14,
  paymentService15,
  paymentService16,
  paymentService17,
  paymentService18,
  paymentService19,
  paymentService2,
  paymentService20,
  paymentService21,
  paymentService3,
  paymentService4,
  paymentService5,
  paymentService6,
  paymentService7,
  paymentService8,
  paymentService9,
} from "@/assets";
import MultiPathTextTitlePage from "@/components/multi-path-page-text-title";

const PaymentServicePageData = [
  {
    key: "e-1",
    link: "/chapter-1-introduction-section1",
    icon: paymentService1,
    title: "Ch 1: Introduction",
  },
  {
    key: "e-2",
    link: "/chapter-2-scope",
    icon: paymentService2,
    title: "Ch 2: Scope",
  },
  {
    key: "e-3",
    link: "/FCAChapter3Authorisationandregistration",
    icon: paymentService3,
    title: "Ch 3: Authorisation and registration",
  },
  {
    key: "e-4",
    link: "/chapter-4-changes-in-circumstances-of-authorisation-or-registration",
    icon: paymentService4,
    title: "Ch 4: Changes in circumstances of Authorisation or registration",
  },
  {
    key: "e-5",
    link: "/chapter-5-appointment-of-agents-and-use-of-distributors",
    icon: paymentService5,
    title: "Ch 5: Appointment of agents and use of distributors",
  },
  {
    key: "e-6",
    link: "/chapter-6-temporary-permission-scheme",
    icon: paymentService6,
    title: "Ch 6: Temporary permission scheme",
  },
  {
    key: "e-7",
    link: "/chapter-7-status-disclosure-and-use-of-the-fca-logo",
    icon: paymentService7,
    title: "Ch 7: Status disclosure and use of the FCA logo",
  },
  {
    key: "e-8",
    link: "/chapter-8-conduct-of-business-requirements",
    icon: paymentService8,
    title: "Ch 8: Conduct of business requirements",
  },
  {
    key: "e-9",
    link: "/Chapter9-Capital-resources-and-requirements",
    icon: paymentService9,
    title: "Ch 9: Capital resources and requirements",
  },
  {
    key: "e-10",
    link: "/chapter-10-safeguarding",
    icon: paymentService10,
    title: "Ch 10: Safeguarding",
  },
  {
    key: "e-11",
    link: "/chapter-11-complaints-handling",
    icon: paymentService11,
    title: "Ch 11: Complaints handling",
  },
  {
    key: "e-12",
    link: "/chapter-12-supervision",
    icon: paymentService12,
    title: "Ch 12: Supervision",
  },
  {
    key: "e-13",
    link: "/chapter-13-reporting-and-notifications",
    icon: paymentService13,
    title: "Ch 13: Reporting and notifications",
  },
  {
    key: "e-14",
    link: "/chapter-14-enforcement",
    icon: paymentService14,
    title: "Ch 14: Enforcement",
  },
  {
    key: "e-15",
    link: "/chapter-15-fees",
    icon: paymentService15,
    title: "Ch 15: Fees",
  },
  {
    key: "e-16",
    link: "/chapter-16-payment-service-providers-access-to-payment-account-services",
    icon: paymentService16,
    title:
      "Ch 16: Payment service providers’ access to payment account services",
  },
  {
    key: "e-17",
    link: "/chapter-17-ayment-initiation-ais-and-confirmation-of-availability-of-funds",
    icon: paymentService17,
    title:
      "Ch 17: Payment initiation and account information servicesand confirmation of availability of funds",
  },
  {
    key: "e-18",
    link: "/chapter-18-operational-and-security-risks",
    icon: paymentService18,
    title: "Ch 18: Operational and security risks",
  },
  {
    key: "e-19",
    link: "/chapter-19-financial-crime",
    icon: paymentService19,
    title: "Ch 19: Financial crime",
  },
  {
    key: "e-20",
    link: "/chapter-20-authentication",
    icon: paymentService20,
    title: "Ch 20: Authentication",
  },
  {
    key: "e-21",
    link: "/fcs-annexes",
    icon: paymentService21,
    title: "Annex",
  },
];

const paymentServicesAndElectronicMoneyOurApproach = () => {
  return (
    <MultiPathTextTitlePage
      backRoute="/"
      arrayData={PaymentServicePageData}
      pageTitle="Payment Services & E-Money – Our Approach"
      referenceDoc="Reference Doc"
      referenceDocRoute="https://orcalo-my.sharepoint.com/personal/shanulhaq_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fshanulhaq%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2Ffca%2Dapproach%2Dpayment%2Dservices%2Delectronic%2Dmoney%2D2017%2Epdf&parent=%2Fpersonal%2Fshanulhaq%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
  );
};

export default paymentServicesAndElectronicMoneyOurApproach;
