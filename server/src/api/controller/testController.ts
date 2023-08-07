import { NextFunction, Request, Response } from "express";
import { db } from "../../config/db";

export const getTestList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = `CALL SELECT_TEST_LIST`;
    const [rows]: any = await db.execute(query);
    res.status(200).json(rows[0]);
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export const getTestInfoByID = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const testID = req.params.testID;
    const query = `CALL SELECT_TEST_INFO(?)`;
    const [rows]: any = await db.execute(query, [testID]);
    res.status(200).json(rows[0]);
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};
