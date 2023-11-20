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
    const googleIcon = screen.getAllByAltText('google-icon');
    const netflixIcon = screen.getAllByAltText('netflix-icon');
    const airBnbIcon = screen.getAllByAltText('airbnb-icon');
    const amazonIcon = screen.getAllByAltText('amazon-icon');
    const facebookIcon = screen.getAllByAltText('facebook-icon');
    const grabIcon = screen.getAllByAltText('grab-icon');

    expect(googleIcon[0]).toBeVisible();
    expect(googleIcon[1]).toBeVisible();
    expect(netflixIcon[0]).toBeVisible();
    expect(netflixIcon[1]).toBeVisible();
    expect(airBnbIcon[0]).toBeVisible();
    expect(airBnbIcon[1]).toBeVisible();
    expect(amazonIcon[0]).toBeVisible();
    expect(amazonIcon[1]).toBeVisible();
    expect(facebookIcon[0]).toBeVisible();
    expect(facebookIcon[1]).toBeVisible();
    expect(grabIcon[0]).toBeVisible();
    expect(grabIcon[1]).toBeVisible();
  });
});
