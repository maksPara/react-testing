import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe('UserList', () => {
  it('should render paragraph when users array is empty', () => {
    render(<UserList users={[]} />);

    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/no users/i);
  });
  it('should render a list of users when users array is provided', () => {
    const users: User[] = [
      { id: 1, name: 'Ben' },
      { id: 2, name: 'John' },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    });
  });
});
