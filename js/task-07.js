const logins = ['Mango', 'robotGoogles', 'Pol', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length < 4 || login.length > 16) {
        return false;
    }
    return true;
  // твой код
};

const isLoginUnique = function(allLogins, login) {
  // твой код
    return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    
    if (!isLoginValid(login)) {
        return "Ошибка! Логин должен быть от 4 до 16 символов";
    } 
    if (isLoginUnique(allLogins, login)) {
        console.log(allLogins);
        return "Такой логин уже используется!";
        
    }
    allLogins.push(login);
    console.log(allLogins);
    return "Логин успешно добавлен";
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Pol')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'