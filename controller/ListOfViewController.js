import {Location} from "../utils/ListLocation.js";
import {StatusCodes} from "http-status-codes";

export const getAllLocation = async (req, res) => {
    const locs = Location;
    res.status(StatusCodes.OK).json({message: 'success', data : locs});
}