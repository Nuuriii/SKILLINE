import { screen, render } from '@testing-library/react';
import AllinOne from './allinOne';

describe('check text and img alt', () => {
  test('check text', () => {
    render(<AllinOne />);
    const findAllinOne = screen.getByText('All-In-One');
    const findCloud = screen.getByText('Cloud Software.');
    const findDesc = screen.getByText(
      'Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.',
    );
    const firstTitleItem = screen.getByText(
      'Online Billing, Invoicing, & Contracts',
    );
    const secondTitleItem = screen.getByText(
      'Easy Scheduling & Attendance Tracking',
    );
    const thirdTitleItem = screen.getByText('Customer Tracking');
    const firstItemDesc = screen.getByText(
      'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts',
    );
    const secondItemDesc = screen.getByText(
      'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
    );
    const thirdItemDesc = screen.getByText(
      'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization',
    );

    expect(findAllinOne).toBeInTheDocument();
    expect(findCloud).toBeInTheDocument();
    expect(findDesc).toBeInTheDocument();
    expect(firstTitleItem).toBeInTheDocument();
    expect(secondTitleItem).toBeInTheDocument();
    expect(thirdTitleItem).toBeInTheDocument();
    expect(firstItemDesc).toBeInTheDocument();
    expect(secondItemDesc).toBeInTheDocument();
    expect(thirdItemDesc).toBeInTheDocument();
  });
});
