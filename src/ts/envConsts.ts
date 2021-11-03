declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            PORT: string,
            API_GET_CHAR_BY_ID: string
            API_GET_PLANET_BY_ID: string
        }
    }
}
export {};