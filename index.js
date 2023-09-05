fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((resp) => resp.json())
.then((data) => console.log(data))

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=')
.then((resp) => resp.json())
.then((data) => console.log(data))

fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
.then((resp)=> resp.json())
.then((data)=> console.log(data))


