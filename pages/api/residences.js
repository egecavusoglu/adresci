import db from "./db";

export default async function handler(req, res) {
  res.status(200).json({
    isSuccess: true,
    data: db,
  });
}
