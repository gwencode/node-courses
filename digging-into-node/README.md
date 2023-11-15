# Explication commande ' cat '

La commande cat dans un terminal est utilisée pour concaténer et afficher le contenu des fichiers. Le nom "cat" est dérivé de "concatenate". Elle est généralement utilisée pour afficher le contenu d'un fichier texte directement dans le terminal. Voici un exemple simple d'utilisation de la commande cat :
```
cat nom_du_fichier
```

Cela affiche le contenu du fichier spécifié sur la sortie standard du terminal. Si vous avez plusieurs fichiers que vous souhaitez concaténer, vous pouvez les spécifier comme arguments supplémentaires :

cat fichier1 fichier2 fichier3

Cela affichera le contenu de fichier1, suivi de celui de fichier2, puis de celui de fichier3.

Notez que la commande cat peut également être utilisée pour créer de nouveaux fichiers en combinant le contenu de fichiers existants et en redirigeant la sortie vers un nouveau fichier. Par exemple :

cat fichier1 fichier2 > nouveau_fichier

Cela crée un nouveau fichier appelé nouveau_fichier contenant le contenu de fichier1 suivi de celui de fichier2.

# Explication du pipe ' | '

La commande ```cat nom_du_fichier |``` est une partie d'une commande plus complexe qui utilise un tube (pipe en anglais, représenté par le caractère |). Un tube permet de rediriger la sortie (stdout) de la première commande vers l'entrée (stdin) de la seconde commande. Dans ce cas, la sortie de la commande cat nom_du_fichier est redirigée vers la prochaine commande qui serait spécifiée après le tube (|).

Par exemple, si vous voulez compter le nombre de lignes dans le fichier, vous pourriez utiliser la commande wc -l après le tube :
```
cat nom_du_fichier | wc -l
```
Cette commande affichera le nombre de lignes dans le fichier spécifié. En résumé, l'utilisation du tube (|) permet de chaîner plusieurs commandes ensemble pour effectuer des opérations plus complexes en combinant les résultats de chaque commande.

# Streams

En Node.js, un stream est un concept fondamental qui représente un flux de données en lecture ou en écriture. Les streams sont utilisés pour manipuler efficacement les données, en particulier lorsque vous avez à traiter des volumes importants ou lorsque les données sont générées ou consommées de manière asynchrone.

Il existe plusieurs types de streams dans Node.js, mais ils peuvent être généralement classés en deux catégories principales : les streams en lecture (readable streams) et les streams en écriture (writable streams). Il existe également des streams bidirectionnels (duplex streams) qui peuvent être utilisés pour la lecture et l'écriture simultanées.

Voici un aperçu de chacun de ces types de streams :

# Readable Streams

 Ils représentent une source de données à partir de laquelle vous pouvez lire des informations. Par exemple, la lecture d'un fichier, la réception de données réseau, ou la génération de données à la volée peuvent être des opérations liées à des streams en lecture.

**Exemple :**

```javascript
const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');

readableStream.on('data', (chunk) => {
    console.log(chunk);
});
```

# Writable Streams

Ils représentent une destination pour écrire des données. Par exemple, l'écriture dans un fichier, l'envoi de données sur le réseau, ou l'enregistrement de données peuvent être des opérations liées à des streams en écriture.

**Exemple :**

```javascript
const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, World!');
```
