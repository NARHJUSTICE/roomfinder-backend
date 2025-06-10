const Room = require('../models/Room');

// GET all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('owner');
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
};

// POST a new room
const createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create room' });
  }
};

module.exports = { getAllRooms, createRoom };
