import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.params)
  res.send('hello world!');
});

export default router;
