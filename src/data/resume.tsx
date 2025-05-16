import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mukesh Kumar",
  initials: "MK",
  url: "https://portfolio-lake-three-21.vercel.app/",
  location: "Chamba Himachal Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Chamba,+Himachal+Pradesh",
  description:
    "From electronics to code—I'm an engineer who loves building cool stuff and helping people wherever I can.",
  summary:
    `I'm a Software Development Engineer with over 8 years of experience specializing in mobile application development across React Native, Android, and iOS platforms. I thrive in dynamic, collaborative environments where I can bring innovative ideas to life and build cutting-edge mobile solutions that push industry standards and delight users. I'm passionate about writing clean, efficient code and continuously learning to stay ahead in a fast-evolving tech landscape. I’m currently seeking full-time opportunities where I can contribute my expertise, creativity, and problem-solving skills to drive meaningful impact and long-term success.`,
  avatarUrl: "/me.png",
  skills: [
    "React Native",
    "JavaScript",
    "Typescript",
    "Expo",
    "Redux",
    "Axios",
    "Vibe Coding",
    "Cursor",
    "VS Code",
    "Node.js",
    "Java",
    "Swift",
    "C++",
    "React.js",
    "Android Studio",
    "Xcode",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rishu.jaryalls2505@gmail.com",
    tel: "+919459084782",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rishu2505",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mukesh-kumar-a07453199",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rishu2505",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@rishujaryalls8325",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "micro1",
      href: "https://www.micro1.ai",
      badges: [],
      location: "Los Angeles, CA (Remote)",
      title: "React Native Engineer",
      logoUrl: "/micro1.jpeg",
      start: "May 2024",
      end: "Present",
      description:
        `As an experienced mobile application developer, I have successfully driven the full life cycle development of cross-
platform mobile applications using React Native, from conceptualization through deployment. My work reflects a
deep expertise in React Native, coupled with a strong ability to design and deliver scalable, high-quality mobile
solutions that are precisely tailored to meet the strategic objectives and unique requirements of clients.`,
    },
    {
      company: "Force For Good",
      badges: [],
      href: "https://forceforgood.io",
      location: "Singapore (Remote)",
      title: "Senior Software Engineer (Mobile Apps)",
      logoUrl: "/ffg.png",
      start: "June 2023",
      end: "March 2024",
      description:
        `As a mobile application developer, I led the end-to-end development of a cross-platform mobile application using
React Native for Force For Good over a span of 2 years. Key responsibilities included requirement gathering,
architecture design, implementation, unit testing, optimization, deployment, and maintenance. Utilized technologies
such as React Native, JavaScript, Redux, Firebase, and Jest for development and testing. Successfully delivered a
feature-rich application meeting client expectations, enhancing technical skills and project management capabilities.`,
    },
    {
      company: "Applify Tech Pvt Ltd ",
      href: "https://www.applify.co/",
      badges: [],
      location: "Mohali (Remote)",
      title: "Senior Software Executive (React Native)",
      logoUrl: "/applify.jpeg",
      start: "Nov 2020",
      end: "May 2023",
      description:
        `As a mobile application developer, I spearheaded the development of a cross-platform mobile application using React
Native from inception to deployment. The below projects showcased my proficiency in React Native and my ability
to deliver high-quality mobile solutions tailored to client requirements.`,
    },
    {
      company: "Capanicus",
      href: "https://www.capanicus.com/",
      badges: [],
      location: "Mohali (On-site)",
      title: "Senior Software Executive (React Native)",
      logoUrl: "/capanicus.png",
      start: "Feb 2016",
      end: "Oct 2020",
      description:
        `I started my career as an Android application developer. After working for almost 2 years in this role, I transitioned
into cross-platform mobile application development. Opting for React Native, I spearheaded the development of
a cross-platform mobile application from inception to deployment. The projects below showcase my proficiency in
React Native and my ability to deliver high-quality mobile solutions tailored to client requirements.`,
    },
  ],
  education: [
    {
      school: "Arni University",
      href: "https://arni.in/",
      degree: "B.Tech, Electronics and Communications",
      logoUrl: "/arni.png",
      start: "2011",
      end: "2015",
    },
    {
      school: "HP Board Of School Education",
      href: "http://hpbose.org/",
      degree: "Higher Secondary",
      logoUrl: "/hpbose.jpeg",
      start: "2010",
      end: "2011",
    },
    {
      school: "HP Board Of School Education",
      href: "http://hpbose.org/",
      degree: "Secondary",
      logoUrl: "/hpbose.jpeg",
      start: "2008",
      end: "2009",
    },
  ],
  projects: [
    {
      title: "EasyEd",
      href: "https://www.easyed.app/",
      dates: "Oct 2024 - April 2025",
      active: true,
      description:
        "Engage with academic content like never before. Choose your subjects, watch bite-sized lessons, and take your learning to the next level.",
      technologies: [
        "React Native",
        "Typescript",
        "Node.js",
        "CSS",
        "HTML",
        "Redux",
        "One Signal",
        "Mux",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.easyed.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-f7f9635c2dc945be86094691b6687a78.r2.dev/easyed.mp4",
    },
    {
      title: "Spontaneous",
      href: "https://www.spon.co/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Spontaneous makes hanging out easy with daily invites for you and your friends.",
      technologies: [
        "React Native",
        "Typescript",
        "Node.js",
        "CSS",
        "HTML",
        "Redux",
        "One Signal",
        "Animated API's",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.spon.co/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://apps.apple.com/ug/app/spontaneous-are-you-in/id6477750501",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-f7f9635c2dc945be86094691b6687a78.r2.dev/spontaneous.mp4",
    },
    {
      title: "Force For Good",
      href: "https://www.appbrain.com/app/force-for-good/com.ffg.saas",
      dates: "June 2023 - May 2024",
      active: true,
      description:
        `Force for Good was built with the single ambition: to connect and engage people by their purpose,
helping them come together to make an even bigger impact in the world.`,
      technologies: [
        "React Native",
        "Javascript",
        "SAAS",
        "Node.js",
        "CSS",
        "HTML",
        "Redux",
        "Firebase",
        "Adjust",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.appbrain.com/app/force-for-good/com.ffg.saas",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-f7f9635c2dc945be86094691b6687a78.r2.dev/ffg.mov",
    },
    {
      title: "Agrim",
      href: "https://agrim.app/",
      dates: "",
      active: true,
      description:
        `Agrim is an on demand B2B Agri Inputs platform working on the intersection of tech, innovation and impact to add value to both ends of agri input supply chain – Retailers and Suppliers`,
      technologies: [
        "React Native",
        "Typescript",
        "Node.js",
        "CSS",
        "HTML",
        "Redux",
        "Firebase",
        "Sentry",
      ],
      links: [
        {
          type: "Website",
          href: "https://agrim.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.agrim.agrim&hl=en_IN",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-f7f9635c2dc945be86094691b6687a78.r2.dev/agrim.mp4",
    },

  ],
  hackathons: [],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
