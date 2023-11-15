import { screen, render } from '@testing-library/react';
import WhatIs from './whatIs';

describe('test text and img alt', () => {
  test('test text', () => {
    render(<WhatIs />);
    const findWhatIs = screen.getByText('What is');
    const findSkillineText = screen.getByText('Skilline?');
    const desc = screen.getByText(
      'Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.',
    );
    const firstTitle = screen.getByText('FOR INSTRUCTORS');
    const secondTitle = screen.getByText('FOR STUDENTS');
    const firstDesc = screen.getByText('Start a class today');
    const secondDesc = screen.getByText('Enter access code');

    expect(findWhatIs).toBeInTheDocument();
    expect(findSkillineText).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(firstTitle).toBeInTheDocument();
    expect(secondTitle).toBeInTheDocument();
    expect(firstDesc).toBeInTheDocument();
    expect(secondDesc).toBeInTheDocument();
  });
});
