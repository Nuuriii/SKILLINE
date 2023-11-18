import { render, screen } from '@testing-library/react';
import ForEducator from './forEducator';

describe('test text and img alt', () => {
  test('test text', () => {
    render(<ForEducator />);
    const h1 = screen.getByRole('heading', { level: 1 });
    const title = 'Class Management Tools for Educators';
    const desc = screen.getByText(
      'Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.',
    );

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(title);
    expect(desc).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<ForEducator />);
    const gradeBook = screen.getByAltText('gradebook-img');

    expect(gradeBook).toBeVisible();
  });
});
