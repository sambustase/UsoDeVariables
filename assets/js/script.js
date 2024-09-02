
    //Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números
    
    // declaración d ela funcion que realiza calculo
    function calcular() {
        // Pedir al usuario que ingrese dos números diferentes y mayores a cero
        // usamos parsefloat para convertir una cadena de texto (string) que representa un número en un número de punto flotante
        let num1 = parseFloat(
            prompt("Ingrese el primer número (mayor a cero):")
        );
        let num2 = parseFloat(
            prompt(
            "Ingrese un segundo número (mayor a cero y diferente al primero):"
            )
        );

        // Validar que ambos números son mayores a cero y diferentes
        if (num1 <= 0 || num2 <= 0 || num1 === num2) {
            alert(
            "Por favor, asegúrese de que ambos números sean mayores a cero y diferentes entre sí."
            );
          return; // Terminamos la ejecución si la validación falla
        }

        // Realizar las operaciones
        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacion = num1 * num2;
        let division = num1 / num2;
        let modulo = num1 % num2;

        // Mostrar los resultados
        alert(`Resultados:\nSuma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}\nMódulo: ${modulo}`);
    }

    calcular();





    //Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.

    // se declara una variable que recibe el valor de la T° en Celcius, usando un prompt
      // usamos parsefloat para convertir una cadena de texto (string) que representa un número en un número de punto flotante
        let temp = parseFloat(prompt(" Ingrese la temperatura en grados Celcius"));
        // se declara una variable kelvin que contiene la operación de conversión de celcius a kelvin
        let kelvin = temp + 273.15;
        // se declara una variable farenheit que contiene la operación de conversión de celcius a kelvin
        let fahrenheit = (temp * 9) / 5 + 32;
        // se establece un elemento alert, apra reflejar por pantalla un mensaje flotante con los resultados de las operaciones
        alert("La temperatura en Kelvin es: " + kelvin + "\nLa temperatura en Fahrenheit es: " + fahrenheit);





        //Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.
        // Función que convierte días a años, semanas y días
        function convertirDias(dias) {
            const diasPorAnio = 365; // Días en un año
            const diasPorSemana = 7; // Días en una semana

            // Cálculo de años
            const años = Math.floor(dias / diasPorAnio);
            // Cálculo de días restantes después de calcular años
            dias -= años * diasPorAnio;

            // Cálculo de semanas
            const semanas = Math.floor(dias / diasPorSemana);
            // Cálculo de días restantes después de calcular semanas
            dias -= semanas * diasPorSemana;

            // Devolver resultado
            return {
            años: años,
            semanas: semanas,
            dias: dias,
            };
        }

        // Pedir al usuario la cantidad de días
        const cantidadDias = parseInt(prompt("Ingrese una cantidad de días:"));

        // Asegurarse de que la entrada sea válida
        if (!isNaN(cantidadDias) && cantidadDias >= 0) {
            // Llamar a la función de conversión
            const resultado = convertirDias(cantidadDias);

            // Mostrar el resultado
            alert(
            `${cantidadDias} días equivalen a: ${resultado.años} año(s), ${resultado.semanas} semana(s) y ${resultado.dias} día(s).`
            );
        } else {
            alert("Por favor, ingrese un número válido de días.");
        }






        //Crear un programa que solicite al usuario 5 números y realice los cálculos.
        //La suma de todos los números.
        let numero1 = parseFloat(prompt(" Ingrese Ingrese un numero"));
        let numero2 = parseFloat(prompt(" Ingrese Ingrese un numero"));
        let numero3 = parseFloat(prompt(" Ingrese Ingrese un numero"));
        let numero4 = parseFloat(prompt(" Ingrese Ingrese un numero"));
        let numero5 = parseFloat(prompt(" Ingrese Ingrese un numero"));

        let sumarTodos = numero1 + numero2 + numero3 + numero4 + numero5;

        alert("La suma total de los números es : " + sumarTodos);


        //El promedio de los 5 números ingresados.
        let promedioTodos = sumarTodos/5;

        alert("El promedio de los numeros ingresados es : " + promedioTodosTodos);