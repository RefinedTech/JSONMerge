function mergeJSON(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            if (typeof a[key] === "object" && typeof b[key] === "object") {
                mergeJSON(a[key], b[key]);
            } else {
                a[key] = b[key];
            }
        }
    }
    return a;
}

module.exports = { mergeJSON };