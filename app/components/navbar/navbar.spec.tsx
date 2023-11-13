// Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

describe('check text and img alt', () => {
  test('check text', () => {
    render(<Navbar />);
    const findTitle = screen.getByText('Skilline');
    const findHome = screen.getAllByText('Home');
    const findCareers = screen.getAllByText('Careers');
    const findBlog = screen.getAllByText('Blog');
    const findAbout = screen.getAllByText('About Us');
    const findLogin = screen.getAllByText('Login');
    const findSignUp = screen.getAllByText('Sign Up');

    expect(findTitle).toBeInTheDocument();
    expect(findHome[0]).toBeInTheDocument();
    expect(findHome[1]).toBeInTheDocument();
    expect(findCareers[0]).toBeInTheDocument();
    expect(findCareers[1]).toBeInTheDocument();
    expect(findBlog[0]).toBeInTheDocument();
    expect(findBlog[1]).toBeInTheDocument();
    expect(findAbout[0]).toBeInTheDocument();
    expect(findAbout[1]).toBeInTheDocument();
    expect(findLogin[0]).toBeInTheDocument();
    expect(findLogin[1]).toBeInTheDocument();
    expect(findSignUp[0]).toBeInTheDocument();
    expect(findSignUp[1]).toBeInTheDocument();
  });
  test('check img alt', () => {
    render(<Navbar />);
    const findIconLogo = screen.getByAltText('icon');
    const findHamburger = screen.getByAltText('hamburger');

    expect(findIconLogo).toBeVisible();
    expect(findHamburger).toBeVisible();
  });
});
