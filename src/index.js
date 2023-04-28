import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const images = [
  {
    url: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Computers',
    details: 'A computer is an electronic device that can accept and process input data to perform a variety of tasks. It consists of hardware components, such as the central processing unit (CPU), memory, and storage, and software programs that provide instructions to the hardware. Computers can be used for a wide range of applications, including word processing, data management, graphic design, gaming, communication, and entertainment.'
  },
  {
    url: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Computers For Kids',
    details: "Computers are essential tools for kids in today's digital age. They provide numerous opportunities for learning, entertainment, and communication. Computers can enhance children's creativity and problem-solving skills, as they can engage with interactive educational software, games, and apps that challenge their minds and stimulate their curiosity."
  },
  {
    url: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Computers For Coding',
    details: "Coding, also known as programming, refers to the process of designing, writing, and testing computer programs. It involves using a programming language to communicate with a computer and create a set of instructions that it can understand and execute. Coding is a valuable skill in today's technology-driven world, and it has a wide range of applications across various industries, including software development, web design, data analysis, and artificial intelligence. "
  },
  // ... more images can be added here
];
console.log(images.length)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App images={images}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
