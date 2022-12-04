export const stringToUint8Array = (str) => {
    const utf8 = decodeURI(encodeURIComponent(str))
    const array = new Uint8Array(utf8.split('').map((item) => {
        return item.charCodeAt(0)
    }))
    console.log(array)
    return array
}