import Header from "../../../components/innerHeader";
import OurPricingCard from "../Containers/OurPricingCard";

const OurPricing = () => {
  const freePlanTrue = [
    "Access to selected free courses.",
    "Limited course materials and resources.",
    "Basic community support.",
    "No certification upon completion.",
    "Ad-supported platform.",
  ];
  const freePlanFalse = [
    "Access to exclusive Pro Plan community forums.",
    "Early access to new courses and updates.",
  ];
  return (
    <div>
      <Header title="Our Pricing" />
      <div className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-10 md:gap-5 p-10 lg:p-6">
          <OurPricingCard
            title="Free Plan"
            freePlanTrue={freePlanTrue}
            freePlanFalse={freePlanFalse}
            price="0"
          />
          <OurPricingCard
            title="Free Plan"
            freePlanTrue={freePlanTrue}
            freePlanFalse={freePlanFalse}
            price="0"
          />
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
