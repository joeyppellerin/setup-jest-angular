# SetupJestAngular

## Setup Jest

1. Dans le répertoire d'un projet Angular, entrer la ligne de commande : 
<ul>
  <li>npm install [-g] @briebug/jest-schematic</li>
</ul>

2. Générer les configurations de Jest et suppression des fichiers de karma. Entrer la ligne de commande : 
<ul>
  <li>ng g @briebug/jest-schematic:add</li>
</ul>

3. Créer un fichier de configuration à la racine du projet. Le nommer jest.config.json.

4. Copier le contenu de l'objet jest ajouté dans le fichier package.json

5. Ajouter l'arguement --config=./jest.config.json à chaque commande Jest dans le fichier package.json

6. Ajouter des configs personnalisées au fichier jest.config.json comme le coverage threshold ou exclure des fichiers.
