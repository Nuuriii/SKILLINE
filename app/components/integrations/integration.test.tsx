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
    expect(btnText).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<Integrations />);
    const oneDrive = screen.getByAltText('one-drive-icon');
    const dropBox = screen.getByAltText('dropbox-icon');
    const googleDrive = screen.getByAltText('drive-icon');
    const microsoftTeams = screen.getByAltText('teams-icon');

    expect(oneDrive).toBeVisible();
    expect(dropBox).toBeVisible();
    expect(googleDrive).toBeVisible();
    expect(microsoftTeams).toBeVisible();
  });
});
