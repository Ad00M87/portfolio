import CNDU from '../images/canduu.png';
import DPS1 from '../images/dps1.png';
import DRF1 from '../images/drfr1.png';
import JKD1 from '../images/jkd1.png';
import VOC1 from '../images/vocab1.png';
import WHN from '../images/whistlenat.png';

export const projects = [
  {
    id: 1,
    name: "CanDuu",
    description: {
      narritive: "CanDuu is a software based on connecting providers and customers. The application will be available on both the web and mobile devices",
      languages: "Ruby on Rails backend with a React/ReactNative frontend"
    },
    bulletPoints: [
      "Integration of Redux to build several front-end features including work-order requests, work provider searches, and a Q and A message board for work-orders.",
      "Working as a team lead over 4 intern developers for build of web portion of application.",
      "Responsible for building a React Native mobile application.",
      "Web portion of project is still under construction."
    ],
    media: [ { image: CNDU, type: "mobile"} ],
    movie: 0,
    types: ["Mobile", "Web"],
    year: "2018"
  },
  {
    id: 2,
    name: "Whistle Recruiting",
    description: {
      narritive: "Whistle Recruiting is a software focused on collegiate sport recruiting. It helps to make recruiting processes easier for both college coaches and administrators. The is available on both the web and mobile devices",
      languages: "Ruby on Rails backend with a React/ReactNative frontend"
    },
    bulletPoints: [
      "Refactoring of code from Rails 4/Angular to Rails 5/React for web application.",
      "Improved functionality of coach and compliance report generator by adding administrative ability to customize and export database queries via SQL and active record.",
      "Rebuild of old React-Native application with focus on improved UI/UX, functionality, and speed.",
      "Managed and mentored two developers on automated/manual testing principles"
    ],
    media: [ { image: WHN, type: "mobile"} ],
    movie: 1,
    video: 6,
    types: ["Mobile", "Web"],
    year: "2017"
  },
  {
    id: 3,
    name: "DevPoint Studios Website",
    description: {
      narritive: "DevPoint Studios is a web and software development firm working with local companies to build applications.",
      languages: "A static website built with a React frontend"
    },
    bulletPoints: [
      "Redeveloping existing code base to be more responsive with a large focus on mobile devices.",
      "Developing new React components to allow for easy management and modifications to the static website"
    ],
    media: [ { image: DPS1, type: "web"} ],
    movie: 2,
    types: ["Web"],
    year: "2018"
  },
  {
    id: 4,
    name: "JessieKDesign",
    description: {
      narritive: "JessieKDesign is a website that specializes in DIY projects and free printables.",
      languages: "WordPress website"
    },
    bulletPoints: [
      "Updating CSS and HTML as needed.",
      "Implemented Email Opt-ins",
      "Brought revenue to the website by implementing affiliate advertising."
    ],
    media: [ { image: JKD1, type: "web"} ],
    movie: 3,
    types: ["Web"],
    year: "2017"
  },
  {
    id: 5,
    name: "Dr. Frank",
    description: {
      narritive: "A personal project that was created for fun.",
      languages: "A static website built with a React frontend"
    },
    bulletPoints: [
      "Fun personal, Halloween project",
      "Built with React, using some vanilla Javascript",
      "First time creating custom Illustrator images"
    ],
    media: [ { image: DRF1, type: "web"} ],
    movie: 4,
    types: ["Web"],
    year: "2017"
  },
  {
    id: 6,
    name: "devpointlabs/vocab",
    description: {
      narritive: "DevPoint Labs is a full-stack bootcamp. A team of teaching assistants developed a system to help students keep track of hard to understand coding terms.",
      languages: "Ruby on Rails backend with a React frontend"
    },
    bulletPoints: [
      "A web application to help coding learners to review unfamiliar terms.",
      "Worked on building better UI/UX"
    ],
    media: [ { image: VOC1, type: "web"} ],
    movie: 5,
    types: ["Web"],
    year: "2017"
  }
]
