import Header from "../CoursesOpenPage/components/Header";
import ContactCards from "./components/ContactCards";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  const data = [
    {
      icon: (
        <i className="fa-solid bg-[#e1e1e4] px-3 py-2 rounded-md fa-envelope"></i>
      ),
      text: "support@skill.com",
    },
    {
      icon: (
        <i className="fa-solid bg-[#e1e1e4] px-3 py-2 rounded-md fa-phone"></i>
      ),
      text: "+998 97 125 20 04",
    },
    {
      icon: (
        <i className="fa-solid bg-[#e1e1e4] px-3 py-2 rounded-md fa-location-dot"></i>
      ),
      text: "Tashkent",
    },
    {
      icon: (
        <i className="fa-brands bg-[#e1e1e4] px-3 py-2 rounded-md fa-instagram"></i>
      ),
      text: "Social Profile",
    },
  ];
  return (
    <div className="px-10 xl:px-8 pb-10 md:pb-5 lg:px-6 md:px-4">
      <Header
        title="Contact Us"
        text="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <div className="p-16 xl:p-12 md:p-8  flex justify-between sm:block bg-white rounded-lg">
        <ContactForm />
        <div className="flex flex-col sm:grid sm:grid-cols-2 xs:grid-cols-1 gap-4">
          {data.map((item) => (
            <ContactCards {...item} key={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
