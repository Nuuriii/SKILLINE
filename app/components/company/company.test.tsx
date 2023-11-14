import { screen, render } from '@testing-library/react';
import Company from './company';

describe('check text and img alt', () => {
  test('check text', () => {
    render(<Company />);
    const findTitle = screen.getByText('Trusted by 5,000+ Companies Worldwide');

    expect(findTitle).toBeInTheDocument();
  });
  test('check img alt', () => {
    render(<Company />);
    const findGrayGoogle = screen.getByAltText('gray-google');
    const findGrayNetflix = screen.getByAltText('gray-netflix');
    const findGrayAirBnb = screen.getByAltText('gray-airbnb');
    const findGrayAmazon = screen.getByAltText('gray-amazon');
    const findGrayFacebook = screen.getByAltText('gray-facebook');
    const findGrayGrab = screen.getByAltText('gray-grab');

    expect(findGrayGoogle).toBeVisible();
    expect(findGrayNetflix).toBeVisible();
    expect(findGrayAirBnb).toBeVisible();
    expect(findGrayAmazon).toBeVisible();
    expect(findGrayFacebook).toBeVisible();
    expect(findGrayGrab).toBeVisible();
  });
});
