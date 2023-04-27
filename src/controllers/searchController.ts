import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pets";

export const search = (req: Request, res: Response) => {
    const query: string = req.query.q as string;

    if(!query) {
        res.redirect("/");
        return;
    }

    res.render("pages/page", {
        menu: createMenuObject(""),
        list: Pet.getFromName(query),
        query
    });

}