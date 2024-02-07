import Header from "../CoursesOpenPage/components/Header";
import AboutCard from "./containers/AboutCard";
import Join from "./containers/Join";

const About = () => {
  const data = [
    {
      title: "Achievements",
      text: "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
      innerData: [
        {
          icon: <i className="fa-solid text-[#FF9500] fa-crown"></i>,

          subTitle: "Trusted by Thousands",
          subtext:
            "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
        },
        {
          icon: <i className="fa-solid text-[#FF9500] fa-medal"></i>,

          subTitle: "Award-Winning Courses",
          subtext:
            "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
        },
        {
          icon: <i className="fa-solid text-[#FF9500] fa-masks-theater"></i>,

          subTitle: "Positive Student Feedback",
          subtext:
            "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
        },
        {
          icon: <i className="fa-solid text-[#FF9500] fa-bolt "></i>,

          subTitle: "Industry Partnerships",
          subtext:
            "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
        },
      ],
    },
    {
      title: "Our Goals",
      text: "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to",
      innerData: [
        {
          icon: <i className="fa-solid text-[#FF9500] fa-suitcase-rolling"></i>,
          subTitle: "Provide Practical Skills",
          subtext:
            "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
        },
        {
          icon: <i className="fa-solid text-[#FF9500] fa-book"></i>,

          subTitle: "Foster Creative Problem-Solving",
          subtext:
            "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
        },
        {
          icon: <i className="fa-solid text-[#FF9500] fa-puzzle-piece"></i>,

          subTitle: "Promote Collaboration and Community",
          subtext:
            "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
        },
        {
          icon: <i className="fa-solid text-[#FF9500] fa-monument"></i>,

          subTitle: "Stay Ahead of the Curve",
          subtext:
            "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologiesThe digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
        },
      ],
    },
  ];
  return (
    <div className="px-10 xl:px-8 pb-10 md:pb-5 lg:px-6 md:px-4">
      <Header
        title="About Skillbridge"
        text="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      {data.map((item) => (
        <AboutCard key={item.title} {...item} />
      ))}
      <Join />
    </div>
  );
};

export default About;
