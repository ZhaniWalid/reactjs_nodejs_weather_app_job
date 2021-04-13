Etapes pour la création de l'app weather-app pour l'Entretien Famihero:

  1/ Partie Back-End avec NodeJS et Express:
	#Dans l'invite de commandes (cmd), tapez ces cmd(s) suivantes pour la création du projet Back-End:

        />cd reactjs_nodejs_weather_app_job
        \reactjs_nodejs_weather_app_job>mkdir server
        \reactjs_nodejs_weather_app_job>cd server // Créer répertoire "serveur" et entrer dedans
        \reactjs_nodejs_weather_app_job\server>npm init -y // configurer NPM à l'intérieur du répertoire «serveur»
        \reactjs_nodejs_weather_app_job\server>npm install express // installez "Express" pour notre "serveur Web"
        \reactjs_nodejs_weather_app_job\server>npm install unirest // Installer 'Unirest' pour les "appels API"
        \reactjs_nodejs_weather_app_job\server>npm install -g nodemon // Installer "nodemaon" qui redémarrera 
            le serveur Web à chaque fois qu'un fichier de code source change.

    Pour tester le Back-End avec NodeJS/Express, créer un fichier "index.js" et copier ce bout du code, qui écoute tout simplement le chemin racine du serveur Web et répond toujours par «Hello World!»:

--- Start of code ---

	const express = require('express');
    const app = express();
    const port = 5000;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`App is listening at http://localhost:${port}`);
    });
    
--- End of code ---

 Pour lancer le serveur du Back-End, dans cmd éxecuter:
	\reactjs_nodejs_weather_app_job\server>node index.js 
	    ==> Résultat: " App is listening at  http://localhost:5000 "

 OU:
 Pour plus de "Réalisme" dans le "Rafraichissement" du Back-End, c'est mieux de lancer le "serveur" avec "nodemon":
	\reactjs_nodejs_weather_app_job\server>nodemon
        [nodemon] 2.0.7
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node index.js`
        App is listening at http://localhost:5000

 ==> Ouvrez maintenant votre navigateur et visitez: " localhost: 5000 " et vous devriez voir 
     " Hello World from NodeJS/Express Back-End Server! "

 2/ Partie Front-End avec ReactJS:
    #Dans l'invite de commandes (cmd), tapez l'un de ces cmd(s) suivantes pour la création du projet Front-End:

		\reactjs_nodejs_weather_app_job>create-react-app client 
    ou: \reactjs_nodejs_weather_app_job>npx create-react-app client
    ou: \reactjs_nodejs_weather_app_job>npm init react-app client

Pour ajouter des " dependencies " et " devDependencies " à un fichier " package.json " à partir de la ligne de commande:

    * Vous pouvez les installer dans le répertoire racine de votre package en utilisant l'indicateur --save-prod pour les " dependencies " (le comportement par défaut de " npm install " ), exemple:
    
        " npm install react-router-dom " OU " npm install react-router-dom --save-prod "

    * Le " --save -dev " indicateur pour " devDependencies ", par exemple:
        " npm install eslint-plugin-react --save-dev "

  Pour lancer le serveur du Front-End, dans cmd éxecuter:
	\reactjs_nodejs_weather_app_job\client>npm start 
	    Compiled successfully!

        You can now view client in the browser.

        Local:            http://localhost:3000
        On Your Network:  http://x.y.z.w:3000

        Note that the development build is not optimized.
        To create a production build, use npm run build.

 ==> Ouvrez maintenant votre navigateur et visitez: " localhost: 3000 " et vous devriez voir l'App React.

    Dans l'App Front-End React, J'ai utilisé 'Redux' qui est une bibliothèque JavaScript open-source pour la gestion de l'état des applications avec 'React Redux' qui est la couche de liaisons officielle de 'React UI' pour 'Redux'. Il permet aux composants 'React' de lire les données d'un 'Store Redux' et d'envoyer des actions au 'Store' pour mettre à jour l'état.

    

    NB:
        * J'ai utilisé une 'API météo tierce gratuite', d'Open Weather Map ( 'https://openweathermap.org/' ) pour  obtenir des données météorologiques, en suivant cette forme:
        http://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid={APIkey} 
    
        * L'application 'Back-End NodeJS/Express' sera responsable des appels à l'API météo tierce.
        
        * Dans l'App 'Front-End React' dans le fichier 'src/views/Containers/Home.js', lorsqu'on envoie la valeur   du 'nom de ville (City Name)' ou 'nom de pays (Country Name)', alors Le formulaire de saisie publie sa valeur sur une route 'POST' dans le 'Back-End' ET Cette route 'POST du Back-End' attribue ensuite la valeur d'entrée reçue à une variable afin que nous puissions l'utiliser plus tard lors de l'appel de l'API météo.

  3/ Connection du 'Serveur Back-End NodeJS/Express' avec base de données SQL dans 'SQL Server Management Studio':
     
     * Il faut tout d'abors installer ces 2 librairies 'mssql' & 'msnodesqlv8' dans le fichier 'package.json' de l'app Back-End NodeJS/Express, en utilisant ces 2 cmd(s):

        reactjs_nodejs_weather_app_job\server> npm install msnodesqlv8
        reactjs_nodejs_weather_app_job\server> npm install mssql

      => Puis on utilise cette fonction 'msNodeSqlServerConnection()' dans le fichier [mssql.js] pour se connecter avec la avec base de données SQL dans 'SQL Server Management Studio' et récupérer des données.
        Et l'autre fonction 'msNodeSqlSrvCnxInsertData(...)' dans le fichier [mssql.js] pour se connecter avec la avec base de données SQL dans 'SQL Server Management Studio' et insérer des données.

    




