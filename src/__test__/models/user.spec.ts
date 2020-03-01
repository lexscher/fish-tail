// import the user models
import User, { IUserDoc } from '../../models/user';
// import deps
import { expect } from 'chai';

const [existingUserDetails, newUserDetails] = [
  {
    username: 'jim',
    firstName: 'jimmy',
    lastName: 'neutron',
    email: 'jimmy@gotta.blast',
  },
  {
    username: 'tim',
    firstName: 'timmy',
    lastName: 'turner',
    email: 'timmy@i.wish',
  },
];

// run this code after we start any of our tests

describe('User model', () => {
  it('should be able to create a new user', () => {
    let newUser = new User(newUserDetails);
    newUser.save();
    expect(newUser.username).to.eql('tim');
  });
});
