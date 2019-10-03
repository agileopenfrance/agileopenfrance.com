Ce site est construit avec https://gohugo.io/

Le répertoire [agileopen](agileopen) contient les sources du site Hugo.

# Install

Installer hugo en récupérant l'executable correspondant à votre OS, en version 0.58.3

https://gohugo.io/getting-started/installing

La commande `hugo` doit etre disponible dans votre path.

# Mettre à jour le contenu

Editer les fichiers disponibles dans [agileopen/content/onepage](agileopen/content/onepage)

# Lancer hugo pour vérifier en local

    $ cd <racine_du_repo>
    $ hugo server

# Builder le site

Permet de constuire le site statique dans le répertoire docs à la racine du repo

    $ cd <racine_du_repo>
    $ hugo --cleanDestinationDir
