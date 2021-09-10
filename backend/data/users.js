import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Example User',
    insurance: 1234567890,
    email: 'user@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
];

export default users;