import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { node, bool } from 'prop-types';
import { Outlet } from 'react-router-dom';

function RootLayout({ children, sidebar = false }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {sidebar && <Sidebar />}
      <Footer />
    </>
  );
}

RootLayout.propTypes = {
  children: node,
  sidebar: bool,
};

export default RootLayout;
