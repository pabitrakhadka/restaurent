
import crypto from 'crypto';
const createSignature = (message) => {
    console.log("message form sreate sign");
    const sicret = "8gBm/:&EnhH.1/q";
    const hmac = crypto.createHmac("sha256", sicret);
    hmac.update(message);
    var hashInBase64 = hmac.digest('base64');
    return hashInBase64;
}
export default createSignature;