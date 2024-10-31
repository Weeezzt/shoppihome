import express from "express";
const listingsRouter = express.Router();
import { PropertyModel } from "../models/listingSchema";

//GET ALL
listingsRouter.get("/listings", async (req, res) => {
  try {
    const data = await PropertyModel.find({});
    const parsedData = JSON.parse(JSON.stringify(data));
    console.log(parsedData);
    console.log("Data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching properties data:", error);
  }
});

//GET ONE
listingsRouter.get("/listings/:id", async (req, res) => {
  try {
    const data = await PropertyModel.findOne({ listingId: req.params.id });
    console.log("fetching property with id:", req.params.id);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching property data:", error);
  }
});

listingsRouter.post("/listings", async (req, res) => {
  try {
    const data = await PropertyModel.create(req.body);
    console.log(data);
    res.status(201).json(data);
  } catch (error) {
    console.error("Error creating property:", error);
  }
});

export default listingsRouter;
