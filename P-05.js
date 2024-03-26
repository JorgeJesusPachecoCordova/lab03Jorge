// Función para ordenar frutas
const sortFruits = (fruits) => fruits.sort();

// Función para obtener el elemento en el medio de una lista
const getElementInTheMiddle = (list) => list[Math.floor(list.length / 2)];

// Función para verificar el inicio de sesión de un usuario administrativo
const adminLogin = (user) => (user === "ADMIN" || user === "DEV") ? true : false;
