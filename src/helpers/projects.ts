const javascript =
  'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png';
const python =
  'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png';
const typescript =
  'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png';
const react =
  'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';
const node =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png';
export interface propsInterface {
  icons: string[];
  name: string;
  description: string;
  demoData: string;
  projectLink: string;
  githubLink: string;
}
// Process projects and convert icons to URLs
export const projects = [
  {
    icons: [react, node, javascript],
    name: 'Rodarrent car rental',
    description:
      'This app was made for a car rental company in order to manage customers and reservations. It features Google authentication and payment integration with Mercado Pago API',
    demoData: '\nLogin as customer: use your google account\nLogin as admin (check admin dashboard): \nEmail: admin@admin.com \nPassword: Admin2023',
    projectLink: 'https://rodarrent.vercel.app/',
    githubLink: 'https://github.com/matta-ale/RodarRent-backend',
  },
  {
    icons: [react, node, javascript],
    name: 'Notes App',
    description:
      'An app to take notes and manage tags and filters. I manages different users, notes and tags keeping the data in a postgresql database.',
    demoData: '\nUser: demo_account \nPassword: Demopassword1!',
    projectLink: 'http://3.140.216.125/',
    githubLink: 'https://github.com/matta-ale/notes-app-public-repo',
  },
  {
    icons: [react, node, javascript],
    name: 'Videogames',
    description:
      'Individual Project for soyHenry bootcamp. It fetches videogames from an API and features a database to create and save new ones',
    demoData: '',
    projectLink: 'http://52.15.170.33/',
    githubLink: 'https://github.com/matta-ale/PI-VIDEOGAMES',
  },
  {
    icons: [python],
    name: '3barhl',
    description:
      'Trading bot for 3barhl trading strategy. This bot trades different cryptocurrencies through Binance exchange API. It operates 24/7 and logs what it is doing and results to a telegram chat.',
    demoData: '',
    projectLink: '#',
    githubLink: 'https://github.com/matta-ale/3barhl',
  },
  {
    icons: [python],
    name: 'Momentum',
    description:
      'Trading bot for Momentum trading strategy. This bot trades different cryptocurrencies through Binance exchange API. It operates 24/7 and logs what it is doing and results to a telegram chat.',
    demoData: '',

    projectLink: '#',
    githubLink: 'https://github.com/matta-ale/momentum',
  },
  {
    icons: [react, typescript],
    name: 'Portfolio Website',
    description:
      'This precise website to show my personal work as a developer. It is a react-vite project writen in typescript. No backend in this case.',
    demoData: '',

    projectLink: '#',
    githubLink: 'https://github.com/matta-ale/portfolio',
  },
];
