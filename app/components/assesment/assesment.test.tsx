import { screen, render } from '@testing-library/react';
import Assesment from './assesment';

describe('test text and img alt', () => {
  test('test text', () => {
    render(<Assesment />);
    const question = screen.getByText('Question 1');
    const cardTitle = screen.getByText(
      'True or false? This play takes place in Italy',
    );
    const miniCardTitle = screen.getByText('Your answer was sent successfully');
    const h1 = screen.getByRole('heading', { level: 1 });
    const title = 'Assessments, Quizzes, Tests';
    const desc = screen.getByText(
      'Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.',
    );

    expect(question).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(miniCardTitle).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(title);
    expect(desc).toBeInTheDocument();
  });
});
