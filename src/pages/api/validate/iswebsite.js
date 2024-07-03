// Check if the request has cookies || web site request or not
async function isWebsite(request) {
    const cookies = request.cookies || null;
    if (cookies && Object.keys(cookies).length > 0) {
        return true;
    }
    return false;
}

export default isWebsite;
