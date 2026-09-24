import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Architecture } from '../components/Architecture';
import { Concepts } from '../components/Concepts';
import { Achievements } from '../components/Achievements';
import { Resume } from '../components/Resume';
import { Github } from '../components/Github';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Architecture />
      <Concepts />
      <Achievements />
      <Resume />
      <Github />
      <Contact />
    </main>
  );
};
