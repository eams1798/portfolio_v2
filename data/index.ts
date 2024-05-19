import { hexagonContact, hexagonSkill, project } from "../interfaces";

export const projects: project[] = [
  {
    name: 'World Cup Score Simulator',
    description: 'This is a project I created to simulate the results of the FIFA World Cup Qatar 2022. Includes tables by group and a general table to follow the performance of the 32 simulated teams. Allows to set the time zone and change the language between English and Spanish',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://eams1798.github.io/world-cup-score-simulator/',
    image: "https://raw.githubusercontent.com/eams1798/projects-images/main/portfolio_v2/world-cup-score-simulator.png"
  }, {
    name: 'BlogApp',
    description: 'BlogApp is a blog application that allows users to create, read, update, and delete blog posts. Complemented with a CI/CD pipeline and Docker containerization. Made for the course of University of Helsinki "Full Stack Open".',
    tech: ['TypeScript', 'React', 'Redux', 'Bootstrap', 'Jest', 'Cypress', 'ExpressJS', 'MongoDB', 'Github Actions', 'Docker', 'Nginx'],
    url: 'https://github.com/eams1798/part12-containers-applications/tree/main/blogapp-docker',
    image: "https://raw.githubusercontent.com/eams1798/projects-images/main/portfolio_v2/blogapp.png"
  }, {
    name: 'AirBnB Clone',
    description: 'An AirBnB clone that allows users to search available rooms and book them, and look for comments and reviews. Made for Holberton School final project.',
    tech: ['HTML', 'CSS', 'jQuery', 'Python', 'Flask', 'MySQL', 'Nginx'],
    url: 'https://github.com/eams1798/AirBnB_clone_v4/',
    image: "https://raw.githubusercontent.com/eams1798/projects-images/main/portfolio_v2/AirBnB_clone_v4.png"
  }
]

export const contacts: hexagonContact[] = [
  {
    name: 'Github',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    url: 'https://github.com/eams1798',
    coordinates: {
      x: -1,
      y: 1,
      z: 0
    },
    type: 'contact',
    action: 'visit'
  }, {
    name: 'Medium',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/medium/medium-original.svg',
    url: 'https://medium.com/@eams1798',
    coordinates: {
      x: -1,
      y: 0,
      z: 1
    },
    type: 'contact',
    action: 'visit'
  }, {
    name: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    url: 'https://www.linkedin.com/in/eams1798/',
    coordinates: {
      x: 0,
      y: 1,
      z: 1
    },
    type: 'contact',
    action: 'visit'
  }, {
    name: "Gmail",
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gmail/gmail-original.svg',
    url: 'eams1798@gmail.com',
    coordinates: {
      x: 1,
      y: 1,
      z: 1
    },
    type: 'contact',
    action: 'copy'
  }, {
    name: "WhatsApp",
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg',
    url: 'https://wa.me/17812493698',
    coordinates: {
      x: 1,
      y: 0,
      z: -1
    },
    type: 'contact',
    action: 'copy'
  }
]

export const skills: hexagonSkill[] = [
  {
    id: 'html',
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    coordinates: {
      x: 1,
      y: -1,
      z: 0
    },
    type: 'skill'
  }, {
    id: 'css',
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    coordinates: {
      x: 0,
      y: 0,
      z: 0
    },
    type: 'skill'
  }, {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    coordinates: {
      x: 2,
      y: -1,
      z: 1
    },
    type: 'skill'
  },{
    id: 'react',
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
    url: 'https://reactjs.org/',
    coordinates: {
      x: 1,
      y: 0,
      z: 1
    },
    type: 'skill'
  }, {
    id: 'sass',
    name: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    description: 'Sass is an extension of CSS, adding additional features like variables, nesting, mixins, and more.',
    url: 'https://sass-lang.com/',
    coordinates: {
      x: 0,
      y: 1,
      z: 1
    },
    type: 'skill'
  }, {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    url: 'https://www.typescriptlang.org/',
    coordinates: {
      x: 2,
      y: 0,
      z: 2
    },
    type: 'skill'
  }, {
    id: 'express',
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    url: 'https://expressjs.com/',
    coordinates: {
      x: 1,
      y: 1,
      z: 2
    },
    type: 'skill'
  }, {
    id: 'flask',
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    description: 'Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.',
    url: 'https://flask.palletsprojects.com/',
    coordinates: {
      x: 0,
      y: 2,
      z: 2
    },
    type: 'skill'
  }, {
    id: 'mongodb',
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'MongoDB is a source-available cross-platform document-oriented database program.',
    url: 'https://www.mongodb.com/',
    coordinates: {
      x: 3,
      y: 0,
      z: 3
    },
    type: 'skill'
  }, {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    url: 'https://nodejs.org/en/',
    coordinates: {
      x: 2,
      y: 1,
      z: 3
    },
    type: 'skill'
  }, {
    id: 'python',
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Python is a high-level, general-purpose programming language.',
    url: 'https://www.python.org/',
    coordinates: {
      x: 1,
      y: 2,
      z: 3
    },
    type: 'skill'
  }, {
    id: 'redis',
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    description: 'Redis is an in-memory database that persists data in the form of key-value pairs.',
    url: 'https://redis.io/',
    coordinates: {
      x: 3,
      y: 1,
      z: 4
    },
    type: 'skill'
  }, {
    id: 'mysql',
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'MySQL is an open source relational database management system.',
    url: 'https://www.mysql.com/',
    coordinates: {
      x: 2,
      y: 2,
      z: 4
    },
    type: 'skill'
  }, {
    id: 'git',
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    url: 'https://git-scm.com/',
    coordinates: {
      x: 1,
      y: 3,
      z: 4
    },
    type: 'skill'
  }, {
    id: 'graphql',
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    description: 'GraphQL is a query language for your API. It lets you fetch and integrate data from a variety of sources.',
    url: 'https://graphql.org/',
    coordinates: {
      x: 3,
      y: 2,
      z: 5
    },
    type: 'skill'
  }, {
    id: 'bash',
    name: 'Bash',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    description: 'Bash is a Unix shell and command language.',
    url: 'https://www.gnu.org/software/bash/',
    coordinates: {
      x: 2,
      y: 3,
      z: 5
    },
    type: 'skill'
  }, {
    id: 'github-actions',
    name: 'GitHub Actions',
    icon: 'https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png',
    description: 'GitHub Actions is a continuous integration service for GitHub.',
    url: 'https://github.com/features/actions',
    coordinates: {
      x: 1,
      y: 4,
      z: 5
    },
    type: 'skill'
  }, {
    id: 'docker',
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Docker is a package manager for containerized applications.',
    url: 'https://www.docker.com/',
    coordinates: {
      x: 4,
      y: 2,
      z: 6
    },
    type: 'skill'
  }, {
    id: 'nginx',
    name: 'Nginx',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    description: 'Nginx is an HTTP and reverse proxy server.',
    url: 'https://nginx.org/',
    coordinates: {
      x: 3,
      y: 3,
      z: 6
    },
    type: 'skill'
  }
]