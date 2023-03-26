const { Router } = require('express');
const RoomController = require('./app/controllers/RoomController');
const ReservationController = require('./app/controllers/ReservationController');

const router = Router();

router.get('/room', RoomController.index);
router.get('/room/name', RoomController.showByName);
router.get('/room/building', RoomController.showByBuilding);
router.get('/room/:id', RoomController.showById);
router.post('/room', RoomController.store);
router.put('/room', RoomController.update);
router.delete('/room/:id', RoomController.delete);

router.get('/reservation', ReservationController.index);
router.post('/reservation/date', ReservationController.showByDate);
router.get('/reservation/user', ReservationController.showByUser);
router.get('/reservation/room', ReservationController.showByRoom);
router.get('/reservation/id', ReservationController.showById);
router.post('/reservation', ReservationController.store);
router.put('/reservation', ReservationController.update);
router.delete('/reservation/:id', ReservationController.delete);

module.exports = router;
