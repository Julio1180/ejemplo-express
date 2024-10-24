import express from "express"

const server = express();

server.use(express.static("./estaticos"));

server.get("/color", (peticion, respuesta) => {
    let [r, g, b] = [0, 0, 0].map(() => Math.floor(Math.rando() * 256));
    respuesta.json({ r, g, b });
});

server.use((peticion, respuesta) => {
    respuesta.status(404);
    respuesta.send("404 not found");
})

server.listen(3000);

