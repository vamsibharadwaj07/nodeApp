const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()
app.get('/', (req, res) => {
  const dateTime = new Date();
  const result = addDays(new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),100);
  res.send(`${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`);
});
app.listen(3000, () => {
    console.log("Server listening at 3000")
})
module.exports = app
