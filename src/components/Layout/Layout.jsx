import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Footer } from '../Footer/Footer';
import { MainWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </MainWrapper>
      <Footer />
    </>
  );
};
