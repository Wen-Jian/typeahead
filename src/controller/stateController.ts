import { Request, Response } from "express";
import { states } from "../constants/state";
export const getState = async (req: Request, res: Response) => {
    const { state } = req.query
    const filteredStates = states.filter((st) => {
        return st.toLowerCase().indexOf((state as string).toLowerCase()) > -1
    })
    res.status(200).json({ data: filteredStates });
}