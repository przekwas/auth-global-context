import { Router } from 'express';
import { ReqUser } from '../../types';
import { tokenCheck } from '../../middlewares/auth.mw';

const router = Router();

router.get('/', tokenCheck, async (req: ReqUser, res) => {
	try {
		res.json({ message: 'you gucci' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'my code sucks, let me know!' });
	}
});

export default router;
