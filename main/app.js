function addTokens(input, tokens) {
    if (typeof input !== "string") {
        throw new Error("Invalid input");

    }
    if (input.length < 6) {
        throw new Error("Input should have at least 6 characters");
    }

    if (tokens.filter(product => !(typeof product.tokenName === "string")).length) {
        throw new Error("Invalid array format");

    }
    if (input.search("...") !== -1) {

        for (let e of tokens) {
            let v="${"+e.tokenName+"}";
            input=input.replace("...",v);

        }

    }
    return input;





}

const app = {
    addTokens: addTokens
}

module.exports = app;
