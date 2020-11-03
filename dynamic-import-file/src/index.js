async function main() {
    const {default: text} = await import('../files/text/demo.txt');
    console.log('Executing main');
    console.log('text:', text);
}

main();
