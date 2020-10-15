var Mock = require("mockjs");
var id = Mock.mock("/abc", "get", {
  "message|3-5": [
    {
      "id|+1": 1,
        'name':'@cfirst'
    }
  ]
});

console.log(id);
