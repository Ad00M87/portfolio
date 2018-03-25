import CNDU from '../images/canduu.png';
import CNDUM from '../images/CanDuu.mov';
import CDN2 from '../images/canduu2.png';
import CDN3 from '../images/canduu3.png';
import DPSM from '../images/DPS.mov';
import DPS1 from '../images/dps1.png';
import DPS2 from '../images/dps2.png';
import DFRM from '../images/DrFrank.mov';
import DRF1 from '../images/drfr1.png';
import DRF2 from '../images/drfr2.png';
import DRF3 from '../images/drfr3.png';
import JKDM from '../images/JessieKDesign.mov';
import JKD1 from '../images/jkd1.png';
import VOCM from '../images/Vocab.mov';
import VOC1 from '../images/vocab1.png';
import WHN from '../images/whistlenat.png';
import WHNM from '../images/WhistleNative.mov';
import WHN2 from '../images/whn2.png';
import WHN3 from '../images/whn3.png';
import WHN4 from '../images/whn4.png';
import WHW1 from '../images/whw1.png';
import WHW2 from '../images/whw2.png';

export const projects = [
  {
    id: 1,
    name: "CanDuu",
    bulletPoints: [
      "Integration of Redux to build several front-end features including work-order requests, work provider searches, and a Q and A message board for work-orders.",
      "Working as a team lead over 4 intern developers for build of web portion of application.",
      "Responsible for building a React Native mobile application."
    ],
    media: [ { image: CNDU, type: "mobile"} ],
    movie: CNDUM,
    types: ["Mobile", "Web"],
    year: "2018"
  },
  {
    id: 2,
    name: "Whistle Recruiting",
    bulletPoints: [
      "Refactoring of code from Rails 4/Angular to Rails 5/React for web application.",
      "Improved functionality of coach and compliance report generator by adding administrative ability to customize and export database queries via SQL and active record.",
      "Rebuild of old React-Native application with focus on improved UI/UX, functionality, and speed.",
      "Managed and mentored two developers on automated/manual testing principles"
    ],
    media: [ { image: WHN, type: "mobile"} ],
    movie: WHNM,
    types: ["Mobile", "Web"],
    year: "2017"
  },
  {
    id: 3,
    name: "DevPoint Studios Website",
    bulletPoints: [
      "Redeveloping existing code base to be more responsive with a large focus on mobile devices.",
      "Developing new React components to allow for easy management and modifications to the static website"
    ],
    media: [ { image: DPS1, type: "web"} ],
    movie: DPSM,
    types: ["Web"],
    year: "2018"
  },
  {
    id: 4,
    name: "JessieKDesign",
    bulletPoints: [
      "Updating CSS and HTML as needed for a WordPress website.",
      "Brought revenue to the website by implementing affiliate advertising."
    ],
    media: [ { image: JKD1, type: "web"} ],
    movie: JKDM,
    types: ["Web"],
    year: "2017"
  },
  {
    id: 5,
    name: "Dr. Frank",
    bulletPoints: [
      "Fun personal, Halloween project",
      "Built with React, using some vanilla Javascript",
      "First time creating custom Illustrator images"
    ],
    media: [ { image: DRF1, type: "web"} ],
    movie: DFRM,
    types: ["Web"],
    year: "2017"
  },
  {
    id: 6,
    name: "devpointlabs/vocab",
    bulletPoints: [
      "A web application to help coding learners to review unfamiliar terms.",
      "Worked on building better UI/UX"
    ],
    media: [ { image: VOC1, type: "web"} ],
    movie: VOCM,
    types: ["Web"],
    year: "2017"
  }
]
