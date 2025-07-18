import React from 'react'
import { fcaAnnexes } from '@/assets'
import CommonImgMapPage from '@/components/common-img-map-page'

const areas = [
    {
        alt: "Electronic Money Regulations 2011",
        title: "Electronic Money Regulations 2011",
        href: "https://www.legislation.gov.uk/uksi/2011/99/contents/made",
        coords: "100,394,378,428",
        shape: "rect",
    },
    {
        alt: "Payment Services Directive 2",
        title: "Payment Services Directive 2",
        href: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32015L2366",
        coords: "760,390,1011,426",
        shape: "rect",
    },
    {
        alt: "Payment Services Regulations 2017",
        title: "Payment Services Regulations 2017",
        href: "https://www.legislation.gov.uk/uksi/2017/752/pdfs/uksi_20170752_en.pdf",
        coords: "1390,389,1681,429",
        shape: "rect",
    },
    {
        alt: "Glossary",
        title: "Glossary",
        href: "https://www.handbook.fca.org.uk/handbook/glossary/",
        coords: "113,783,396,900",
        shape: "rect",
    },
    {
        alt: "General Provisions (GEN)",
        title: "General Provisions (GEN)",
        href: "https://www.handbook.fca.org.uk/handbook/GEN/2/",
        coords: "512,784,819,900",
        shape: "rect",
    },
    {
        alt: "Fees manual (FEES",
        title: "Fees manual (FEES",
        href: "https://www.handbook.fca.org.uk/handbook/FEES/",
        coords: "935,782,1246,900",
        shape: "rect",
    },
    {
        alt: "Banking: Conduct of Business sourcebook (BCOBS",
        title: "Banking: Conduct of Business sourcebook (BCOBS",
        href: "https://www.handbook.fca.org.uk/handbook/BCOBS/",
        coords: "1344,795,1762,900",
        shape: "rect",
    },
    {
        alt: "Supervision manual (SUP)",
        title: "Supervision manual (SUP)",
        href: "https://www.handbook.fca.org.uk/handbook/SUP/9/",
        coords: "136,997,528,1100",
        shape: "rect",
    },
    {
        alt: "Decision Procedure and Penalties Manual ",
        title: "Decision Procedure and Penalties Manual ",
        href: "https://www.handbook.fca.org.uk/handbook/DEPP/",
        coords: "685,990,1067,1100",
        shape: "rect",
    },
    {
        alt: "Dispute Resolution: Complaints sourcebook (DISP)",
        title: "Dispute Resolution: Complaints sourcebook (DISP)",
        href: "https://www.handbook.fca.org.uk/handbook/DISP/",
        coords: "1238,993,1682,1100",
        shape: "rect",
    },
    {
        alt: "Enforcement Guide (EG)",
        title: "Enforcement Guide (EG)",
        href: "https://www.handbook.fca.org.uk/handbook/EG/1/%3Fview%3Dchapter",
        coords: "66,1324,368,1470",
        shape: "rect",
    },
    {
        alt: "Financial Crime _ a guide for firms",
        title: "Financial Crime _ a guide for firms",
        href: "https://www.handbook.fca.org.uk/handbook/FC/",
        coords: "474,1327,793,1470",
        shape: "rect",
    },
    {
        alt: "Perimeter Guidance manual (PERG) –",
        title: "Perimeter Guidance manual (PERG) –",
        href: "https://www.handbook.fca.org.uk/handbook/PERG/",
        coords: "913,1327,1237,1470",
        shape: "rect",
    },
    {
        alt: "Unfair Contract Terms Regulatory Guide",
        title: "Unfair Contract Terms Regulatory Guide",
        href: "https://www.handbook.fca.org.uk/handbook/UNFCOG/",
        coords: "1346,1327,1743,1470",
        shape: "rect",
    },
    {
        alt: "Information",
        title: "Information",
        href: "https://www.fca.org.uk/consumers/how-complain",
        coords: "87,1699,394,1850",
        shape: "rect",
    },
    {
        alt: "Information about how to complain about the FCA, PRA or the Bank of England.",
        title: "Information about how to complain about the FCA, PRA or the Bank of England.",
        href: "https://www.fca.org.uk/about/how-we-operate/complain-about-regulators",
        coords: "495,1704,822,1850",
        shape: "rect",
    },
    {
        alt: "Information about the Financial Ombudsman Service’s processes for handling complaints.",
        title: "Information about the Financial Ombudsman Service’s processes for handling complaints.",
        href: "https://www.financial-ombudsman.org.uk/",
        coords: "926,1701,1271,1850",
        shape: "rect",
    },
    {
        alt: "Information from the Financial Ombudsman Service specifically for smaller businesses.",
        title: "Information from the Financial Ombudsman Service specifically for smaller businesses.",
        href: "https://www.financial-ombudsman.org.uk/",
        coords: "1379,1703,1730,1850",
        shape: "rect",
    },
    {
        alt: "Dispute Resolution: Complaints sourcebook (DISP)",
        title: "Dispute Resolution: Complaints sourcebook (DISP)",
        href: "https://www.handbook.fca.org.uk/handbook/DISP/",
        coords: "197,1987,507,2150",
        shape: "rect",
    },
    {
        alt: "GABRIEL is our regulatory reporting system for the collection, validation and storage of regulatory data.",
        title: "GABRIEL is our regulatory reporting system for the collection, validation and storage of regulatory data.",
        href: "https://www.fca.org.uk/firms/regdata",
        coords: "807,1970,1230,2150",
        shape: "rect",
    },
    {
        alt: "Connect is our online system that you can use to submit applications and notifications.",
        title: "Connect is our online system that you can use to submit applications and notifications.",
        href: "https://www.fca.org.uk/firms/connect",
        coords: "1367,1972,1736,2150",
        shape: "rect",
    },
    {
        alt: "Information from HMRC about compliance with the MLR.",
        title: "Information from HMRC about compliance with the MLR.",
        href: "https://www.gov.uk/government/collections/anti-money-laundering-supervision-detailed-information",
        coords: "318,2292,584,2429",
        shape: "rect",
    },
    {
        alt: "Information from the ICO about compliance with the GDPR. ",
        title: "Information from the ICO about compliance with the GDPR. ",
        href: "https://ico.org.uk/for-organisations/data-protection-reform/overview-of-the-gdpr/",
        coords: "1201,2350,1465,2429",
        shape: "rect",
    },
];

const FcsAnnexes = () => {
    return (
        <CommonImgMapPage
            backRoute="/payment-services-and-electronic-money-our-approach"
            pageTitle="FCA Application / FCA Guide to Payment Services and Electronic Money Regulation  / Annexes"
            image={fcaAnnexes}
            areas={areas}
            amendmentButtonTitle1="Glossary of Terms"
            amendmentButtonTitle2="Annex Figures"
            amendmentButtonTitle3="Acronyms & Abbreviations"
            amendmentButtonRoute1="/glossary-of-terms"
            amendmentButtonRoute2="/annex-figures"
            amendmentButtonRoute3="/acronyms-and-abbreviations"
        />
    )
}

export default FcsAnnexes