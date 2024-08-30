import { AdvantageCardProps } from "../components/subComponents/services/cards/AdvantageCard";
import { BenefitCardProps } from "../components/subComponents/services/cards/BenefitCard";
import { SolutionCardProps } from "../components/subComponents/services/cards/SolutionCard";

type offeringProps = {
  title: string;
  desc: string;
};

type acceleratorProps = {
  cover: string;
  title: string;
  desc?: string;
};

export type dataProps = {
  id: number;
  cover: string;
  title: string;
  shortDesc?: string;
  longDesc?: {
    cover?: string;
    desc?: string;
  };
  offering?: offeringProps[];
  advantages?: AdvantageCardProps[];
  benefits?: BenefitCardProps[];
  accelerator?: {
    card1: acceleratorProps;
    card2?: acceleratorProps;
    card3?: acceleratorProps;
    card4?: acceleratorProps;
    card5?: acceleratorProps;
  };
  solutions?: SolutionCardProps[];
};

export const data: dataProps[] = [
  {
    id: 1,
    cover: "/services/8.jpeg",
    title: "Digital Application Services",
    shortDesc:
      "Modern applications and products engineered for scalability and robust security.",
    longDesc: {
      cover: "",
      desc: "With the recent advancements in technology, the business landscape has dramatically transformed. At QuantumSync, we excel in equipping businesses to effectively navigate these changes, ensuring they stay competitive with cutting-edge and relevant offerings. In an era where customers and stakeholders expect seamless, anytime, anywhere experiences, there is an increasing demand for unique, rigorously tested, and future-proof solutions. QuantumSync is here to assist businesses in adopting a digital-first mindset and accelerating their product engineering processes, which enhances digital engagement and interaction. Digital product engineering is crucial not only for delivering outstanding experiences but also acts as a driving force behind digital transformation within enterprises. It speeds up innovation and the cycles of product development. The shift to remote work during the pandemic, along with the growth in online commerce and consumer behavior, has significantly accelerated investment in this area, making our services more vital than ever.",
    },
    offering: [
      {
        title: "Digital Application Services",
        desc: "In today’s rapidly evolving digital landscape, organizational agility and efficiency are key, yet often hindered by outdated applications or an application estate that's not optimized for adaptability. Many organizations recognize that streamlining operations and enhancing profitability can be achieved by aligning their applications with their strategic transformation goals. IT plays an essential role in this transformation. At QuantumSync, our digital application services are designed to optimize everyday operations and adapt applications to meet evolving customer demands. Our tailored application management approach, infused with lean methodologies, allows for a high degree of customization and the swift, seamless introduction of new business models. Leveraging our deep industry and technological expertise, we offer scalable and comprehensive digital application services. These include Architecture Planning, Technology Integration, Process Strategy and Evaluation, Application Portfolio Rationalization, Initial Product Development (Product Sprint 0), and both Mobile and Web Development solutions.",
      },
      {
        title: "ui/ux services",
        desc: "As the number of innovative products and applications continues to rise, UI/UX teams at QuantumSync recognize the need to make a strong impact to stand out from the competition. Prioritizing intuitive, seamless, and consistent user experiences is crucial, and understanding the customer at every stage of their lifecycle—from consideration to evaluation—is key to staying ahead. Investment in customer research and cutting-edge technologies is essential to deliver valuable experiences that surpass customer expectations. At QuantumSync, we offer a comprehensive suite of UI/UX services designed to enhance the usability and accessibility of our clients' products, websites, and applications, ensuring they make a lasting impression. We are committed to delivering immersive and authentic experiences that not only engage users but also foster lasting loyalty.",
      },
      {
        title: "Quality Engineering Services",
        desc: "Enterprises today rely on software as a critical driver of efficiency and effectiveness, requiring high quality at a rapid pace and large scale amidst ever-changing market trends. This necessitates a focus on quality throughout every stage of the product and application development cycle. At QuantumSync, our quality engineering services are driven by innovation and designed to boost quality, accelerate value delivery, enhance stability, and provide superior customer experiences. Whether you're developing new software or looking to revamp your testing functions and workforce, we deliver top-tier quality at reasonable costs and improved return on investment (ROI). Leveraging years of expertise, our seasoned quality engineers bring unparalleled quality and a diverse set of skills in DevOps, QA, automation, continuous testing, and agile methodologies to our global clientele.",
      },
      {
        title: "Enterprise Content Management",
        desc: "Enterprise content management (ECM) is foundational to an enterprise's resilience. As the demand for digital content has grown with the expansion of online marketing and customer services, e-commerce industries have significantly driven the adoption of ECM in the market. The knowledge hub of any enterprise serves as a comprehensive repository, capturing everything from project ideation to delivery, customer behavior to satisfaction, and innovations across all teams. ECM plays a crucial role in managing the content lifecycle and organizing enterprise-wide information, from initial capture to final archiving and disposition. At QuantumSync, our dedicated ECM team, based entirely in America, leverages deep domain expertise to collaborate with you in developing a tailored ECM strategy. This strategy is designed to optimize your business operations and meet your specific needs.",
      },
      {
        title: "Digital ALtelier",
        desc: "Digital transformation is more than just a technological upgrade. As technology advances, the number of connected devices increases, user interactions become more dynamic, and consumer expectations rise, businesses need to adapt to a digital-first environment, focusing on their People, Processes, and Products. What QuantumSync Offers: Revamp your digital ecosystem with QuantumSync's Digital Atelier, a unique service designed to spearhead digital transformation. Driven by continuous innovation and refinement, the Digital Atelier provides a collaborative, low-risk environment for digital services. It features service gateways that ensure seamless access to applications through relevant APIs and includes a repository of artifacts that can be replicated, provisioned, and deployed across different groups and regions. By enabling businesses to rely on accurate and consistent data, QuantumSync's Digital Atelier also establishes a robust and adaptable digital governance framework, helping businesses achieve digital maturity and realize their transformation objectives.",
      },
    ],
    advantages: [
      {
        cover: "/advantage/1.svg",
        title: "End-to-end portfolio of product engineering services",
      },
      {
        cover: "/advantage/2.svg",
        title: "Modern technologies and reference architectures",
      },
      {
        cover: "/advantage/3.svg",
        title:
          "Subject matter experts (SMEs) across various industry domains, technology platforms, and tools",
      },
      {
        cover: "/advantage/4.svg",
        title:
          "Reusable assets and in-house developed frameworks to accelerate application development",
      },
      {
        cover: "/advantage/5.svg",
        title: "Flexible engagement and financial models",
      },
      {
        cover: "/advantage/6.svg",
        title:
          "Long-term industry partnerships which help in engineering transformation solutions",
      },
      {
        cover: "/advantage/7.svg",
        title:
          "All-inclusive process automation to manage application development",
      },
      {
        cover: "/advantage/8.svg",
        title:
          "Governance models to administer the entire application lifecycle",
      },
    ],
    benefits: [
      {
        cover: "/benefit1/1.svg",
        title:
          "Enhanced digital experiences for your customers across touchpoints",
      },
      {
        cover: "/benefit1/2.svg",
        title: "Increased operational efficiency and reduced costs",
      },
      {
        cover: "/benefit1/3.svg",
        title: "Improved business agility and faster time-to-market",
      },
      {
        cover: "/benefit1/4.svg",
        title: "Enhanced security and compliance",
      },
      {
        cover: "/benefit1/5.svg",
        title: "Improved customer engagement and satisfaction",
      },
    ],
  },

  {
    id: 2,
    cover: "/services/2.webp",
    title: "Quality Engineering Services",
    shortDesc:
      "Modern applications and products engineered for scalability and robust security",
    longDesc: {
      cover: "",
      desc: "With the recent advancements in technology, the business landscape has dramatically transformed. At QuantumSync, we excel in equipping businesses to effectively navigate these changes, ensuring they stay competitive with cutting-edge and relevant offerings. In an era where customers and stakeholders expect seamless, anytime, anywhere experiences, there is an increasing demand for unique, rigorously tested, and future-proof solutions. QuantumSync is here to assist businesses in adopting a digital-first mindset and accelerating their product engineering processes, which enhances digital engagement and interaction. Digital product engineering is crucial not only for delivering outstanding experiences but also acts as a driving force behind digital transformation within enterprises. It speeds up innovation and the cycles of product development. The shift to remote work during the pandemic, along with the growth in online commerce and consumer behavior, has significantly accelerated investment in this area, making our services more vital than ever.",
    },
    offering: [
      {
        title: "Quality Engineering Services",
        desc: "Enterprises today rely on software as a critical driver of efficiency and effectiveness, requiring high quality at a rapid pace and large scale amidst ever-changing market trends. This necessitates a focus on quality throughout every stage of the product and application development cycle. At QuantumSync, our quality engineering services are driven by innovation and designed to boost quality, accelerate value delivery, enhance stability, and provide superior customer experiences. Whether you're developing new software or looking to revamp your testing functions and workforce, we deliver top-tier quality at reasonable costs and improved return on investment (ROI). Leveraging years of expertise, our seasoned quality engineers bring unparalleled quality and a diverse set of skills in DevOps, QA, automation, continuous testing, and agile methodologies to our global clientele. Innova’s digital application services empower organizations to optimize their day-to-day operations and adapt their applications to support changing customer demands. Our right-fit application management approach combined with lean techniques enables a high degree of customization and helps implement new models rapidly and seamlessly. Drawing from our deep industry and technology expertise, we provide highly scalable and comprehensive digital application services which include Architecture, Technology, Process Strategy and Assessments, Application Portfolio Rationalization, Product Sprint 0, and Mobile and Web Development.",
      },
    ],
    advantages: [
      {
        cover: "/advantage/1.svg",
        title: "End-to-end portfolio of product engineering services",
      },
      {
        cover: "/advantage/2.svg",
        title: "Modern technologies and reference architectures",
      },
      {
        cover: "/advantage/3.svg",
        title:
          "Subject matter experts (SMEs) across various industry domains, technology platforms, and tools",
      },
      {
        cover: "/advantage/4.svg",
        title:
          "Reusable assets and in-house developed frameworks to accelerate application development",
      },
      {
        cover: "/advantage/5.svg",
        title: "Flexible engagement and financial models",
      },
      {
        cover: "/advantage/6.svg",
        title:
          "Long-term industry partnerships which help in engineering transformation solutions",
      },
      {
        cover: "/advantage/7.svg",
        title:
          "All-inclusive process automation to manage application development",
      },
      {
        cover: "/advantage/8.svg",
        title:
          "Governance models to administer the entire application lifecycle",
      },
    ],
    benefits: [
      {
        cover: "/benefit1/1.svg",
        title:
          "Enhanced digital experiences for your customers across touchpoints",
      },
      {
        cover: "/benefit1/2.svg",
        title: "Increased operational efficiency and reduced costs",
      },
      {
        cover: "/benefit1/3.svg",
        title: "Improved business agility and faster time-to-market",
      },
      {
        cover: "/benefit1/4.svg",
        title: "Enhanced security and compliance",
      },
      {
        cover: "/benefit1/5.svg",
        title: "Improved customer engagement and satisfaction",
      },
    ],
  },
  {
    id: 3,
    cover: "/services/3.webp",
    title: "Enterprise Content Management",
    shortDesc:
      "Access, analyze and automate large amounts of structured business content",
    longDesc: {
      cover: "/longDesc/enter.webp",
      desc: "Enterprise content management (ECM) is foundational to an enterprise's resilience. As the demand for digital content has grown with the expansion of online marketing and customer services, e-commerce industries have significantly driven the adoption of ECM in the market. The knowledge hub of any enterprise serves as a comprehensive repository, capturing everything from project ideation to delivery, customer behavior to satisfaction, and innovations across all teams. ECM plays a crucial role in managing the content lifecycle and organizing enterprise-wide information, from initial capture to final archiving and disposition. At QuantumSync, our dedicated ECM team, based entirely in America, leverages deep domain expertise to collaborate with you in developing a tailored ECM strategy. This strategy is designed to optimize your business operations and meet your specific needs.",
    },
    solutions: [
      {
        cover: "/acce/1.svg",
        title: "Data Capture and Imaging",
        desc: "Streamline the capture and extract important information in one secure system",
      },
      {
        cover: "/acce/2.svg",
        title: "Data Entry and Processing",
        desc: "Automate data entry and processing to improve accuracy and efficiency",
      },
      {
        cover: "/acce/3.svg",
        title: "Data Extraction and Validation",
        desc: "Extract and validate data from various sources to ensure data quality",
      },
      {
        cover: "/acce/4.svg",
        title: "Data Integration and Transformation",
        desc: "Integrate and transform data to make it accessible and usable",
      },
      {
        cover: "/acce/5.svg",
        title: "Data Analysis and Reporting",
        desc: "Analyze data and generate reports to make informed decisions",
      },
      {
        cover: "/acce/4.svg",
        title: "Data Storage and Management",
        desc: "Store and manage data securely to ensure data integrity",
      },
    ],
    accelerator: {
      card1: {
        cover: "/acce/1.svg",
        title: "Comprehensive Content Automation",
      },
      card2: {
        cover: "/acce/2.svg",
        title: "Adaptive Case Management",
      },
      card3: {
        cover: "/acce/3.svg",
        title: "Accounts Payable Processing",
      },
      card4: {
        cover: "/acce/4.svg",
        title: "Industrial Equipment",
      },
      card5: {
        cover: "/acce/5.svg",
        title: "CheckDocs",
      },
    },
  },
  {
    id: 4,
    cover: "/services/4.webp",
    title: "Cloud Services",
    shortDesc: "Customized and Fine-tuned for Business success",
    longDesc: {
      cover: "",
      desc: "In today's rapidly changing business environment, adopting a cloud-first strategy is essential for organizations looking to secure a competitive edge. Over the past decade, the cloud has become a pivotal force in business transformation, enabling organizations to enhance agility, scale effortlessly, meet evolving customer expectations, build resilience, and maintain relevance. With its transformative power, the cloud has equipped businesses to capitalize on new opportunities and future-proof their operations. QuantumSync is at the forefront of leveraging cloud technologies to drive success and innovation.",
    },
    offering: [
      {
        title: "Cloud Strategy",
        desc: "In today’s rapidly evolving digital landscape, organizational agility and efficiency are key, yet often hindered by outdated applications or an application estate that's not optimized for adaptability. Many organizations recognize that streamlining operations and enhancing profitability can be achieved by aligning their applications with their strategic transformation goals. IT plays an essential role in this transformation. At QuantumSync, our digital application services are designed to optimize everyday operations and adapt applications to meet evolving customer demands. Our tailored application management approach, infused with lean methodologies, allows for a high degree of customization and the swift, seamless introduction of new business models. Leveraging our deep industry and technological expertise, we offer scalable and comprehensive digital application services. These include Architecture Planning, Technology Integration, Process Strategy and Evaluation, Application Portfolio Rationalization, Initial Product Development (Product Sprint 0), and both Mobile and Web Development solutions.",
      },
      {
        title: "Managed Cloud",
        desc: "As the number of innovative products and applications continues to rise, UI/UX teams at QuantumSync recognize the need to make a strong impact to stand out from the competition. Prioritizing intuitive, seamless, and consistent user experiences is crucial, and understanding the customer at every stage of their lifecycle—from consideration to evaluation—is key to staying ahead. Investment in customer research and cutting-edge technologies is essential to deliver valuable experiences that surpass customer expectations. At QuantumSync, we offer a comprehensive suite of UI/UX services designed to enhance the usability and accessibility of our clients' products, websites, and applications, ensuring they make a lasting impression. We are committed to delivering immersive and authentic experiences that not only engage users but also foster lasting loyalty.",
      },
      {
        title: "Cloud Migration",
        desc: "Enterprises today rely on software as a critical driver of efficiency and effectiveness, requiring high quality at a rapid pace and large scale amidst ever-changing market trends. This necessitates a focus on quality throughout every stage of the product and application development cycle. At QuantumSync, our quality engineering services are driven by innovation and designed to boost quality, accelerate value delivery, enhance stability, and provide superior customer experiences. Whether you're developing new software or looking to revamp your testing functions and workforce, we deliver top-tier quality at reasonable costs and improved return on investment (ROI). Leveraging years of expertise, our seasoned quality engineers bring unparalleled quality and a diverse set of skills in DevOps, QA, automation, continuous testing, and agile methodologies to our global clientele.",
      },
      {
        title: "Cloud Native Apps",
        desc: "Enterprise content management (ECM) is foundational to an enterprise's resilience. As the demand for digital content has grown with the expansion of online marketing and customer services, e-commerce industries have significantly driven the adoption of ECM in the market. The knowledge hub of any enterprise serves as a comprehensive repository, capturing everything from project ideation to delivery, customer behavior to satisfaction, and innovations across all teams. ECM plays a crucial role in managing the content lifecycle and organizing enterprise-wide information, from initial capture to final archiving and disposition. At QuantumSync, our dedicated ECM team, based entirely in America, leverages deep domain expertise to collaborate with you in developing a tailored ECM strategy. This strategy is designed to optimize your business operations and meet your specific needs.",
      },
      {
        title: "Cloud Edge IOT",
        desc: "Digital transformation is more than just a technological upgrade. As technology advances, the number of connected devices increases, user interactions become more dynamic, and consumer expectations rise, businesses need to adapt to a digital-first environment, focusing on their People, Processes, and Products. What QuantumSync Offers: Revamp your digital ecosystem with QuantumSync's Digital Atelier, a unique service designed to spearhead digital transformation. Driven by continuous innovation and refinement, the Digital Atelier provides a collaborative, low-risk environment for digital services. It features service gateways that ensure seamless access to applications through relevant APIs and includes a repository of artifacts that can be replicated, provisioned, and deployed across different groups and regions. By enabling businesses to rely on accurate and consistent data, QuantumSync's Digital Atelier also establishes a robust and adaptable digital governance framework, helping businesses achieve digital maturity and realize their transformation objectives.",
      },
    ],
  },
  {
    id: 5,
    cover: "/services/5.webp",
    title: "Generative AI",
    shortDesc:
      "The advent of Generative AI will fundamentally transform how information is accessed and processed",
    longDesc: {
      cover: "",
      desc: "Generative AI: Transformative Applications QuantumSync's Generative AI services span a wide array, customizing efficient solutions to meet our clients' unique IT requirements. These services elevate IT productivity, enhance enterprise operations, and elevate end-user experiences. Through our Gen AI framework, our goal is to keep organizations ahead in innovation and craft compelling value propositions. At QuantumSync, we've strategically classified our Generative AI (Gen AI) services into three primary domains: Gen AI for IT/ITOps, Gen AI for Business Functions/Operations, and Gen AI for Customer Experience.",
    },
    accelerator: {
      card1: {
        cover: "/acce/ai1.webp",
        title: "How QuantumSync Can Assist: Our Expertise",
      },
      card2: {
        cover: "/acce/ai2.webp",
        title: "Partnerships",
      },
      card3: {
        cover: "/acce/ai3.webp",
        title: "AI-ready Workforce",
      },
      card4: {
        cover: "/acce/ai4.webp",
        title: "Solutions",
      },
      card5: {
        cover: "/acce/ai5.webp",
        title: "How to Harness QuantumSync's Generative AI Framework",
      },
    },
  },
  {
    id: 6,
    cover: "/services/10.webp",
    title: "AI/ML",
    shortDesc:
      "Enables enterprises to strategically ascend the automation maturity curve with precision, predictability, and measurable progress",
    longDesc: {
      cover: "",
      desc: "As global enterprises advance, they are integrating artificial intelligence (AI) and automation across various domains, spanning from robotic process automation to generative AI and machine learning. This integrated strategy is proving invaluable in overcoming constraints related to data, skills, and operations by translating insights into tailored recommendations aligned with evolving training needs and business goals. Forward-thinking business leaders are harnessing the power of AI and automation to cultivate talent and foster innovation. With ongoing advancements in AI and automation, team competencies will be future-proofed, while business transformation processes will accelerate and gain sustainability.",
    },
    offering: [
      {
        title: "Supervised Learning",
        desc: "• Linear Regression • Decision Tree • Random Forest • Logistic Regression Our areas of expertise include: • Fraud Detection • Market Segmentation • Customer Segmentation • Pattern or Face Recognition • Image Classification • Marketing Forecasting • Advertising Popularity Predictions",
      },
      {
        title: "Unsupervised Learning",
        desc: "• K-means clustering • Hierarchical clustering • Gaussian mixture model Our areas of expertise include: • Recommendation system • Customer segmentation • Spam Filtering • News Classification • Social Network Analysis • Search Result Grouping • Image Segmentation • Anomaly Detection • Big Data Visualization • Feature Elicitation • Email Classification",
      },
      {
        title: "AI/ML ENGINEERING OPS",
        desc: "We utilize agile methodologies to graphically depict information, enhancing communication and understanding. This approach allows organizations to engage with analytics visually, aiding in the clarification of complex concepts and the discovery of new patterns.",
      },
    ],
  },
  {
    id: 7,
    cover: "/services/6.jpeg",
    title: "Hyperautomation",
    shortDesc:
      "Enables enterprises to strategically ascend the automation maturity curve with precision, predictability, and measurable progress",
    longDesc: {
      cover: "",
      desc: "As global enterprises advance, they are integrating artificial intelligence (AI) and automation across various domains, spanning from robotic process automation to generative AI and machine learning. This integrated strategy is proving invaluable in overcoming constraints related to data, skills, and operations by translating insights into tailored recommendations aligned with evolving training needs and business goals. Forward-thinking business leaders are harnessing the power of AI and automation to cultivate talent and foster innovation. With ongoing advancements in AI and automation, team competencies will be future-proofed, while business transformation processes will accelerate and gain sustainability.",
    },
    offering: [
      {
        title: "Generative AI",
        desc: "Across IT infrastructure and customer satisfaction realms, our AI-powered solutions streamline operations, boost effectiveness, and open pathways to fresh business opportunities. Our services include: GenAI for IT, GenAI for Business and GenAI for Customers.",
      },
      {
        title: "AI/ML",
        desc: "Our AI/ML services facilitate the seamless development, deployment, and administration of AI models, empowering businesses to leverage data-driven insights and expedite innovation. Our services include: MLOps, Model Engineering, Enterprise AI.",
      },
      {
        title: "Hyperautomation",
        desc: "Empowering businesses with hyper-automation services to optimize processes, boost efficiency, and fuel innovation through the automation of repetitive tasks, streamlining workflows, and harnessing data-driven insights. Our services include: Digital Process Management, Business Process Management, Intelligent Automation, iDSP.",
      },
    ],
  },
  {
    id: 8,
    cover: "/services/9.jpeg",
    title: "UI/XM Services",
    shortDesc: "Personalizing User Experiences for Greater Relevance",
    longDesc: {
      cover: "/longDesc/ui.webp",
      desc: "Industries across the board are adopting user-centered designs to simplify digital interactions, making them intuitive, seamless, and efficient. This approach promotes ease of access, consistent experiences, clear understanding, and heightened user engagement. UI/UX teams dedicate significant time and research to thoroughly understand business processes, paving the way for innovative design solutions that simplify customer experiences through various engagement models. At QuantumSync, our comprehensive UI/UX services are designed to enhance the usability and accessibility of customer-facing products, websites, and applications, ensuring authentic and engaging user experiences.",
    },
    offering: [
      {
        title: "Responsive Design",
        desc: "For every business, a website is essential. It builds trust among the target audience and reinforces reliance on the business. At QuantumSync, we utilize a collaborative approach to ensure that your website accurately represents your brand's promise. We focus on creating a future-ready and intuitive site that provides an immersive digital experience for visitors. Our deep understanding of our clients' project visions establishes us as a preferred partner for website design projects. Our primary goal is to drive high conversion rates through the websites we develop, which in turn supports the growth of our clients' businesses.",
      },
      {
        title: "Mobile-First Design",
        desc: "As more consumers access websites via their smartphones, mobile search optimization becomes critical. Our UI/UX experts are adept at designing for smaller screens, taking into account the limitations of space while ensuring that key elements are prominently displayed. Our process includes prioritizing essential content, providing intuitive navigation, ensuring fast load times, reducing disruptive pop-ups, and conducting thorough testing on real devices to optimize the mobile user experience. Our designers are committed to delivering the ideal mobile website that meets modern usability standards.",
      },
      {
        title: "Rapid Prototyping",
        desc: "Our team of UI/UX experts specializes in creating digital simulations of products, allowing clients to virtually explore and interact with the final product before it's fully developed. Our process begins with a detailed understanding of the product specifications. Following this, our team crafts a UX wireframe and employs advanced software tools to develop a full UI design that offers a near-live experience. Rapid prototyping ensures that these designs are produced quickly and efficiently. We actively seek feedback from clients on these prototypes, incorporating their insights to refine and finalize the product, ensuring a robust and effective output.",
      },
      {
        title: "Experience Meauremnet and Analytics",
        desc: "We recognize that customers are central to all businesses, making it essential to understand their perceptions and feelings about a product. Our approach begins by assisting enterprises in identifying specific areas where they seek deeper insights. We then gather feedback from users who have extensively interacted with the product or application. In the final stage, we conduct a thorough analysis of the feedback collected. Our analysis focuses on three key metrics: usability, engagement, and conversion. This structured feedback process ensures that businesses can make informed decisions to enhance their offerings and better meet customer needs.",
      },
    ],
    benefits: [
      {
        cover: "/benefit2/1.svg",
        title:
          "Enhanced digital experiences for your customers across touchpoints",
      },
      {
        cover: "/benefit2/2.svg",
        title: "Increased operational efficiency and reduced costs",
      },
      {
        cover: "/benefit2/3.svg",
        title: "Improved business agility and faster time-to-market",
      },
      {
        cover: "/benefit2/4.svg",
        title: "Enhanced security and compliance",
      },
    ],
  },
  {
    id: 9,
    cover: "/services/1.webp",
    title: "Digital Atelier",
    shortDesc:
      "Modern applications and products engineered for scalability and robust security",
    longDesc: {
      cover: "",
      desc: "With the recent advancements in technology, the business landscape has dramatically transformed. At QuantumSync, we excel in equipping businesses to effectively navigate these changes, ensuring they stay competitive with cutting-edge and relevant offerings. In an era where customers and stakeholders expect seamless, anytime, anywhere experiences, there is an increasing demand for unique, rigorously tested, and future-proof solutions. QuantumSync is here to assist businesses in adopting a digital-first mindset and accelerating their product engineering processes, which enhances digital engagement and interaction. Digital product engineering is crucial not only for delivering outstanding experiences but also acts as a driving force behind digital transformation within enterprises. It speeds up innovation and the cycles of product development. The shift to remote work during the pandemic, along with the growth in online commerce and consumer behavior, has significantly accelerated investment in this area, making our services more vital than ever.",
    },
    offering: [
      {
        title: "Digital Atelier",
        desc: "Digital transformation is more than just a technological upgrade. As technology advances, the number of connected devices increases, user interactions become more dynamic, and consumer expectations rise, businesses need to adapt to a digital-first environment, focusing on their People, Processes, and Products. What QuantumSync Offers: Revamp your digital ecosystem with QuantumSync's Digital Atelier, a unique service designed to spearhead digital transformation. Driven by continuous innovation and refinement, the Digital Atelier provides a collaborative, low-risk environment for digital services. It features service gateways that ensure seamless access to applications through relevant APIs and includes a repository of artifacts that can be replicated, provisioned, and deployed across different groups and regions. By enabling businesses to rely on accurate and consistent data, QuantumSync's Digital Atelier also establishes a robust and adaptable digital governance framework, helping businesses achieve digital maturity and realize their transformation objectives.",
      },
    ],
    advantages: [
      {
        cover: "/advantage/1.svg",
        title: "End-to-end portfolio of product engineering services",
      },
      {
        cover: "/advantage/2.svg",
        title: "Modern technologies and reference architectures",
      },
      {
        cover: "/advantage/3.svg",
        title:
          "Subject matter experts (SMEs) across various industry domains, technology platforms, and tools",
      },
      {
        cover: "/advantage/4.svg",
        title:
          "Reusable assets and in-house developed frameworks to accelerate application development",
      },
      {
        cover: "/advantage/5.svg",
        title: "Flexible engagement and financial models",
      },
      {
        cover: "/advantage/6.svg",
        title:
          "Long-term industry partnerships which help in engineering transformation solutions",
      },
      {
        cover: "/advantage/7.svg",
        title:
          "All-inclusive process automation to manage application development",
      },
      {
        cover: "/advantage/8.svg",
        title:
          "Governance models to administer the entire application lifecycle",
      },
    ],
    benefits: [
      {
        cover: "/benefit1/1.svg",
        title:
          "Enhanced digital experiences for your customers across touchpoints",
      },
      {
        cover: "/benefit1/2.svg",
        title: "Increased operational efficiency and reduced costs",
      },
      {
        cover: "/benefit1/3.svg",
        title: "Improved business agility and faster time-to-market",
      },
      {
        cover: "/benefit1/4.svg",
        title: "Enhanced security and compliance",
      },
      {
        cover: "/benefit1/5.svg",
        title: "Improved customer engagement and satisfaction",
      },
    ],
  },
  {
    id: 10,
    cover: "/services/7.jpeg",
    title: "Data Modernization",
    shortDesc:
      "Speed up Your Data Modernization Process to Attain Significant Business Results",
    longDesc: {
      cover: "",
      desc: "As organizations transition into digital enterprises, data plays a vital role in optimizing business operations. While not all data is essential, the most critical data needs to be governed, monitored for quality, and integrated with other data to provide actionable insights that can significantly influence outcomes and add value. The success of an organization is greatly dependent on its ability to utilize actionable information, which necessitates adaptable data structures and contemporary platforms. By adopting a cloud-first approach and leveraging robust consulting expertise, we create a modern data ecosystem that democratizes access to high-quality data, significantly shortens the time to insight, and enhances user experiences.",
    },
    offering: [
      {
        title: "Data Management",
        desc: "Data is a vital business asset, and if not managed properly, it can burden organizations with inconsistent datasets, data quality problems, and incompatible data silos. Our data modernization services include a comprehensive data management strategy that helps organizations enhance control over their data by ensuring it is well-governed, secure, and effectively managed. We deliver a clear roadmap for cataloging and governing data, implement data quality measures within a robust governance framework, and classify data based on its sensitivity while establishing processes to protect it.",
      },
      {
        title: "Data Migration",
        desc: "At QuantumSync, we thoroughly assess the current data and data gravity before initiating any data migration project. We also clarify the client’s goals, which can range from data consolidation to the creation of a data lake. Our focus is on the desired outcomes—whether it’s maximizing data value, reducing costs, or enhancing data quality. Our skilled data migration and management team implements processes designed to achieve these objectives while minimizing risk and business impact. To facilitate data migration, we have developed a migration factory tailored to identify the necessary data sets, determine the required integrations and patterns, and establish effective data loading mechanisms. This migration factory is fully integrated with existing processes and service level agreements (SLAs), and can be customized to meet specific client needs and requirements. Equipped with accelerators, frameworks, and templates, our migration factory ensures faster time to market and cost efficiency.",
      },
      {
        title: "Data Visualization",
        desc: "We utilize agile methodologies to graphically depict information, enhancing communication and understanding. This approach allows organizations to engage with analytics visually, aiding in the clarification of complex concepts and the discovery of new patterns.",
      },
      {
        title: "Data Operations",
        desc: "Data is a vital business asset, and if not managed properly, it can burden organizations with inconsistent datasets, data quality problems, and incompatible data silos. Our data modernization services include a comprehensive data management strategy that helps organizations enhance control over their data by ensuring it is well-governed, secure, and effectively managed. We deliver a clear roadmap for cataloging and governing data, implement data quality measures within a robust governance framework, and classify data based on its sensitivity while establishing processes to protect it.",
      },
      {
        title: "Data Enablement",
        desc: "At QuantumSync, we thoroughly assess the current data and data gravity before initiating any data migration project. We also clarify the client’s goals, which can range from data consolidation to the creation of a data lake. Our focus is on the desired outcomes—whether it’s maximizing data value, reducing costs, or enhancing data quality. Our skilled data migration and management team implements processes designed to achieve these objectives while minimizing risk and business impact. To facilitate data migration, we have developed a migration factory tailored to identify the necessary data sets, determine the required integrations and patterns, and establish effective data loading mechanisms. This migration factory is fully integrated with existing processes and service level agreements (SLAs), and can be customized to meet specific client needs and requirements. Equipped with accelerators, frameworks, and templates, our migration factory ensures faster time to market and cost efficiency.",
      },
    ],
    accelerator: {
      card1: {
        cover: "/acce/d1.webp",
        title: "What does Data Ops deliver?",
      },
      card2: {
        cover: "/acce/d2.webp",
        title: "PHASE 1",
      },
      card3: {
        cover: "/acce/d3.webp",
        title: "PHASE 2",
      },
      card4: {
        cover: "/acce/d4.webp",
        title: "PHASE 3",
      },
      card5: {
        cover: "/acce/d5.webp",
        title: "PHASE 4",
      },
    },
  },
  {
    id: 11,
    cover: "/services/1.webp",
    title: "Managed Cloud Services",
    shortDesc: "Enhance the Capabilites of Your Cloud Ecosystem",
    longDesc: {
      cover: "",
      desc: "Organizations must enhance their operational efficiency as they modernize and transition to the cloud. Operations now encompass a complex mix that extends beyond traditional data center applications to include SaaS, platform services, and infrastructure services, both on-premises and in the public cloud. This shift necessitates innovative thinking and a contemporary approach that utilizes declarative configurations, resource orchestration, and APIs for management. It also demands proactive governance, monitoring, cost optimization, advanced tools, and digital labor to support human efforts, ensuring efficiency and scalability. QuantumSync's Modern Managed Services are designed to adeptly manage cloud-based architectures critical to your business applications while you concentrate on enhancing business agility, stability, compliance, and cost control. From cognitive agents to site reliability engineering for your most vital services, we ensure compliance through highly automated monitoring. We also provide comprehensive remediation for your enterprise application portfolio in a hybrid environment, ensuring all bases are covered.",
    },
    offering: [
      {
        title: "Data Management",
        desc: "Data is a vital business asset, and if not managed properly, it can burden organizations with inconsistent datasets, data quality problems, and incompatible data silos. Our data modernization services include a comprehensive data management strategy that helps organizations enhance control over their data by ensuring it is well-governed, secure, and effectively managed. We deliver a clear roadmap for cataloging and governing data, implement data quality measures within a robust governance framework, and classify data based on its sensitivity while establishing processes to protect it.",
      },
      {
        title: "Data Migration",
        desc: "At QuantumSync, we thoroughly assess the current data and data gravity before initiating any data migration project. We also clarify the client’s goals, which can range from data consolidation to the creation of a data lake. Our focus is on the desired outcomes—whether it’s maximizing data value, reducing costs, or enhancing data quality. Our skilled data migration and management team implements processes designed to achieve these objectives while minimizing risk and business impact. To facilitate data migration, we have developed a migration factory tailored to identify the necessary data sets, determine the required integrations and patterns, and establish effective data loading mechanisms. This migration factory is fully integrated with existing processes and service level agreements (SLAs), and can be customized to meet specific client needs and requirements. Equipped with accelerators, frameworks, and templates, our migration factory ensures faster time to market and cost efficiency.",
      },
      {
        title: "Data Visualization",
        desc: "We utilize agile methodologies to graphically depict information, enhancing communication and understanding. This approach allows organizations to engage with analytics visually, aiding in the clarification of complex concepts and the discovery of new patterns.",
      },
      {
        title: "Data Operations",
        desc: "Data is a vital business asset, and if not managed properly, it can burden organizations with inconsistent datasets, data quality problems, and incompatible data silos. Our data modernization services include a comprehensive data management strategy that helps organizations enhance control over their data by ensuring it is well-governed, secure, and effectively managed. We deliver a clear roadmap for cataloging and governing data, implement data quality measures within a robust governance framework, and classify data based on its sensitivity while establishing processes to protect it.",
      },
      {
        title: "Data Enablement",
        desc: "At QuantumSync, we thoroughly assess the current data and data gravity before initiating any data migration project. We also clarify the client’s goals, which can range from data consolidation to the creation of a data lake. Our focus is on the desired outcomes—whether it’s maximizing data value, reducing costs, or enhancing data quality. Our skilled data migration and management team implements processes designed to achieve these objectives while minimizing risk and business impact. To facilitate data migration, we have developed a migration factory tailored to identify the necessary data sets, determine the required integrations and patterns, and establish effective data loading mechanisms. This migration factory is fully integrated with existing processes and service level agreements (SLAs), and can be customized to meet specific client needs and requirements. Equipped with accelerators, frameworks, and templates, our migration factory ensures faster time to market and cost efficiency.",
      },
    ],
    accelerator: {
      card1: {
        cover: "/acce/managed.webp",
        title: "Our Methodology",
        desc: "Our cloud experts possess a deep understanding of our clients' resources, operations, requirements, and financial objectives. We leverage this insight, along with our technical acumen and cloud management skills, to develop an optimized cloud environment tailored to each client. During this process, we provide clients with a roadmap that facilitates the integration of tools, addresses technological gaps, transfers essential knowledge, and streamlines the management of both existing and new workloads. Our approach is centered on continuous improvement and evolution, ensuring the agility and scalability necessary for your business to thrive and expand.",
      },
    },
  },
  {
    id: 12,
    cover: "/services/4.webp",
    title: "Cloud Edge IoT",
    shortDesc:
      "Enhance efficiency at lower costs and increase added value with IoT solutions",
    longDesc: {
      cover: "",
      desc: "The Internet of Things (IoT) enables the connection of machines in semi-automated ways that fundamentally differ from human-reliant networks. Notably, a machine doesn't need to possess advanced intelligence or decision-making capabilities to be integrated into an IoT network. For example, a basic LED bulb that can be remotely controlled via a short-range radio signal is considered part of an IoT network, highlighting the difference between mere connectivity and device intelligence. Globally, businesses are tapping into the immense potential of IoT to gain a deeper understanding of opportunities and better align with their goals. Leveraging our expertise in cloud IoT-powered solutions, we can help your business: • Connect devices efficiently and scale effortlessly • Strategically analyze new data to generate actionable business insights • Make smart decisions based on data • Integrate and transform business processes • Design, build, deploy, and manage comprehensive IoT-backed processes • Provide high-quality user interfaces (UI) that connect to the human world",
    },
    offering: [
      {
        title: "IOT for Industry",
        desc: "Data is a vital business asset, and if not managed properly, it can burden organizations with inconsistent datasets, data quality problems, and incompatible data silos. Our data modernization services include a comprehensive data management strategy that helps organizations enhance control over their data by ensuring it is well-governed, secure, and effectively managed. We deliver a clear roadmap for cataloging and governing data, implement data quality measures within a robust governance framework, and classify data based on its sensitivity while establishing processes to protect it.",
      },
      {
        title: "IOT for Products",
        desc: "At QuantumSync, we thoroughly assess the current data and data gravity before initiating any data migration project. We also clarify the client’s goals, which can range from data consolidation to the creation of a data lake. Our focus is on the desired outcomes—whether it’s maximizing data value, reducing costs, or enhancing data quality. Our skilled data migration and management team implements processes designed to achieve these objectives while minimizing risk and business impact. To facilitate data migration, we have developed a migration factory tailored to identify the necessary data sets, determine the required integrations and patterns, and establish effective data loading mechanisms. This migration factory is fully integrated with existing processes and service level agreements (SLAs), and can be customized to meet specific client needs and requirements. Equipped with accelerators, frameworks, and templates, our migration factory ensures faster time to market and cost efficiency.",
      },
      {
        title: "IOT Platform",
        desc: "We utilize agile methodologies to graphically depict information, enhancing communication and understanding. This approach allows organizations to engage with analytics visually, aiding in the clarification of complex concepts and the discovery of new patterns.",
      },
    ],
    accelerator: {
      card1: {
        cover: "/acce/iot.webp",
        title: "Our Approach",
        desc: "We conduct a thorough mapping to assist organizations in navigating the following edge configuration parameters, which are critical for making informed decisions and identifying gaps within specific layers of the IoT architecture: Latency Understanding the latency requirements, ranging from <10ms to over 1000ms, helps us determine the type of implementation necessary. Location Details about the physical location or installation site of the IoT device. Analytics The specific type of analytics needed, such as near real-time analytics or machine learning, to enable timely actions by users. Dashboard On/Offline Support The connectivity requirements necessary for the project to function effectively. Data Management Insight into the volume of data being generated and how it is being utilized. Remote Management Ensuring all devices operate uniformly with similar firmware updates to consistently report back status. Device Management Enabling remote interaction with and visualization of your IoT devices. Deployment, Security, Compliance Enhancing the security of Edge Gateways, Data, and IoT devices with IAM policies, IoT certificates, and comprehensive IoT policies.",
      },
    },
  },
  {
    id: 13,
    cover: "/services/10.webp",
    title: "Data Science",
    shortDesc:
      "Utilize Data Science to make intelligent, precise, and data-driven decisions",
    longDesc: {
      cover: "",
      desc: "With the advancement of AI and automation, enterprises are reshaping their IT strategies to leverage data for a competitive edge. Through Data Science, businesses gain the ability to comprehend complex phenomena through automated data analysis, leading to better decision-making, increased efficiency, improved productivity, enhanced user engagement, and greater profitability. At QuantumSync, our data scientists and data professionals deliver advanced data solutions that break down complex services into user-friendly components. This significantly enhances your company's data capabilities, enabling enterprises to make effective, intelligent, data-driven business decisions.",
    },
    offering: [
      {
        title: "Supervised Learning",
        desc: "• Linear Regression • Decision Tree • Random Forest • Logistic Regression Our areas of expertise include: • Fraud Detection • Market Segmentation • Customer Segmentation • Pattern or Face Recognition • Image Classification • Marketing Forecasting • Advertising Popularity Predictions",
      },
      {
        title: "Unsupervised Learning",
        desc: "• K-means clustering • Hierarchical clustering • Gaussian mixture model Our areas of expertise include: • Recommendation system • Customer segmentation • Spam Filtering • News Classification • Social Network Analysis • Search Result Grouping • Image Segmentation • Anomaly Detection • Big Data Visualization • Feature Elicitation • Email Classification",
      },
      {
        title: "AI/ML ENGINEERING OPS",
        desc: "We utilize agile methodologies to graphically depict information, enhancing communication and understanding. This approach allows organizations to engage with analytics visually, aiding in the clarification of complex concepts and the discovery of new patterns.",
      },
      {
        title: "PREDICTIVE LEARNING",
        desc: "Predictive intelligence is an innovative solution powered by machine learning that synthesizes all relevant data to forecast outcomes and identify key factors influencing organizational performance. It aggregates real-time data from diverse sources within the organization, enabling the anticipation of market shifts, identification of overlooked assumptions, or prediction of future results crucial for making informed, comprehensive business decisions. The adoption of predictive intelligence is swiftly expanding across various industries worldwide, reflecting its growing importance and effectiveness.",
      },
      {
        title: "iDSP",
        desc: "Organizations worldwide are astounded by the rapid growth of data. Businesses are inundated with diverse data from numerous sources, both internal and external, including devices, real-time sensors, mobile apps, and IoT. However, as unstructured data continues to grow exponentially, companies find themselves overwhelmed by vast amounts of data and face challenges in extracting valuable insights that could inform their decision-making and strategic planning.",
      },
    ],
  },
  {
    id: 14,
    cover: "/services/6.jpeg",
    title: "Cloud Strategy",
    shortDesc: "Strategically designed for business success",
    longDesc: {
      cover: "",
      desc: "Today, 94% of companies are adopting cloud computing to quickly bring solutions to market for their essential applications and workflows. Yet, without a well-defined strategy and roadmap, transitioning to the cloud can be costly. Our method outlines key steps for creating a strong cloud adoption strategy:",
    },
    accelerator: {
      card1: {
        cover: "/acce/c1.webp",
        title: "Phase 1: Cloud Vision",
        desc: "Across IT infrastructure and customer satisfaction realms, our AI-powered solutions streamline operations, boost effectiveness, and open pathways to fresh business opportunities. Our services include: GenAI for IT, GenAI for Business and GenAI for Customers.",
      },
      card2: {
        cover: "/acce/c2.webp",
        title: "Phase 2: Cloud Value Assessment",
        desc: "Our AI/ML services facilitate the seamless development, deployment, and administration of AI models, empowering businesses to leverage data-driven insights and expedite innovation. Our services include: MLOps, Model Engineering, Enterprise AI.",
      },
      card3: {
        cover: "/acce/c3.webp",
        title: "Phase 3: Cloud Roadmap",
        desc: "Empowering businesses with hyper-automation services to optimize processes, boost efficiency, and fuel innovation through the automation of repetitive tasks, streamlining workflows, and harnessing data-driven insights. Our services include: Digital Process Management, Business Process Management, Intelligent Automation, iDSP.",
      },
      card4: {
        cover: "/acce/c4.webp",
        title: "Phase 4: Cloud Transformation Plan",
        desc: "Across IT infrastructure and customer satisfaction realms, our AI-powered solutions streamline operations, boost effectiveness, and open pathways to fresh business opportunities. Our services include: GenAI for IT, GenAI for Business and GenAI for Customers.",
      },
    },
  },
];
