type offeringProps = {
  title: string;
  desc: string;
};

export type dataProps = {
  id: number;
  cover: string;
  title: string;
  shortDesc?: string;
  longDesc?: string;
  offering?: offeringProps[];
};

export const data: dataProps[] = [
  {
    id: 1,
    cover: "/services/1.webp",
    title: "Managed Cloud Services",
  },
  {
    id: 2,
    cover: "/services/2.webp",
    title: "Cloud Migration",
  },
  {
    id: 3,
    cover: "/services/3.webp",
    title: "DevOps",
  },
  {
    id: 4,
    cover: "/services/4.webp",
    title: "Data Analytics",
  },
  {
    id: 5,
    cover: "/services/5.webp",
    title: "Cyber Security",
  },
  {
    id: 6,
    cover: "/services/6.jpeg",
    title: "Web Development",
  },
  {
    id: 7,
    cover: "/services/7.jpeg",
    title: "UI/XM Services",
    shortDesc: "Personalizing User Experiences for Greater Relevance",
    longDesc:
      "Industries across the board are adopting user-centered designs to simplify digital interactions, making them intuitive, seamless, and efficient. This approach promotes ease of access, consistent experiences, clear understanding, and heightened user engagement. UI/UX teams dedicate significant time and research to thoroughly understand business processes, paving the way for innovative design solutions that simplify customer experiences through various engagement models. At QuantumSync, our comprehensive UI/UX services are designed to enhance the usability and accessibility of customer-facing products, websites, and applications, ensuring authentic and engaging user experiences.",
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
  },
  {
    id: 8,
    cover: "/services/8.jpeg",
    title: "Digital Application Services",
    shortDesc:
      "Modern applications and products engineered for scalability and robust security.",
    longDesc:
      "With the recent advancements in technology, the business landscape has dramatically transformed. At QuantumSync, we excel in equipping businesses to effectively navigate these changes, ensuring they stay competitive with cutting-edge and relevant offerings. In an era where customers and stakeholders expect seamless, anytime, anywhere experiences, there is an increasing demand for unique, rigorously tested, and future-proof solutions. QuantumSync is here to assist businesses in adopting a digital-first mindset and accelerating their product engineering processes, which enhances digital engagement and interaction. Digital product engineering is crucial not only for delivering outstanding experiences but also acts as a driving force behind digital transformation within enterprises. It speeds up innovation and the cycles of product development. The shift to remote work during the pandemic, along with the growth in online commerce and consumer behavior, has significantly accelerated investment in this area, making our services more vital than ever.",
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
  },
  {
    id: 9,
    cover: "/services/9.jpeg",
    title: "IT Consulting",
  },
];
