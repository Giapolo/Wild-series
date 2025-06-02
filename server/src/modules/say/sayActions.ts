import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.json("Welcome to Wild Series");
};

export default { sayWelcome };
