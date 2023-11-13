import { screen, render } from '@testing-library/react';
import Header from './header';

describe('check text and img alt', () => {
  test('check text', () => {
    render(<Header />);
    const findStudying = screen.getByText('Studying');
    const findOnline = screen.getByText('Online is now much easier');
    const findSkilline = screen.getByText(
      'Skilline is an interesting platform that will teach you in more an interactive way',
    );
    const findJoin = screen.getByText('Join for free');
    const findWatch = screen.getByText('Watch how it works');
    const findCongratulation = screen.getByText('Congratulations');
    const findAdmission = screen.getByText('Your admission completed');
    const find250k = screen.getByText('250k');
    const findAssisted = screen.getByText('Assisted Student');
    const findExperience = screen.getByText('User Experience Class');
    const findTime = screen.getByText('Today at 12.00 PM');
    const findJoinBtn = screen.getByText('Join Now');

    expect(findStudying).toBeInTheDocument();
    expect(findOnline).toBeInTheDocument();
    expect(findSkilline).toBeInTheDocument();
    expect(findJoin).toBeInTheDocument();
    expect(findWatch).toBeInTheDocument();
    expect(findCongratulation).toBeInTheDocument();
    expect(findAdmission).toBeInTheDocument();
    expect(find250k).toBeInTheDocument();
    expect(findAssisted).toBeInTheDocument();
    expect(findExperience).toBeInTheDocument();
    expect(findTime).toBeInTheDocument();
    expect(findJoinBtn).toBeInTheDocument();
  });
  test('test img alt', () => {
    render(<Header />);
    const orangeBg = screen.getByAltText('orangeBg');
    const girlMobile = screen.getByAltText('girlMobile');
    const playIcon = screen.getByAltText('playIcon');
    const statisticIcon = screen.getByAltText('statisticIcon');
    const mailIcon = screen.getByAltText('mailIcon');
    const checkIcon = screen.getByAltText('checkIcon');
    const calenderIcon = screen.getByAltText('calenderIcon');
    const manIcon = screen.getByAltText('manIcon');
    const greenBullet = screen.getByAltText('bulletIcon');
    const girlDekstop = screen.getByAltText('girlDekstop');

    expect(orangeBg).toBeVisible();
    expect(girlMobile).toBeVisible();
    expect(playIcon).toBeVisible();
    expect(statisticIcon).toBeVisible();
    expect(mailIcon).toBeVisible();
    expect(checkIcon).toBeVisible();
    expect(calenderIcon).toBeVisible();
    expect(manIcon).toBeVisible();
    expect(greenBullet).toBeVisible();
    expect(girlDekstop).toBeVisible();
  });
});
