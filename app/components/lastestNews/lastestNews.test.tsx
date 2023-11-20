import { screen, render } from '@testing-library/react';
import LastestNews from './lastestNews';

describe('test text & test img alt', () => {
  test('test text', () => {
    render(<LastestNews />);
    const title = screen.getByText('Frontend Web Developer Intern');
    const desc = screen.getByText(
      'See the developments that have occurred to Skillines in the world',
    );
    const firstLabel = screen.getAllByText('NEWS');
    const secondLabel = screen.getAllByText('PRESS RELEASE');
    const bigNewsTitle = screen.getByText(
      'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
    );
    const bigNewsDesc = screen.getByText(
      'Class Technologies Inc., the company that created Class,...',
    );
    const firstTitle = screen.getByText(
      'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
    );
    const secondTitle = screen.getByText(
      'Zoom’s earliest investors are betting millions on a better Zoom for schools',
    );
    const thirdTitle = screen.getByText(
      'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
    );
    const firstDesc = screen.getByText(
      'Class Technologies Inc., the company that created Class,...',
    );
    const secondDesc = screen.getByText(
      'Zoom was never created to be a consumer product. Nonetheless, the...',
    );
    const thirdDesc = screen.getByText(
      'This year, investors have reaped big financial returns from betting on Zoom...',
    );

    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(firstLabel[0]).toBeInTheDocument();
    expect(firstLabel[1]).toBeInTheDocument();
    expect(firstLabel[2]).toBeInTheDocument();
    expect(secondLabel[0]).toBeInTheDocument();
    expect(secondLabel[1]).toBeInTheDocument();
    expect(bigNewsTitle).toBeInTheDocument();
    expect(bigNewsDesc).toBeInTheDocument();
    expect(firstTitle).toBeInTheDocument();
    expect(secondTitle).toBeInTheDocument();
    expect(thirdTitle).toBeInTheDocument();
    expect(firstDesc).toBeInTheDocument();
    expect(secondDesc).toBeInTheDocument();
    expect(thirdDesc).toBeInTheDocument();
  });
});
