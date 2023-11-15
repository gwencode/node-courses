# Digging Into Node

Kyle Simpson
@getify

getify@gmail.com

# EXPLICATION COMMANDE CAT :

La commande cat dans un terminal est utilisée pour concaténer et afficher le contenu des fichiers. Le nom "cat" est dérivé de "concatenate". Elle est généralement utilisée pour afficher le contenu d'un fichier texte directement dans le terminal. Voici un exemple simple d'utilisation de la commande cat :

cat nom_du_fichier

Cela affiche le contenu du fichier spécifié sur la sortie standard du terminal. Si vous avez plusieurs fichiers que vous souhaitez concaténer, vous pouvez les spécifier comme arguments supplémentaires :

cat fichier1 fichier2 fichier3

Cela affichera le contenu de fichier1, suivi de celui de fichier2, puis de celui de fichier3.

Notez que la commande cat peut également être utilisée pour créer de nouveaux fichiers en combinant le contenu de fichiers existants et en redirigeant la sortie vers un nouveau fichier. Par exemple :

cat fichier1 fichier2 > nouveau_fichier

Cela crée un nouveau fichier appelé nouveau_fichier contenant le contenu de fichier1 suivi de celui de fichier2.

# EXPLICATION PIPE | :

La commande

cat nom_du_fichier |

est une partie d'une commande plus complexe qui utilise un tube (pipe en anglais, représenté par le caractère |). Un tube permet de rediriger la sortie (stdout) de la première commande vers l'entrée (stdin) de la seconde commande. Dans ce cas, la sortie de la commande cat nom_du_fichier est redirigée vers la prochaine commande qui serait spécifiée après le tube (|).

Par exemple, si vous voulez compter le nombre de lignes dans le fichier, vous pourriez utiliser la commande wc -l après le tube :

cat nom_du_fichier | wc -l

Cette commande affichera le nombre de lignes dans le fichier spécifié. En résumé, l'utilisation du tube (|) permet de chaîner plusieurs commandes ensemble pour effectuer des opérations plus complexes en combinant les résultats de chaque commande.
