const expensesTest = () => {
    return [
        {
            _id: 1,
            date: new Date("2019-02-02"),
            categorie: {
                _id: 1,
                name: "macdonalds"
            },
            total: 100,
            comments: ""
        },
        {
            _id: 2,
            date: new Date("2019-02-03"),
            categorie: {
                _id: 1,
                name: "macdonalds"
            },
            total: 150,
            comments: ""
        },
        {
            _id: 3,
            date: new Date("2019-02-02"),
            categorie: {
                _id: 1,
                name: "macdonalds"
            },
            total: 200,
            comments: ""
        }, {
            _id: 4,
            date: new Date("2019-02-02"),
            categorie: {
                _id: 2,
                name: "coffee"
            },
            total: 1000,
            comments: ""
        },
        {
            _id: 5,
            date: new Date("2019-02-02"),
            categorie: {
                _id: 2,
                name: "coffee"
            },
            total: 20,
            comments: ""
        },
        {
            _id: 6,
            date: new Date("2019-01-02"),
            categorie: {
                _id: 3,
                name: "Gas"
            },
            total: 150,
            comments: ""
        }]

}

module.exports.expensesTest = expensesTest;