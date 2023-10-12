
        function resolverEcuacionSegundoGrado() {
            const coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
            const coeficienteB = parseFloat(document.getElementById("coeficienteB").value);
            const coeficienteC = parseFloat(document.getElementById("coeficienteC").value);

            // Calcula el discriminante
            const discriminante = (coeficienteB ** 2) - (4 * coeficienteA * coeficienteC);

            if (isNaN(coeficienteA) || isNaN(coeficienteB) || isNaN(coeficienteC)) {
                alert("Ingrese coeficientes válidos.");
            } else if (discriminante > 0) {
                const x1 = (-coeficienteB + Math.sqrt(discriminante)) / (2 * coeficienteA);
                const x2 = (-coeficienteB - Math.sqrt(discriminante)) / (2 * coeficienteA);
                document.getElementById("soluciones").textContent = `x1 = ${x1}, x2 = ${x2}`;
            } else if (discriminante === 0) {
                const x = -coeficienteB / (2 * coeficienteA);
                document.getElementById("soluciones").textContent = `x = ${x}`;
            } else {
                document.getElementById("soluciones").textContent = "La ecuación no tiene soluciones reales.";
            }
        }