export const decodeBase64ToJson = (base64Str) => {
    if (!(base64Str && base64Str.length > 0)) {
        return null;
    }
    try {
        let decode = decodeURIComponent(window.atob( base64Str));
        return JSON.parse(decode);
    } catch(e) {
        console.error("Error decoding json: ", e);
        return null;
    }
}

export const b64EncodeUnicode = (obj) => {
    let str = JSON.stringify(obj);
    return btoa(encodeURIComponent(str));
}
