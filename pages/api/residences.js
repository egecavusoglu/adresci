import db from "./db";

export default async function handler(req, res) {
  const residences = Object.keys(db);

  res.status(200).json({
    isSuccess: true,
    residences,
  });
}
