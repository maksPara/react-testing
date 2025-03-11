import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = { id: 123, name: 'Ignacy', isAdmin: false };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it('should not render Edit button when user is not an admin', () => {
    const user: User = { id: 123, name: 'Ignacy', isAdmin: false };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  it('should render Edit button when user is an admin', () => {
    const user: User = { id: 123, name: 'Ignacy', isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
});
