function mergeJSON(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            if (typeof a[key] === "object" && typeof b[key] === "object") {
                mergeJSON(a[key], b[key]);
                continue
            }

            
            if(Array.isArray(a[key]) && Array.isArray(b[key])) {
                a[key].concat(b[key]);
                continue
            }

            a[key] = b[key];
        }
    }
    return a;
}

module.exports = { mergeJSON };