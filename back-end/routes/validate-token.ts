import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']


    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        // Tiene token
        try {
            const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || '1234clave');
            next()
        } catch (error) {
            res.status(401).json({
                msg: 'Tu sesión expiró, ¿Quieres volver a iniciar sesión? <a class="option-link">Sí, quiero iniciar sesión</a>'
            })
        }

    } else {
        res.status(401).json({
            msg: 'Si quieres volver a subir tus documentos primero inicia sesión 😀.'
        })
    }

}

export default validateToken;