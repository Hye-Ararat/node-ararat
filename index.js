const Ararat = require("./src/classes/Client");
var ararat = new Ararat("http://bc5e-107-205-111-0.ngrok.io", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9::eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmwtYnJkLTEiLCJhZGRyZXNzIjp7Imhvc3RuYW1lIjoibmwtYnJkLTEuaHllLmdnIiwicG9ydCI6MjIyMX0sIl9pZCI6IjYxOGQ3ZDBhYmU0ZDU1MjgzOTZkOWU3YyIsImlkIjoiNjE4ZDdkMGFiZTRkNTUyODM5NmQ5ZTdjIiwiaWF0IjoxNjM2NjYyNTM4fQ.lRR_Inaf-8F4OoCTfvNnE_Za8IDXrgfNJmLkotOSCX", "admin");
(async () => {
   var inst = await ararat.instance("616defe0c1310382eda9773c", ["magma_cube"])
   console.log(inst)
})()
