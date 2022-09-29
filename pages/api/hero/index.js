import dbConnect from "../../../db/dbConnect";

import Hero from "../../../models/hero";
dbConnect();

//get all records, post a new record == get and post to same route:
// api/hero

export default async (req, res) => {
  const { method } = req; // req.method

  switch (method) {
    case "GET":
      try {
        const heros = await Hero.find({});
        res.status(200).json({ success: true, hero: heros });
      } catch (error) {
        console.error("Something went wrong");
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const heros = await Hero.create(req.body);
        res.status(200).json({ success: true, hero: heros });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
  }
};
