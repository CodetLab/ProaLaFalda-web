import Express from "express";


import NoticiasRoter from './router/noticias.router';

const app = Express();





const PORT = process.env.PORT ?? 3000;


app.use()



app.listen(PORT, () => {
    console.log("App runing in ", PORT)
})





