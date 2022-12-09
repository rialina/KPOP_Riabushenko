'use strict';
var Category;
(function (Category) {
    Category["BusinessAnalyst"] = "Business Analyst";
    Category["Developer"] = "Developer";
    Category["QA"] = "QA";
    Category["Scrum"] = "Scrum";
})(Category || (Category = {}));
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: true, salary: 1600, category: Category.QA },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Scrum }
    ];
    return workers;
}
function logFirstAvailable(arrayOfWorkers) {
    if (arrayOfWorkers === void 0) { arrayOfWorkers = getAllWorkers(); }
    var numberOfWorkers = arrayOfWorkers.length;
    var worker = '';
    for (var _i = 0, arrayOfWorkers_1 = arrayOfWorkers; _i < arrayOfWorkers_1.length; _i++) {
        var item = arrayOfWorkers_1[_i];
        if (item.available) {
            worker = "".concat(item.name, " ").concat(item.surname, " ");
            break;
        }
    }
    console.log("Number of workers: ".concat(numberOfWorkers, " \nAvailable worker: ").concat(worker, " "));
}
function getWorkersNamesByCategory(arrayOfWorkers, category) {
    if (arrayOfWorkers === void 0) { arrayOfWorkers = getAllWorkers(); }
    if (category === void 0) { category = Category.Developer; }
    var arrayOfWorkerSurname = [];
    for (var _i = 0, arrayOfWorkers_2 = arrayOfWorkers; _i < arrayOfWorkers_2.length; _i++) {
        var worker = arrayOfWorkers_2[_i];
        if (worker.category === category) {
            arrayOfWorkerSurname.push(worker.surname);
        }
    }
    return arrayOfWorkerSurname;
}
function logWorkersNames(arrayOfWorkers) {
    console.log(arrayOfWorkers);
}
var getDevelopers = function (arrayOfWorkers) {
    if (arrayOfWorkers === void 0) { arrayOfWorkers = getAllWorkers(); }
    var arrayOfWorkerSurname = [];
    for (var _i = 0, arrayOfWorkers_3 = arrayOfWorkers; _i < arrayOfWorkers_3.length; _i++) {
        var worker = arrayOfWorkers_3[_i];
        if (worker.category === Category.Developer) {
            arrayOfWorkerSurname.push("".concat(worker.surname, " ").concat(worker.name));
        }
    }
    return arrayOfWorkerSurname;
};
var getWorkersByID = function (id, arrayOfWorkers) {
    if (arrayOfWorkers === void 0) { arrayOfWorkers = getAllWorkers(); }
    try {
        var worker = arrayOfWorkers.find(function (worker) { return worker.id === id; });
        if (!worker) {
            throw new Error('error');
        }
        return "Name: ".concat(worker === null || worker === void 0 ? void 0 : worker.name, "\nSurname: ").concat(worker === null || worker === void 0 ? void 0 : worker.surname, "\nSalary: ").concat(worker === null || worker === void 0 ? void 0 : worker.salary);
    }
    catch (e) {
        return 'User not exist';
    }
};
var createCustomerID = function (name, id) {
    return name + ' ' + id;
};
var IdGenerator = createCustomerID;
var createCustomer = function (name, age, city) {
    return "".concat(name, " ").concat(age || '', " ").concat(city || '');
};
var checkoutWorkers = function (customer, workerIDs, arrayOfWorkers) {
    if (arrayOfWorkers === void 0) { arrayOfWorkers = getAllWorkers(); }
    var availableWorkers = arrayOfWorkers.filter(function (worker) { return worker.available && workerIDs.includes(worker.id); });
    return { customer: customer, availableWorkers: availableWorkers };
};
/////////////////////////////////////////////////////////////////
console.log('1.1');
logFirstAvailable(getAllWorkers());
console.log('1.2');
var workerNames = getWorkersNamesByCategory(getAllWorkers(), Category.Developer);
logWorkersNames(workerNames);
console.log('1.3');
console.log(getDevelopers());
console.log(getWorkersByID(1));
console.log('1.4');
var myID = createCustomerID('Ann', 11);
console.log(myID);
var mySecondID = IdGenerator('John', 12);
console.log(mySecondID);
console.log('1.5');
console.log(createCustomer('John'));
console.log(createCustomer('John', 23));
console.log(createCustomer('John', 23, 'London'));
console.log(getWorkersNamesByCategory(getAllWorkers()));
logFirstAvailable();
console.log(checkoutWorkers('Ann', [1, 2, 3]));
