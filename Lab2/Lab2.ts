enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}
interface IWorker {
    id: number
    name: string
    surname: string
    available: boolean
    salary: number
    work: Category
}

console.log('\n-----------------2.1---------------')
function getAllWorkers(): IWorker[] {
    let workers: IWorker[] = [
        { id: 0, name: 'Yulia', surname: 'Bezpalko', available: false, salary: 1200, work: Category.Business_analyst },
        { id: 1, name: 'Taras', surname: 'Bondar', available: false, salary: 1100, work: Category.Developer },
        { id: 2, name: 'Diana', surname: 'Bondaruk', available: true, salary: 800, work: Category.Designer },
        { id: 3, name: 'Andriy', surname: 'Serhiychuk', available: true, salary: 1000, work: Category.Developer },
        { id: 4, name: 'Nasar', surname: 'Lutsuk', available: true, salary: 900, work: Category.QA }
    ]
    return workers
}
function getWorkerById(id: number): IWorker | undefined {
    let arrayOfWorkers = getAllWorkers()
    let w = arrayOfWorkers.find(x => x.id === id)
    return w
}
function PrintWorker(worker: IWorker): void {
    {
        console.log(worker.name +' '+ worker.surname + ' got salary ' + worker.salary)
    }
}
PrintWorker(getWorkerById(1)!)
console.log('\n-----------------2.2---------------')
interface IPrizeLogger {
    (prize: string): void
}
let logPrize: IPrizeLogger = (prize: string): void =>{
    console.log(prize)
}
interface IWorker1 {
    id: number
    name: string
    surname: string
    available: boolean
    salary: number
    work: Category
    markPrize: IPrizeLogger
}
logPrize("method logPrize")
//console.log('\n-----------------2.3---------------')
interface IPerson {
    name: string
    email: string
}

interface IAuthor extends IPerson {
    numBooksPublished: number
}

interface ILibrarian extends IPerson {
    department: string
    assistCustomer(custName: string): void
}

let favouriteAuthor: IAuthor = {
    name: "John Doe",
    email: "aaa@gmail.com",
    numBooksPublished: 14
}

let favouriteLibrarian: ILibrarian = {
    name: "John Doe",
    email: "bbb@gmail.com",
    department: "departmentOfLibrarian",
    assistCustomer(custName: string): void {
        console.log("assistCustomer");
    }
}
console.log('\n-----------------2.4---------------')
class UniversityLibrarian implements ILibrarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
}

let favouriteLibrarian1: ILibrarian = new UniversityLibrarian()
favouriteLibrarian1.name = "John"
favouriteLibrarian1.assistCustomer("Ivan")
//console.log('\n-----------------2.5---------------')
abstract class ReferenceItem {
    /*title: string
    year: number

    constructor(newTitle: string, newYear: number) {
        this.title = newTitle
        this.year = newYear
        console.log('Creating new ReferenceItem...')
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
    }*/
    constructor(public title: string, protected year: number) {
        console.log('Creating new ReferenceItem...')
    }
    private _publisher: string
    static department: string = "Default department"
    get publisher() {
        let upper: string = this._publisher.toUpperCase();
        return upper
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem.department}`)
    }
    abstract printCitation(): void
}

// let ref: ReferenceItem = new ReferenceItem("Default book", 2022)
// ref.printItem()

// ref.publisher = "Default publisher"
// console.log(ref.publisher)
console.log('\n-----------------2.6---------------')
class Encyclopedia extends ReferenceItem {
    constructor(public edition: number, title: string, year: number) {
        super(title, year)
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem.department}`)
        console.log(`Edition: ${this.edition}`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}

let refBook: Encyclopedia = new Encyclopedia(2022, "Default encyclopedia", 2010)
refBook.printItem()
console.log('\n-----------------2.7---------------')
refBook.printCitation()
