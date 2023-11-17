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
  test('test img alt', () => {
    render(<Assesment />);
    const orange = screen.getByAltText('orange-icon');
    const purple = screen.getByAltText('purple-icon');
    const close = screen.getByAltText('close-icon');
    const success = screen.getByAltText('success-icon');
    const red = screen.getByAltText('red-icon');
    const green = screen.getByAltText('green-icon');
    const river = screen.getByAltText('river-img');
    const plane = screen.getByAltText('plane-icon');
    const bigGreen = screen.getByAltText('big-green-transparent');
    const smallGreen = screen.getByAltText('small-green-transparent');

    expect(orange).toBeVisible();
    expect(purple).toBeVisible();
    expect(close).toBeVisible();
    expect(success).toBeVisible();
    expect(red).toBeVisible();
    expect(green).toBeVisible();
    expect(river).toBeVisible();
    expect(plane).toBeVisible();
    expect(bigGreen).toBeVisible();
    expect(smallGreen).toBeVisible();
  });
});
