
# Application de Réservation d'Hôtels

Cette application se compose de deux parties :
1. **Frontend** : Une application Next.js pour l'interface utilisateur.
2. **Backend** : Un serveur Flask pour la gestion des données et des endpoints API.

## Prérequis

Assurez-vous que les outils suivants sont installés sur votre machine :
- **Python** (v3.8 ou supérieur) avec `pip` pour le backend.
- **Node.js** (v16 ou supérieur) et npm (ou Yarn) pour le frontend.
- **Git** pour cloner le dépôt.

---

## 1. Installation et lancement du backend Flask

### Étape 1 : Cloner le dépôt et accéder au dossier Projet_architecture
```bash
git clone <url_du_dépôt>
cd Projet_architecture
```

### Étape 2 : Créer et activer un environnement virtuel Python
```bash
# Créer l'environnement virtuel
python -m venv venv

# Activer l'environnement virtuel
# Sous Windows :
venv\Scripts\activate
# Sous macOS/Linux :
source venv/bin/activate
```

### Étape 3 : Installer les dépendances
```bash
pip install -r requirements.txt
```

### Étape 4 : Configurer les variables d'environnement
Assurez-vous que Flask est configuré correctement :
```bash
MONGO_URI= <url vers la base de donnée>

### Étape 5 : Lancer le serveur Flask
```bash
flask run
```

Le serveur sera accessible par défaut à l'adresse : [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

## 2. Installation et lancement du frontend Next.js

### Étape 1 : Accéder au dossier projet_architecture_frontend
```bash
cd projet_architecture_frontend
```

### Étape 2 : Installer les dépendances
```bash
npm install
# ou avec Yarn :
yarn install
```

### Étape 3 : Lancer le serveur de développement
```bash
npm run dev
# ou avec Yarn :
yarn dev
```

L'application frontend sera accessible par défaut à l'adresse : [http://localhost:3000](http://localhost:3000).

---

## 3. Intégration entre le frontend et le backend

### Configuration des appels API
Le frontend communique avec le backend via des requêtes API. Assurez-vous que les URLs des endpoints dans votre code Next.js (par exemple, `/cities`, `/hotels`, `/bookings`) pointent bien vers le serveur Flask : `http://127.0.0.1:5000`.

### Gestion des problèmes CORS
Si vous rencontrez des problèmes liés aux permissions d'accès entre le frontend et le backend, assurez-vous que Flask gère correctement les CORS (Cross-Origin Resource Sharing). Ajoutez cette configuration dans votre application Flask si nécessaire :
```python
from flask_cors import CORS

CORS(app)
```

---

## 4. Dépannage

### Problème : Erreur liée aux dépendances Flask
Si Flask ne démarre pas correctement, vérifiez que toutes les dépendances sont installées avec :
```bash
pip install -r requirements.txt
```

### Problème : Les requêtes API échouent dans le frontend
- Vérifiez que le serveur Flask est bien lancé sur `http://127.0.0.1:5000`.
- Assurez-vous que les variables utilisées dans le frontend (comme les paramètres de recherche) sont correctement transmises au backend.

---

## 5. Notes supplémentaires

### Variables d'environnement
Si votre application nécessite des clés ou des configurations spécifiques, créez un fichier `.env` dans le dossier correspondant et configurez les variables nécessaires.


