import { NFTStorage } from "nft.storage";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const client = new NFTStorage({
    token: process.env.NFT_STORAGE_API_KEY,
  });

  const { name, description, fileName, file } = req.body;

  if (!file || !fileName) {
    return res
      .status(400)
      .json({ error: "File and file name must be provided" });
  }

  const metadata = await client.store({
    name,
    description,
    image: new File([Buffer.from(file, "binary")], fileName),
  });

  return res.status(200).json({ url: metadata.url });
}
