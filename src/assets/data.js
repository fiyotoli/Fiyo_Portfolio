// src/components/Blog/data.js

import reactHooksImage from './thut poster 1.png';
import nodejsGuideImage from './thut infographics.png';
import cssGridFlexboxImage from './be gratful poster1.png';

const blogData = [
  {
    id: 1,
    image: reactHooksImage, // Image imported from assets
    title: 'Understanding React Hooks',
    description:
      'React Hooks are functions that let you use state and other React features without writing a class. They make it easier to share logic between components and improve code readability.',
    date: '2024-04-15',
  },
  {
    id: 2,
    image: nodejsGuideImage, // Image imported from assets
    title: 'A Guide to Node.js',
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript on the server side.",
    date: '2024-03-10',
  },
  {
    id: 3,
    image: cssGridFlexboxImage, // Image imported from assets
    title: 'CSS Grid vs Flexbox',
    description:
      'CSS Grid and Flexbox are powerful layout systems in CSS. Grid is best for two-dimensional layouts, while Flexbox is ideal for one-dimensional layouts. Understanding when to use each can greatly enhance your web design.',
    date: '2024-02-05',
  },
];

export default blogData;
