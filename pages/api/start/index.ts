import { NextApiRequest, NextApiResponse } from 'next'
import result from '../../../utils/startMap'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const start_map = result(30)
    res.status(200).json(start_map)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
