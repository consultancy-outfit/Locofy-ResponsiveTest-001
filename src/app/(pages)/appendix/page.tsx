import FourPageCommon from "@/components/four-page-common";
import { Appendixone, AppendixTwo, AppendixThree, AppendixFour } from "@/assets"; 

const images = [Appendixone, AppendixTwo, AppendixThree, AppendixFour];
const routes = ["/table-1-expectations-for-word-reading-entry-levels-1-to-4", "/table-2-entry-level-1-expectations-for-reading-and-spelling", "/table-3-entry-level-2-expectations-for-reading-and-spelling", "/table-4-entry-level-3-expectations-for-reading-and-spelling"];

export default function AppendixPage() {
  return (
<<<<<<< HEAD
    <CommonPage
      pageTitle={`Apprenticeships / Funding Rules / Apprenticeship funding rules 2024_to_2025 / Appendix`}
      src={AppendixImage}
      backRoute="/functional-skills-english-conditions-and-requirements"
=======
    <FourPageCommon
      src={images}
      pageTitle="Apprenticeships / Funding Rules / Apprenticeship funding rules 2024_to_2025 / Appendix"
      imageLinks={routes}
>>>>>>> 6e0960e788247654a58d8341ed22a7708fe9df9e
    />
  );
}
