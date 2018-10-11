/* ./server.ts */

//importujemo sve iz ekspresa
import express from 'express';

//importujemo WelcomeController ruter koji smo eksportovali u welcome.controller.ts zbog rutiranja
import {WelcomeController} from './controllers';

//nova ekspres aplikacija
const app: express.Application = express();
//port koji ce server da koristi
const port: number = +(process.env.PORT || 5000);

// koristimo ruter koji smo eksportovali iz welcome.controller.ts
app.use('/', WelcomeController);

//slusanje porta
app.listen(port, () => {
    console.log(`Slusam na portu:${port}/`);
});