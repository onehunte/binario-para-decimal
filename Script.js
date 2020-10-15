function butto() {
    const binary = document.getElementById('bin').value;
    if (binary === '') 
    return alert('Please, add a binary number!');
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Please, enter a binary number');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('deci').value = decimal;
    return true;
}
