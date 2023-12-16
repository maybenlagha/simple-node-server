const http = require('http');


const port = 3000;


const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});


server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}/`);
});

Pour exécuter ce code :

    Assurez-vous d'avoir Node.js installé sur votre machine.
    Copiez le code dans un fichier nommé server.js.
    Ouvrez un terminal et naviguez jusqu'au répertoire où vous avez créé le fichier server.js.
    Exécutez la commande suivante pour démarrer le serveur :

    node server.js



