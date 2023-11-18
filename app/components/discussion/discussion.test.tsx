import { screen, render } from '@testing-library/react';
import Discussion from './discussion';

describe('test text & test img alt', () => {
  test('test text', () => {
    render(<Discussion />);
    const h1 = screen.getByRole('heading', { level: 1 });
    const title = 'One-on-One Discussions';
    const desc = screen.getByText(
      'Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.',
    );

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(title);
    expect(desc).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<Discussion />);
    const discussionImg = screen.getByAltText('discussion-img');

    expect(discussionImg).toBeVisible();
  });
});
