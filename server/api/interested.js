import { Router } from 'express';

import Interested from '../models/interested';

const router = Router();

router.post('/interested', ({ body: { email } }, res) => {
  Interested.findOne({ email }, (err, alreadyInterested) => {
    const errRes = { message: 'Hm, algo salio mal. Por favor vuelve a intentar.', type: 'error' };
    const successRes = { message: 'Ya estas subscrito! Te enviaremos cualquier noticia por email!', type: 'success' }
    
    if (err) return res.status(401).send(errRes);
    if (alreadyInterested) return res.status(200).send(successRes);

    const interested = new Interested({ email });
    interested.save(error => {
      if (error) return res.status(401).send(errRes);
      res.status(200).send(successRes);
    });
  });
});

export default router;
