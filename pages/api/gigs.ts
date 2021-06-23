import { NextApiRequest, NextApiResponse } from 'next';

const gigsRequest = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default gigsRequest;
