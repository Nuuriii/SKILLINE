import { screen, render } from '@testing-library/react';
import Features from './features';

describe('test text and img alt', () => {
  test('test text', () => {
    render(<Features />);
    const H2Element = screen.getByRole('heading', { level: 2 });
    const findOur = screen.getByText('Our');
    const findFeatures = screen.getByText('Features');
    const findDesc = screen.getByText(
      'This very extraordinary feature, can make learning activities more efficient',
    );
    const findClassroom = 'A user interface designed for the classroom';
    const firstDescItem = screen.getByText(
      'Teachers don’t get lost in the grid view and have a dedicated Podium space.',
    );
    const secondDescItem = screen.getByText(
      'TA’s and presenters can be moved to the front of the class.',
    );
    const thirdDescItem = screen.getByText(
      'Teachers can easily see all students and class data at one time.',
    );

    expect(findOur).toBeInTheDocument();
    expect(findFeatures).toBeInTheDocument();
    expect(findDesc).toBeInTheDocument();
    expect(H2Element).toHaveTextContent(findClassroom);
    expect(firstDescItem).toBeInTheDocument();
    expect(secondDescItem).toBeInTheDocument();
    expect(thirdDescItem).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<Features />);
    const meetingsIcon = screen.getByAltText('meetings-icon');
    const gridIcon = screen.getByAltText('grid-icon');
    const squareIcon = screen.getByAltText('square-icon');
    const teamsIcon = screen.getByAltText('purple-teams-icon');

    expect(meetingsIcon).toBeVisible();
    expect(gridIcon).toBeVisible();
    expect(squareIcon).toBeVisible();
    expect(teamsIcon).toBeVisible();
  });
});
