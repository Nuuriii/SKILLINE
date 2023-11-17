import { screen, render } from '@testing-library/react';
import ForTeachAndLearn from './forTeachAndLearn';

describe('test text & img alt', () => {
  test('test text', () => {
    render(<ForTeachAndLearn />);
    const h1Element = screen.getByRole('heading', { level: 1 });
    const titleText = 'Tools For Teachers And Learners';
    const desc = screen.getByText(
      'Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.',
    );

    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent(titleText);
    expect(desc).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<ForTeachAndLearn />);
    const studentImage = screen.getByAltText('student-img');

    expect(studentImage).toBeVisible();
  });
});
