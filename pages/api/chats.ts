import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetch(
    "http://my-json-server.typicode.com/corneliusventi/quicks/chats"
  );
  const chats = await data.json();

  res.status(200).json(chats);
}