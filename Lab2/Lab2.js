var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
console.log('\n-----------------2.1---------------');
function getAllWorkers() {
    var workers = [
        { id: 0, name: 'Yulia', surname: 'Bezpalko', available: false, salary: 1200, work: Category.Business_analyst },
        { id: 1, name: 'Taras', surname: 'Bondar', available: false, salary: 1100, work: Category.Developer },
        { id: 2, name: 'Diana', surname: 'Bondaruk', available: true, salary: 800, work: Category.Designer },
        { id: 3, name: 'Andriy', surname: 'Serhiychuk', available: true, salary: 1000, work: Category.Developer },
        { id: 4, name: 'Nasar', surname: 'Lutsuk', available: true, salary: 900, work: Category.QA }
    ];
    return workers;
}
function getWorkerById(id) {
    var arrayOfWorkers = getAllWorkers();
    var w = arrayOfWorkers.find(function (x) { return x.id === id; });
    return w;
}
function PrintWorker(worker) {
    {
        console.log(worker.name + ' ' + worker.surname + ' got salary ' + worker.salary);
    }
}
PrintWorker(getWorkerById(1));
console.log('\n-----------------2.2---------------');
var logPrize = function (prize) {
    console.log(prize);
};
logPrize("method logPrize");
var favouriteAuthor = {
    name: "John Doe",
    email: "aaa@gmail.com",
    numBooksPublished: 14
};
var favouriteLibrarian = {
    name: "John Doe",
    email: "bbb@gmail.com",
    department: "departmentOfLibrarian",
    assistCustomer: function (custName) {
        console.log("assistCustomer");
    }
};
console.log('\n-----------------2.4---------------');
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
var favouriteLibrarian1 = new UniversityLibrarian();
favouriteLibrarian1.name = "John";
favouriteLibrarian1.assistCustomer("Ivan");
//console.log('\n-----------------2.5---------------')
var ReferenceItem = /** @class */ (function () {
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
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating new ReferenceItem...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            var upper = this._publisher.toUpperCase();
            return upper;
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, " by department: ").concat(ReferenceItem.department));
    };
    ReferenceItem.department = "Default department";
    return ReferenceItem;
}());
// let ref: ReferenceItem = new ReferenceItem("Default book", 2022)
// ref.printItem()
// ref.publisher = "Default publisher"
// console.log(ref.publisher)
console.log('\n-----------------2.6---------------');
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(edition, title, year) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, " by department: ").concat(ReferenceItem.department));
        console.log("Edition: ".concat(this.edition));
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia(2022, "Default encyclopedia", 2010);
refBook.printItem();
console.log('\n-----------------2.7---------------');
refBook.printCitation();
