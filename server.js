const express = require("express");
const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: "Jonh", lastName: "Doe"},
        {id: 2, firstName: "Luke", lastName: "Cage"},
        {id: 3, firstName: "Tony", lastName: "Stark"}
    ];

    res.json(customers);
})

const port = 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));