function getProductSuggestions(products, search) {
    // Step 1: sort products alphabetically
    products.sort();

    let result = [];
    let prefix = "";

    // Step 2: build prefix one by one
    for (let ch of search) {
        prefix += ch;

        // Step 3: filter matching products
        let matches = products.filter(p => p.startsWith(prefix));

        // Step 4: take only first 3
        result.push(matches.slice(0, 3));
    }

    return result;
}
console.log(getProductSuggestions(["carpet", "cart", "car", "camera", "crate"], "camera"))
