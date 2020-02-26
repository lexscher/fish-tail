// import deps
import { expect } from 'chai';
// import the user models
import User from '../../models/user';

let testUser1;
let testUser2;

beforeEach(done => {
  const [userDetails1, userDetails2] = [
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
  testUser1 = new User(userDetails1);
  testUser2 = new User(userDetails2);
  testUser1.save();
  testUser2.save();
  Promise.all([testUser1, testUser2]).then(() => done());
});

describe('USER model', () => {
  it('should be able to read name', done => {
    User.findOne({ username: 'jim' }).then(user => {
      if (user) expect(user.firstName).to.eql('jimmy');
    });
    done();
  });
});
