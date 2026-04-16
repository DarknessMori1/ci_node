function add(a, b) {
    return a + b;
}
function main() {
    console.log("Hello from Node.js app!");
}
if (require.main === module) {
    main();
}
module.exports = { add };