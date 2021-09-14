import bcrypt from 'bcrypt';

exports.hash = (password) => {
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

exports.compare = (password, hashedPassword) => {
  bcrypt.compareSync(password, hashedPassword);
};
