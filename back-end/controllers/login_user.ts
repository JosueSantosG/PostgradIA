import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Persona from "../models/usuario";
import jwt from "jsonwebtoken";
import { Storage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";
import Userdocs from "../models/userdocs";
import Iniciosesion from "../models/iniciosesion";
import Oferta from "../models/oferta";
import Inscripcion from "../models/inscripcion";

export const newUser = async (req: Request, res: Response) => {
  const { usuario, clave } = req.body;

  // Validamos si el usuario ya existe en la base de datos
  const user = await Userdocs.findOne({ where: { usuario: usuario } });

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${usuario}`,
    });
  }

  const hashedPassword = await bcrypt.hash(clave, 10);
  try {
    // Guardarmos usuario en la base de datos
    await Userdocs.create({
      usuario: usuario,
      clave: hashedPassword,
    });

    res.json({
      msg: `Usuario ${usuario} creado exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Upps ocurrio un error",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { usuario, clave } = req.body;
  try {
    // Validamos si el usuario existe en la base de datos

    const user: any = await Iniciosesion.findOne({
      where: { usuario: usuario },
    });

    if (!user) {
      return res.status(401).json({
        msg: `El usuario o clave son incorrectos, vuelva a intentar por favor.`,
      });
    }

    // Validamos password
    const passwordValid = await bcrypt.compare(clave, user.clave);

    if (!passwordValid) {
      return res.status(401).json({
        msg: `El usuario o clave son incorrectos, vuelva a intentar por favor.`,
      });
    }

    // Generamos token
    const token = jwt.sign(
      {
        usuario: usuario,
      },
      process.env.SECRET_KEY || "1234clave",
      { expiresIn: "30m" }
    );

    res.json({
      token: token,
    });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).json({
      msg: "Error interno del servidor.",
    });
  }
};

//funcion que muestra todas las maestrias que tiene el usuario registradas
export const mostrarMaestrias = async (req: Request, res: Response) => {
  const userToken = getUserToken(req);
  const idpersona: any = await Persona.findOne({
    where: { identificacion: userToken },
  });
  try {
    const userPersona = await Inscripcion.findAll({
      attributes: ["id_persona", "id_inscripcion"],
      where: {
        id_persona: idpersona.id_persona,
      },
      include: {
        model: Oferta,
        attributes: ["id_oferta", "descripcion"],
      },
    });

    res.json({
      maestrias: userPersona,
    });
  } catch (error) {
    console.error("Error en maestriaOferta:", error);
    throw error;
  }
};

//funcion para mostrar los documentos al usuario con la maestria que se ha registrado
export const maestriaUser = async (req: Request, res: Response) => {
  const { maestria } = req.params;

  // se obtiene la oferta de maestría basada en el id_oferta
  const nomMaestria: any = await Oferta.findOne({
    where: { id_oferta: maestria },
  });
  //se obtiene el usuario que esta relacionado con la oferta
  const userToken = getUserToken(req);
  const user: any = await Persona.findOne({
    where: { identificacion: userToken },
  });

  if (!nomMaestria) {
    return res.status(404).json({
      msg: `No se encontró una oferta de maestría con la descripción proporcionada`,
    });
  }

  // se busca la inscripción relacionada con la oferta de maestría y el usuario
  /*   const idinscrip: any = await Inscripcion.findOne({ where: { id_oferta: nomMaestria.id_oferta, id_persona:user.id_persona } });
   */
  // Se obtiene los documentos del usuario en función de la oferta de maestría y la inscripción
  const userPersona = await Inscripcion.findAll({
    attributes: ["id_inscripcion"],
    where: {
      id_oferta: nomMaestria.id_oferta,
      id_persona: user.id_persona,
    },
    include: {
      model: Userdocs,
      attributes: ["cedula", "certificado", "solicitud","titulo","comprobante","hojadevida"],
    },
  });

  if (userPersona.length === 0) {
    return res.status(404).json({
      msg: `No se encontraron documentos de usuario asociados a la oferta de maestría y la inscripción proporcionadas`,
    });
  }

  res.json({ userPersona });
};

//funcion para modificar los documentos al usuario con la maestria que se ha registrado
export const modificarDatos = async (req: Request, res: Response) => {
  try {
    const { idinscripcion } = req.params;
    const { cedula, certificado, solicitud } = req.body;
    const userToken = getUserToken(req);
    const idses: any = await Iniciosesion.findOne({
      where: { usuario: userToken },
    });
    const userdocs: any = await Userdocs.findOne({
      where: {
        id_inscripcion: idinscripcion,
        id_iniciosesion: idses.id_iniciosesion,
      },
    });
    // Modifica los campos que deseas actualizar
    if (cedula) {
      userdocs.cedula = cedula;
    }
    if (solicitud) {
      userdocs.solicitud = solicitud;
    }
    if (certificado) {
      userdocs.certificado = certificado;
    }
    await userdocs.save();
  } catch (error) {
    return res.status(500).json({ mensaje: "error" });
  }
  /* const userToken = getUserToken(req);
  const idpersona: any = await Persona.findOne({
      where: { identificacion: userToken}
  });
  const idinscrip: any = await Inscripcion.findOne({
    where: { id_persona: idpersona.id_persona}
  });
  const idinises: any = await Iniciosesion.findOne({
    where: { usuario: idpersona.identificacion}
  });

  const userDocument: any = await Userdocs.findOne({
    where: { id_inscripcion: idinscrip.id_inscripcion, id_iniciosesion: idinises.id_iniciosesion }
  });
  // Modifica los campos que deseas actualizar
  if (cedula) {
      userDocument.cedula = cedula;
  }
  if (solicitud) {
      userDocument.solicitud = solicitud;
  }
  if (certificado) {
      userDocument.certificado = certificado;
  }

  // Guarda los cambios en la base de datos
  try {
      await userDocument.save();
      res.json({
          msg: 'Datos de usuario actualizados exitosamente',
          userData: {
              id_inscripcion:idinscrip.id_inscripcion,
              id_iniciosesion:idinises.id_iniciosesion,
              cedula: userDocument.cedula,
              solicitud: userDocument.solicitud,
              certificado: userDocument.certificado,
              // Otros campos de usuario para mostrar
          }
      });
  } catch (error) {
      console.error('Error al guardar la actualización:', error);
      return res.status(500).json({
          msg: 'Error al actualizar los datos del usuario'
      });
  } */
};

//funcion para enviar el archivo a la nube y guardalo en la base de datos
export const sendFileUser = async (req: Request, res: Response) => {
  const bucketName = "postgradia"; // Nombre del bucket en Google Cloud Storage
  const storage = new Storage({ keyFilename: "googlecloud.json" });

  // Guarda los cambios en la base de datos
  try {
    const { idinscripcion } = req.params;
    const { cedula, certificado, solicitud, titulo, comprobante, hojadevida } =
      req.body;
    const userToken = getUserToken(req);

    if (userToken === null || userToken === undefined || !userToken) {
      res
        .status(401)
        .json({
          msg: "Si quieres volver a subir tus documentos primero inicia sesión 😀.",
        });
    } else {
      if (idinscripcion === "0" && req.file) {
        res.status(401).json({
          msg: "Error al guardar el archivo ❌, primero elige la maestría e intenta de nuevo.",
        });
      } else {
        const idses: any = await Iniciosesion.findOne({
          where: { usuario: userToken },
        });
        const userdocs: any = await Userdocs.findOne({
          where: {
            id_inscripcion: idinscripcion,
            id_iniciosesion: idses.id_iniciosesion,
          },
        });
        // Modifica los campos que se actualizarán
        if (cedula) {
          userdocs.cedula = cedula;
        }
        if (solicitud) {
          userdocs.solicitud = solicitud;
        }
        if (certificado) {
          userdocs.certificado = certificado;
        }
        if (titulo) {
          userdocs.titulo = titulo;
        }
        if (comprobante) {
          userdocs.comprobante = comprobante;
        }
        if (hojadevida) {
          userdocs.hojadevida = hojadevida;
        }
        await userdocs.save();
        uploadFile().catch(console.error);
      }
    }
  } catch (error) {
    console.error("Error al guardar la actualización:", error);
  }

  async function uploadFile() {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "No se ha proporcionado ningún archivo" });
    }
    const file = req.file;
    const originalFileName = file.originalname;

    // Genera un nombre de archivo único usando UUID
    const uniqueFileName = uuidv4();
    const destFileName = `${uniqueFileName}.pdf`;

    const options = {
      destination: destFileName,
    };

    try {
      // Subir el archivo a Google Cloud Storage
      await storage.bucket(bucketName).upload(file.path, options);
      console.log(`${originalFileName} subido como ${destFileName} a ${bucketName}`);


      res
        .status(200)
        .json({
          message:
            "Archivo subido exitosamente ✅ <br> <b>Nota: </b>Cuando hayas terminado de subir tus documentos escribe (<b>salir</b>) para cerrar la sesión de tu cuenta!",
        });
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      res.status(500).json({ error: "Error al subir el archivo" });
    }
  }
};

export function getUserToken(req: Request): string | null {
  const authorizationHeader = req.headers.authorization;

  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    // Extraer el token eliminando el prefijo "Bearer "
    const token = authorizationHeader.substring(7);

    try {
      // Decodificar el token usando la clave secreta
      const decoded = jwt.verify(token, process.env.SECRET_KEY || "1234clave");

      if (typeof decoded === "object" && "usuario" in decoded) {
        return decoded.usuario; // Devuelve el valor de 'usuario'
      } else {
        return null; // Si 'usuario' no está en el objeto, devuelve null
      }
    } catch (error) {
      // Si el token es inválido, jwt.verify lanzará una excepción
      return null;
    }
  }

  return null; // Devuelve null si no se encontró el token en la cabecera
}
