import express from "express";
import { getState } from "../controller/stateController";

const router = express.Router();

router.get("/states", getState)
router.get("/", (req, res) => {
    res.render("index", {
        title: "typeahead",
    })
})

export default router