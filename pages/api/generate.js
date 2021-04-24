// import db from "./db";

// export default async function handler(req, req) {
//   if (req.method === "POST") {
//     const { residence, block, flat } = req.body;
//     const address = generateAddress(residence, block, flat);
//     res.status(200).json({
//       isSuccess: true,
//       address,
//     });
//   }
// }

// const generateAddress = (residence, block, flat) => {
//   let { template } = db[residence];
//   template = template.replace("%*BLOCK*%", block);
//   template = template.replace("%*FLAT*%", flat);
//   return template;
// };
