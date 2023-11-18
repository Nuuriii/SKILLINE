import { screen, render } from '@testing-library/react';
import Integrations from './integrations';

describe('test text & img alt', () => {
  test('test text', () => {
    render(<Integrations />);
    const h1 = screen.getByRole('heading', { level: 1 });
    const title = '200+ educational tools and platform integrations';
    const desc = screen.getByText(
      'Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.',
    );
    const btnText = screen.getByText('See All Integrations');

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(title);
    expect(desc).toBeInTheDocument();
  });
});
