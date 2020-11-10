const express = require('express');
const router = express.Router();

const {createMessage, getMessages, getMessagesById} = require('../controllers/Messages');

router.route('/messages/new/:id').post(createMessage);
router.route('/messages/sync').get(getMessages);
router.route('/messages/sync/:id').get(getMessagesById);

module.exports = router;