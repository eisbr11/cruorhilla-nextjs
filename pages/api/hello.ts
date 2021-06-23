import { NextApiRequest, NextApiResponse } from 'next';

const helloRequest = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default helloRequest;
