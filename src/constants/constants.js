import Backend from '../assets/images/icons/backend.svg?react';
import Frontend from '../assets/images/icons/frontend.svg?react';
import Architecture from '../assets/images/icons/architecture.svg?react';
import Design from '../assets/images/icons/design.svg?react';
import Devops from '../assets/images/icons/devops.svg?react';
import Serverless from '../assets/images/icons/serverless.svg?react';
import Leadership from '../assets/images/icons/leadership.svg?react';
import Database from '../assets/images/icons/db.svg?react';
import CSharp from '../assets/images/tech/csharp.png';
import DotNet from '../assets/images/tech/dotnet.png';
import React from '../assets/images/tech/react.png';
import Redux from '../assets/images/tech/redux.png';
import Javascript from '../assets/images/tech/js.png';
import Typescript from '../assets/images/tech/ts.png';
import Sql from '../assets/images/tech/sql.png';
import Blazor from '../assets/images/tech/blazor.png';
import Asp from '../assets/images/tech/aspdotnet.png';
import Aws from '../assets/images/tech/aws.png';
import Node from '../assets/images/tech/node.png';
import Next from '../assets/images/tech/nextjs.png';
import Azure from '../assets/images/tech/azure.png';
import Elastic from '../assets/images/tech/elastic.png';
import Postgres from '../assets/images/tech/postgresql.png';
import Css from '../assets/images/tech/css.png';
import Wayfarer from '../assets/images/projects/wayfarer.png';
import TheHotelCo from '../assets/images/projects/thehotelcompany.png';
import TheHotelCoLight from '../assets/images/projects/hotelcompany-light.png';
import TheHotelCoMainWebsite from '../assets/images/projects/hotelcompany-website.png';
import MarketLens from '../assets/images/projects/marketlens.png';
import Pizza from '../assets/images/projects/fatboyspizza.png';
import Tap from '../assets/images/experience/tap.png';
import Trayport from '../assets/images/experience/trayport.png';
import Makers from '../assets/images/experience/makers.png';
import G3 from '../assets/images/experience/g3.png';
import StanChart from '../assets/images/experience/stanchart.png';

const skills = [
    {
        title: 'Backend Developer',
        icon: Backend,
        color: '#908484',
    },
    {
        title: 'Frontend Developer',
        icon: Frontend,
        color: '#a9ab8a',
    },
    {
        title: 'Database Design & Admin',
        icon: Database,
        color: '#718963',
    },
    {
        title: 'Software Architecture',
        icon: Architecture,
        color: '#6e7e7a',
    },
    {
        title: 'UI / UX Design',
        icon: Design,
        color: '#6c7381',
    },
    {
        title: 'Devops / CI',
        icon: Devops,
        color: '#cbbea7',
    },
    {
        title: 'AWS & Serverless',
        icon: Serverless,
        color: '#6e6666',
    },
    {
        title: 'Mentoring & Leadership',
        icon: Leadership,
        color: '#776979',
    },
];

const technologies = [
    {
        name: 'React',
        icon: React,
    },
    {
        name: 'C#',
        icon: CSharp,
    },
    {
        name: '.NET',
        icon: DotNet,
    },
    {
        name: 'SQL',
        icon: Sql,
    },
    {
        name: 'Javascript',
        icon: Javascript,
    },
    {
        name: 'Typescript',
        icon: Typescript,
    },
    {
        name: 'NextJS',
        icon: Next,
    },
    {
        name: 'Redux',
        icon: Redux,
    },
    {
        name: 'Blazor',
        icon: Blazor,
    },
    {
        name: 'ASP.NET',
        icon: Asp,
    },
    {
        name: 'Node',
        icon: Node,
    },
    {
        name: 'CSS',
        icon: Css,
    },
    {
        name: 'AWS',
        icon: Aws,
    },
    {
        name: 'Azure',
        icon: Azure,
    },
    {
        name: 'Elastic',
        icon: Elastic,
    },
    {
        name: 'Postgresql',
        icon: Postgres,
    },
];

const projects = [
    {
        name: 'MarketLens',
        image: MarketLens,
        imageLight: MarketLens,
        url: 'https://marketlenz.netlify.app',
        github: 'https://github.com/MarcusBullock/market-lens',
        description:
            'Find any stock and see a 5 year history of its performance, as well as other stock details. The dashboard shows metrics like top gaining and losing stocks for the day and daily stock news. Written in React, and the charts/metrics use Recharts.',
    },
    {
        name: 'The Hotel Company Analytics',
        image: TheHotelCo,
        imageLight: TheHotelCoLight,
        url: 'https://thehotelcompany.netlify.app',
        github: 'https://github.com/MarcusBullock/The-Hotel',
        description:
            'A back office website for finance analytics, sales data, and booking management for a fictional hotel company. Uses React with Styled Components for styling, React Query for global state management, and Supabase for database / authentication and image storage.',
    },
    {
        name: 'The Hotel Company',
        image: TheHotelCoMainWebsite,
        imageLight: TheHotelCoMainWebsite,
        url: 'https://thehotelcompany-marcusbullocks-projects.vercel.app',
        github: 'https://github.com/MarcusBullock/the-hotel-company-website',
        description:
            'A fictional hotel company website, where users can view rooms and make bookings, and manage these bookings in their customer accounts. Written using the server side rendering framework NextJS. Uses Tailwind for styling and Supabase for database/Google authentication/image storage.',
    },
    {
        name: 'Wayfarer',
        image: Wayfarer,
        imageLight: Wayfarer,
        url: 'https://waayfarer.netlify.app/',
        github: 'https://github.com/MarcusBullock/Wayfarer',
        description:
            "A React JS application to keep track of all the places you've been in the world, with Google maps-like pin drop functionality using React Leaflet maps. The app uses a small Node.js backend server to manage your visited cities.",
    },
    {
        name: "Fatboy's Pizza",
        image: Pizza,
        imageLight: Pizza,
        url: 'https://fatboys-pizza.netlify.app/',
        github: 'https://github.com/MarcusBullock/Online-Pizza-Delivery',
        description:
            'A basic online pizza delivery website with React Router fetch-as-you-render functionality to get menu API data, Redux/Thunk for global state management, and styling with Tailwind.css',
    },
];

const experiences = [
    {
        title: 'Senior Software Developer',
        company: 'The Adventure People',
        icon: Tap,
        startDate: 'November 2019',
        endDate: 'Present',
        desc: 'Hugely autonomous role in a dynamic startup environment. Leader on many projects developing new and existing applications involving C#, React/Typescript, SQL Server, AWS, Elastic and too many others to mention. Co-led the dev team responsible for growing the company from its infancy to annual revenues in the dozens of millions of pounds.',
    },
    {
        title: 'Software Developer',
        company: 'Trayport',
        icon: Trayport,
        startDate: 'May 2016',
        endDate: 'November 2019',
        desc: "Full stack developer at the world's top energy trading software provider, working primarily in .NET, SQL Server and React/Typescript, working with some of the brightest minds in the industry at the forefront of commodities and energy trading software.",
    },
    {
        title: 'Development Bootcamp Graduate',
        company: "Maker's Academy",
        icon: Makers,
        startDate: 'November 2015',
        endDate: 'April 2016',
        desc: 'I took a sabbatical while working at G3 to really further my computer science and web development skills at the industry leading coding bootcamp.',
    },
    {
        title: 'Analyst / Software Developer',
        company: 'G3',
        icon: G3,
        startDate: 'October 2011',
        endDate: 'April 2016',
        desc: 'Part of the cyber security team at an industry leading corporate intelligence firm serving FTSE100 clients and high net worth individuals. I trained as an in-house software developer as well as an analyst on corporate intelligence projects.',
    },
    {
        title: 'Corporate Affairs Intern',
        company: 'Standard Chartered Bank',
        icon: StanChart,
        startDate: 'May 2011',
        endDate: 'October 2011',
        desc: 'Finance intern at the corporate affairs department at a world leading bank',
    },
];

export { skills, technologies, projects, experiences };
