const express = require('express');
const router = express.Router();

const {createRoom, getRooms , getRoomById} = require('../controllers/Room');

router.route('/rooms/new').post(createRoom);
router.route('/rooms/sync').get(getRooms);
router.route('/rooms/sync/:id').get(getRoomById);

module.exports = router;