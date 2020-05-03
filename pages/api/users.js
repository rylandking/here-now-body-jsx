import nextConnect from 'next-connect';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcryptjs';
import middleware from '../../middlewares/middleware';
import { extractUser } from '../../lib/api-helpers';

const handler = nextConnect();

handler.use(middleware); // see how we're reusing our middleware

// POST /api/users
handler.post(async (req, res) => {
  try {
    const { name, password } = req.body;
    const email = normalizeEmail(req.body.email); // this is to handle things like jane.doe@gmail.com and janedoe@gmail.com being the same
    if (!isEmail(email)) {
      res.status(400).send('The email you entered is invalid.');
      return;
    }
    if (!password || !name) {
      res.status(400).send('Missing field(s)');
      return;
    }
    // check if email existed
    if ((await req.db.collection('users').countDocuments({ email })) > 0) {
      res.status(403).send('The email has already been used.');
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Send user to DB
    const user = await req.db
      .collection('users')
      .insertOne({ email, password: hashedPassword, name, role: 'customer' })
      .then(({ ops }) => ops[0]);

    // Log user in using passport's req.logIn
    req.logIn(user, (err) => {
      // if (err) throw err; // This causes an err no matter what bc you can't 'throw' inside an async function
      // when we finally log in, return the (filtered) user object
      res.status(201).json({
        user: extractUser(req),
      });
    });
  } catch (error) {
    console.log(error);
  }
});

export default handler;
