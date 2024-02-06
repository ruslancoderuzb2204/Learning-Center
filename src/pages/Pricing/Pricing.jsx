import Header from "../CoursesOpenPage/components/Header";
import OurPricingCard from "../Home/Containers/OurPricingCard";
import Questions from "../Home/components/Questions";

const Pricing = () => {
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
      <Header
        title="Our Pricings"
        text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 md:gap-5 p-10 lg:p-6">
        <OurPricingCard
          title="Free Plan"
          freePlanTrue={freePlanTrue}
          freePlanFalse={freePlanFalse}
          price="0"
        />
        <OurPricingCard
          title="Pro Plan"
          freePlanTrue={freePlanTrue}
          freePlanFalse={freePlanFalse}
          price="79"
        />
      </div>
      <Questions />
    </div>
  );
};

export default Pricing;
