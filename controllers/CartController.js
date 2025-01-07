function readCartData() {
    try {
        const data = fs.readFileSync(cartFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}