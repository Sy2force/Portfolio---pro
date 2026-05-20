# VARIABLES D'ENVIRONNEMENT POUR RENDER

## À AJOUTER DANS LE DASHBOARD RENDER

Allez dans votre service Render > Environment Variables et ajoutez les variables suivantes :

---

### 1. NODE_VERSION

**Key:** `NODE_VERSION`
**Value:** `18`
**Sync:** Non coché

**Description:** Version de Node.js à utiliser pour le déploiement

---

### 2. MONGODB_URI

**Key:** `MONGODB_URI`
**Value:**
```
mongodb+srv://shayaco05_db_user:jLzjvbSdYJlwntcB@cluster0.ticelk0.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
```
**Sync:** ❌ NE PAS SYNCHRONISER (cocher "Do not sync")

**Description:** Chaîne de connexion MongoDB Atlas

**IMPORTANT:**
- Marquez cette variable comme "Do not sync" pour éviter de l'exposer dans le repository
- Cette valeur contient votre mot de passe MongoDB
- Ne partagez jamais cette valeur publiquement

---

### 3. ADMIN_PASSWORD

**Key:** `ADMIN_PASSWORD`
**Value:** `Givenchy26@`
**Sync:** ❌ NE PAS SYNCHRONISER (cocher "Do not sync")

**Description:** Mot de passe pour accéder au dashboard admin

**IMPORTANT:**
- Marquez cette variable comme "Do not sync"
- Utilisez un mot de passe fort
- Changez ce mot de passe régulièrement

---

## CONFIGURATION DANS RENDER.YAML

Le fichier `render.yaml` contient déjà la configuration :

```yaml
services:
  - type: web
    name: shay-acoca-portfolio
    env: node
    buildCommand: npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 18
      - key: MONGODB_URI
        sync: false
      - key: ADMIN_PASSWORD
        sync: false
```

---

## ÉTAPES DANS RENDER DASHBOARD

1. Connectez-vous à https://dashboard.render.com
2. Ouvrez votre service "shay-acoca-portfolio"
3. Cliquez sur "Environment"
4. Cliquez sur "Add Environment Variable"
5. Ajoutez chaque variable avec les valeurs ci-dessus
6. Pour MONGODB_URI et ADMIN_PASSWORD, cliquez sur "Advanced" et cochez "Do not sync"
7. Cliquez sur "Save Changes"
8. Redéployez le service (Manual Deploy > Clear build cache & deploy)

---

## SÉCURITÉ

✅ **Variables sensibles marquées comme "Do not sync"**
✅ **Jamais commité dans le repository**
✅ **Stockées de manière sécurisée par Render**
✅ **Accessibles seulement au runtime**

---

## VARIABLES OPTIONNELLES (FUTUR)

Vous pouvez ajouter ces variables si nécessaire :

### VITE_API_URL
**Key:** `VITE_API_URL`
**Value:** `https://shay-acoca-portfolio.onrender.com`
**Description:** URL de l'API pour le frontend

### NODE_ENV
**Key:** `NODE_ENV`
**Value:** `production`
**Description:** Environnement d'exécution

---

**Généré le 20 mai 2026**
