# Convertisseur d'Unités

## 🌟 Présentation du Projet

Ce projet est une application web de *conversion d'unités* construite avec *React* et stylisée avec *Bootstrap*. L'objectif est de proposer une interface moderne, intuitive et réactive pour effectuer des conversions entre différentes unités de mesure :

* Longueur (mètres, kilomètres, pieds, yards, miles)
* Poids (grammes, kilogrammes, onces, livres)
* Température (Celsius, Fahrenheit, Kelvin)

## 🔧 Fonctionnalités

* Interface utilisateur en français
* Conversion instantanée entre plusieurs unités
* Design adaptatif (responsive) pour mobile, tablette et bureau
* Interface moderne avec Bootstrap 5
* Gestion intuitive des sélections d'unités et des catégories

## 🔄 Technologies Utilisées

* *React* (v19)
* *Bootstrap* (v5)
* *Vite* (pour le build et le développement rapide)
* *JavaScript (ES6)*

## 🔢 Installation et Lancement du Projet

### Prérequis

* Node.js (v18 ou plus)
* npm ou yarn

### Etapes

1. *Cloner le projet*

bash
git clone https://github.com/votre-utilisateur/convertisseur-unites.git
cd convertisseur-unites


2. *Installer les dépendances*

bash
npm install


3. *Lancer le serveur de développement*

bash
npm run dev


L'application sera disponible à l'adresse : http://localhost:5173

4. *Construire pour la production*

bash
npm run build


## 🔄 Structure du projet


convertisseur-unites/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md


* App.jsx : Composant principal contenant toute la logique de conversion et l'interface utilisateur.
* main.jsx : Point d'entrée de l'application React.
* index.css : Feuille de style personnalisée (peut inclure Bootstrap importé).

## 🔒 Exemple d’Utilisation

1. Choisissez une *catégorie* (Longueur, Poids ou Température).
2. Sélectionnez les unités d'origine et de destination.
3. Entrez une valeur à convertir.
4. Cliquez sur le bouton *Convertir* pour afficher le résultat.