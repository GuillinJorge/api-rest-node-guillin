// Importamos la instancia de Firestore inicializada en firebase.js
import { db } from "./firebase.js";

// Importamos funciones necesarias de Firestore
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';

// Creamos una referencia a la colección "users" dentro de Firestore
const usersCollection = collection(db, "users");


/**
 * Crea un nuevo usuario en la colección "users"
 * 
 * @param {string} email - Correo electrónico del usuario
 * @param {string} passwordHash - Contraseña hasheada del usuario
 * @returns {Object} Objeto con el ID del documento creado y el email
 */
export const createUser = async (email, passwordHash) => {
    try {
        // Guardamos el documento en Firestore con email y password hasheada
        const docRef = await addDoc(usersCollection, { email, password: passwordHash });

        // Retornamos el ID generado por Firestore junto al email
        return { id: docRef.id, email };

    } catch (error) {
        // Si ocurre un error lo mostramos en consola
        console.log(error);
    }
};


/**
 * Busca un usuario por email dentro de la colección "users"
 * 
 * @param {string} email - Correo electrónico a buscar
 * @returns {Object|null} Devuelve el usuario encontrado (id + datos) o null si no existe
 */
export const findUserByEmail = async (email) => {
    try {
        // Creamos una consulta que busca documentos donde "email" coincida exactamente
        const q = query(usersCollection, where("email", "==", email));

        // Ejecutamos la consulta
        const snapshot = await getDocs(q);

        // Si existe al menos un documento, lo retornamos
        if (!snapshot.empty) {
            const doc = snapshot.docs[0]; // Primer resultado
            return { id: doc.id, ...doc.data() };
        }

        // Si no se encuentra ningún usuario, devolvemos null
        return null;

    } catch (error) {
        // Mostramos el error si la consulta falla
        console.log(error);
    }
};
