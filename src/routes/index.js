import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Import Page Views
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Programs } from '../pages/Programs/Programs';
import { Research } from '../pages/Research/Research';
import { Events } from '../pages/Events/Events';
import { Membership } from '../pages/Membership/Membership';
import { Gallery } from '../pages/Gallery/Gallery';
import { Blog } from '../pages/Blog/Blog';
import { FAQ } from '../pages/FAQ/FAQ';
import { Contact } from '../pages/Contact/Contact';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="research" element={<Research />} />
        <Route path="events" element={<Events />} />
        <Route path="membership" element={<Membership />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
