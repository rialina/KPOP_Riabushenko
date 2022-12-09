'use strict';
enum Category {
    BusinessAnalyst = 'Business Analyst',
    Developer = 'Developer',
    QA = 'QA',
    Scrum = 'Scrum'
}
interface IWorkers {
    id: number
    name: string;
    surname: string;
    available: boolean;
    salary: number,
    category: Category
}
function getAllWorkers() {
    let workers: IWorkers[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: true, salary: 1600, category: Category.QA},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Scrum}
    ]
    return workers;

}

function logFirstAvailable(arrayOfWorkers: IWorkers[] = getAllWorkers()): void {

    const numberOfWorkers: number = arrayOfWorkers.length;

    let worker: string = '';

    for (const item of arrayOfWorkers) {
        if (item.available) {
            worker = `${item.name} ${item.surname} `;
            break;
        }
    }
    console.log(`Number of workers: ${numberOfWorkers} \nAvailable worker: ${worker} `);
}

function getWorkersNamesByCategory(arrayOfWorkers: IWorkers[] = getAllWorkers(), category: Category = Category.Developer): Array<string> {

    const arrayOfWorkerSurname: Array<string> = [];

    for (const worker of arrayOfWorkers) {
        if (worker.category === category) {
            arrayOfWorkerSurname.push(worker.surname);
        }
    }
    return arrayOfWorkerSurname;
}

function logWorkersNames(arrayOfWorkers: string[]): void {
    console.log(arrayOfWorkers)
}

const getDevelopers = (arrayOfWorkers: IWorkers[] = getAllWorkers()): Array<string> => {

    const arrayOfWorkerSurname: Array<string> = [];

    for (const worker of arrayOfWorkers) {
        if (worker.category === Category.Developer) {
            arrayOfWorkerSurname.push(`${worker.surname} ${worker.name}`)
        }
    }
    return arrayOfWorkerSurname
}

const getWorkersByID = (id: number, arrayOfWorkers: IWorkers[] = getAllWorkers()): string => {
    try {
        const worker = arrayOfWorkers.find((worker) => worker.id === id);
        if (!worker) {
            throw new Error('error')
        }
        return `Name: ${worker?.name}\nSurname: ${worker?.surname}\nSalary: ${worker?.salary}`;
    } catch (e) {
        return 'User not exist'
    }
}

const createCustomerID = (name: string, id: number): string => {
    return name + ' ' + id;
}

const IdGenerator: (name: string, id: number) => string = createCustomerID;

const createCustomer = (name: string, age?: number, city?: string) => {

    return `${name} ${age||''} ${city||''}`
}

const checkoutWorkers = (customer: string, workerIDs: number[], arrayOfWorkers: IWorkers[] = getAllWorkers()) => {

    const availableWorkers = arrayOfWorkers.filter((worker) => worker.available && workerIDs.includes(worker.id));

    return {customer, availableWorkers}
}

/////////////////////////////////////////////////////////////////
console.log('1.1');
logFirstAvailable(getAllWorkers());


console.log('1.2');
const workerNames = getWorkersNamesByCategory(getAllWorkers(), Category.Developer);
logWorkersNames(workerNames);


console.log('1.3');
console.log(getDevelopers())
console.log(getWorkersByID(1));


console.log('1.4');
const myID = createCustomerID('Ann', 11);
console.log(myID);
const mySecondID = IdGenerator('John', 12);
console.log(mySecondID);


console.log('1.5');
console.log(createCustomer('John'));
console.log(createCustomer('John',23));
console.log(createCustomer('John',23,'London'));

console.log(getWorkersNamesByCategory(getAllWorkers()));
logFirstAvailable();
console.log(checkoutWorkers('Ann', [1, 2, 3]))