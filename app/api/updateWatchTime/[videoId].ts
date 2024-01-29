// import type { NextApiRequest, NextApiResponse } from 'next';
// import prisma from "../../utils/db";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { movieId } = req.query;
//   const { watchTime } = req.body;

//   try {
//     await prisma.watchHistory.update({
//       where: { id: parseInt(movieId as string) },
//       data: { watchTime: watchTime },
//     });

//     res.status(200).json({ message: 'Watch time updated successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error.' });
//   }
// }