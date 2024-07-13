import { Router } from 'express';
import { loginUser, maestriaUser, modificarDatos, mostrarMaestrias, newUser, sendFileUser } from '../controllers/login_user';
import multer from 'multer';
import validateToken from './validate-token';
/* const upload = multer({ dest: 'uploads/'})
 */
const router = Router();
// Configuracion de multer para la subida de archivos
const storage = multer.diskStorage({})
const upload = multer({ storage: storage })

router.post('/login', loginUser);
router.put('/sendFile/:idinscripcion', upload.single('file'), sendFileUser);
router.put('/actdatos/:idinscripcion', validateToken,modificarDatos);
router.post('/newUser', newUser);
router.get('/mostrarDocs/:maestria', validateToken, maestriaUser);
router.get('/maestriaOferta', validateToken, mostrarMaestrias);
export default router;
