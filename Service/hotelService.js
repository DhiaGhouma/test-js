var hotel = require('../model/hotelModel');

async function list(req, res, next) {
    await hotel.find().then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(503).json(err);
    });
}
async function searchHotels(req, res, next) {
    try {
        const hotels = await hotel.find({ 
            nbrRooms: { $gte: 10, $lte: 100 }
        });
        res.status(200).json(hotels);
    } catch (err) {
        res.status(503).json(err);
    }
}

module.exports = { searchHotels };


async function Deletehotel(req, res, next) {
    const hotelId = req.params.id;
    await hotel.findByIdAndDelete(hotelId).then((data) => {
        if (!data) {
            res.status(404).json({ message: 'Hotel not found' });
        } else {
            res.status(200).json({ message: 'Hotel deleted', data });
        }
    }).catch((err) => {
        res.status(503).json(err);
    });
}

async function updatehotel(req, res, next) {
    await hotel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {
        if (!data) {
            res.status(404).json({ message: 'Hotel not found' });
        } else {
            res.status(200).json(data);
        }
    }).catch((err) => {
        res.status(503).json(err);
    });
}

const create = async (req, res, next) => {
    const { nom, fabricationDate, nbrRooms } = req.body;
    await new hotel({
        nom: nom,
        fabricationDate: fabricationDate,
        nbrRooms: nbrRooms
    }).save().then((data) => {
        res.status(201).json({ message: 'Hotel added successfully', data });
    }).catch((err) => {
        res.status(503).json(err);
    });
};

module.exports = { create, list, Deletehotel, updatehotel, searchHotels };
