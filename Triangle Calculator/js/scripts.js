document.getElementById('tombol-luas').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Please enter positive numbers for base and height.');
        return;
    }
    const area = 0.5 * base * height;
    document.getElementById('area').textContent = `Area: ${area.toFixed(2)}`;
});

document.getElementById('tombol-keliling').addEventListener('click', function() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        alert('Please enter positive numbers for all sides.');
        return;
    }
    const perimeter = side1 + side2 + side3;
    document.getElementById('perimeter').textContent = `Perimeter: ${perimeter.toFixed(2)}`;
});
