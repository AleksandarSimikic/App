/* ./controllers/welcome.controller.ts */

// importujemo module koji nam trebaju
import { Router, Request, Response } from 'express';

//Definisemo ruter
const router: Router = Router();

//get sranje
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Radi.');
});
//jos jedan get, koji ce da prima tekst(koji ce da ga prima u url-u/ vidi server.ts)
router.get('/:text', (req: Request, res: Response) => {
    // izvalcimo tekst iz zahtjeva
    let { text } = req.params;
    //stavljamo tekst u odgovor
    res.send(`${text}`);
});

//eksportujemo ruter da ga mozemo koristiti u server.ts
export const WelcomeController: Router = router;