

export const  generateUUID = (length:number)=> {
    return globalThis.crypto.randomUUID().slice(0, length)
}