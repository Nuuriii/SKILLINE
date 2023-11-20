import { screen, render } from '@testing-library/react';
import Footer from './footer';

describe('test text & test img alt', () => {
  test('test text', () => {
    render(<Footer />);
    const title = screen.getByText('Virtual Class for Zoom');
    const label = screen.getByText('Subscribe to get our Newsletter');
    const placeHolder = screen.getByPlaceholderText('Your Email');
    const btnText = screen.getByText('Subscribe');
    const careers = screen.getByText('Careers');
    const privacyPolicy = screen.getByText('Privacy Policy');
    const terms = screen.getByText('Terms & Conditions');
    const copyright = screen.getByText('© 2021 Class Technologies Inc.');

    expect(title).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(placeHolder).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();
    expect(careers).toBeInTheDocument();
    expect(privacyPolicy).toBeInTheDocument();
    expect(terms).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();
  });
});
