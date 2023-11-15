import { screen, render } from '@testing-library/react';
import WithSkilline from './withSkilline';

describe('test text and img alt', () => {
  test('test text', () => {
    render(<WithSkilline />);
    const findEverything = screen.getByText(
      'Everything you can do in a physical classroom,',
    );
    const findWithSkilline = screen.getByText('you can do with Skilline');
    const findDesc = screen.getByText(
      'Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.',
    );
    const btnText = screen.getByText('Learn more');

    expect(findEverything).toBeInTheDocument();
    expect(findWithSkilline).toBeInTheDocument();
    expect(findDesc).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<WithSkilline />);
    const bigOrange = screen.getByAltText('big-orange-icon');
    const smallOrange = screen.getByAltText('small-orange-icon');
    const blueSquare = screen.getByAltText('blue-square');
    const classImg = screen.getByAltText('class-img');
    const playIcon = screen.getByAltText('playIcon');
    const orangeSquare = screen.getByAltText('orange-square');

    expect(bigOrange).toBeVisible();
    expect(smallOrange).toBeVisible();
    expect(blueSquare).toBeVisible();
    expect(classImg).toBeVisible();
    expect(playIcon).toBeVisible();
    expect(orangeSquare).toBeVisible();
  });
});
