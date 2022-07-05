export interface Artista { 
        nombre: string,
        nacionalidad: string,
        foto: string,
        canciones: {
            nombre: string,
            puntuacion: number
        }
}