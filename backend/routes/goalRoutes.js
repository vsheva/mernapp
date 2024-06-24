import express from 'express';
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Server is ready' }));
// router.post('/', (req, res) => res.status(200).json({ message: 'Server is ready' }));
// router.get('/', (req, res) => res.status(200).json({ message: 'Server is ready' }));
// router.get('/', (req, res) => res.status(200).json({ message: 'Server is ready' }));


module.exports = router;



// import { authUser } from '../controllers/userController.js';

// router.post('/auth', authUser);
// export default router;
