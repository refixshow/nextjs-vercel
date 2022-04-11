import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers.Authorization !== process.env.NEXT_PUBLIC_STRAPI_SECRET) {
    return res.status(401).json({ message: "not authorized" });
  }

  try {
    await res.unstable_revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
