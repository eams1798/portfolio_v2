import { hexagonContact, hexagonSkill, project } from "../interfaces";

export const projects: project[] = [
  {
    name: 'World Cup Score Simulator',
    description: 'wcss-description',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://eams1798.github.io/world-cup-score-simulator/',
    image: "https://raw.githubusercontent.com/eams1798/projects-images/main/portfolio_v2/world-cup-score-simulator.png"
  }, {
    name: 'BlogApp',
    description: 'blogapp-description',
    tech: ['TypeScript', 'React', 'Redux', 'Bootstrap', 'Jest', 'Cypress', 'ExpressJS', 'MongoDB', 'Github Actions', 'Docker', 'Nginx'],
    url: 'https://github.com/eams1798/part12-containers-applications/tree/main/blogapp-docker',
    image: "https://raw.githubusercontent.com/eams1798/projects-images/main/portfolio_v2/blogapp.png"
  }, {
    name: 'AirBnB Clone',
    description: 'airbnb-clone-description',
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
      x: 0,
      y: 0,
      z: 0
    },
    type: 'contact',
    action: 'visit'
  }, {
    name: 'Medium',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-medium-3855923-3201557.png?f=webp',
    url: 'https://eams.medium.com/',
    coordinates: {
      x: 0,
      y: 1,
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
      y: 2,
      z: 2
    },
    type: 'contact',
    action: 'visit'
  }, {
    name: "Gmail",
    icon: 'https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png',
    url: 'eams1798@gmail.com',
    coordinates: {
      x: 1,
      y: 0,
      z: 1
    },
    type: 'contact',
    action: 'copy'
  }, {
    name: "WhatsApp",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png',
    url: 'https://wa.me/17812493698',
    coordinates: {
      x: 1,
      y: 1,
      z: 2
    },
    type: 'contact',
    action: 'visit'
  }
]

export const skills: hexagonSkill[] = [
  {
    id: 'html',
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: "html-description",
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
    description: "css-description",
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
    description: "javascript-description",
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
    description: "react-description",
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
    description: "sass-description",
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
    description: "typescript-description",
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
    description: "express-description",
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
    description: "flask-description",
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
    description: "mongodb-description",
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
    description: "nodejs-description",
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
    description: "python-description",
    url: 'https://www.python.org/',
    coordinates: {
      x: 1,
      y: 2,
      z: 3
    },
    type: 'skill'
  },{
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    description: "bootstrap-description",
    url: 'https://getbootstrap.com/',
    coordinates: {
      x: 0,
      y: 3,
      z: 3
    },
    type: 'skill'
  }, {
    id: 'redis',
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    description: "redis-description",
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
    description: "mysql-description",
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
    description: "git-description",
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
    description: "graphql-description",
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
    description: "bash-description",
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
    description: "github-actions-description",
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
    description: "docker-description",
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
    description: "nginx-description",
    url: 'https://nginx.org/',
    coordinates: {
      x: 3,
      y: 3,
      z: 6
    },
    type: 'skill'
  }
]