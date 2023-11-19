import { screen, render } from '@testing-library/react';
import Testimonial from './testimonial';

describe('test text & img alt', () => {
  test('test text', () => {
    render(<Testimonial />);
    const title = screen.getByText(/What They Say?/);
    const firstParaph = screen.getByText(
      'Skilline has got more than 100k positive ratings from our users around the world.',
    );
    const secondParaph = screen.getByText(
      'Some of the students and teachers were greatly helped by the Skilline.',
    );
    const thirdParaph = screen.getByText(
      'Are you too? Please give your assessment',
    );

    const btnText = screen.getByText('Write your assessment');
    const testimonialText = screen.getByText(
      `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`,
    );
    const userTestimonial = screen.getByText('Gloria Rose');
    const testimonialInfo = screen.getByText('12 reviews at Yelp');

    expect(title).toBeInTheDocument();
    expect(firstParaph).toBeInTheDocument();
    expect(secondParaph).toBeInTheDocument();
    expect(thirdParaph).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();
    expect(testimonialText).toBeInTheDocument();
    expect(userTestimonial).toBeInTheDocument();
    expect(testimonialInfo).toBeInTheDocument();
  });
});
