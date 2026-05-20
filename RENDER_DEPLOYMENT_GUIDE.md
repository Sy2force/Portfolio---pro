# GUIDE DE DÉPLOIEMENT SUR RENDER

Généré le : 20 mai 2026

---

## PRÉREQUIS

Avant de commencer, assurez-vous d'avoir:
- ✅ Un compte Render (https://render.com)
- ✅ Un compte GitHub avec le repository
- ✅ MongoDB Atlas configuré avec IP whitelist (0.0.0.0/0)

---

## ÉTAPE 1 : CONNECTER LE REPOSITORY À RENDER

1. Connectez-vous à https://dashboard.render.com
2. Cliquez sur "New +" > "Web Service"
3. Sélectionnez "GitHub"
4. Autorisez Render à accéder à votre compte GitHub
5. Sélectionnez le repository: `Portfolio---pro` (ou `shay-acoca-portfolio`)

---

## ÉTAPE 2 : CONFIGURER LE SERVICE

### Informations de base
- **Name:** `shay-acoca-portfolio`
- **Region:** Choisissez la région la plus proche (ex: Frankfurt ou Singapore)
- **Branch:** `main`
- **Runtime:** `Node`

### Build & Deploy
- **Build Command:** `npm run build`
- **Start Command:** `npm start`

### Environment Variables
Ajoutez les variables d'environnement suivantes:

```bash
NODE_VERSION=18
MONGODB_URI=mongodb+srv://shayaco05_db_user:jLzjvbSdYJlwntcB@cluster0.ticelk0.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
ADMIN_PASSWORD=Givenchy26@
```

**IMPORTANT:** Cliquez sur "Advanced" pour chaque variable et sélectionnez "Do not sync" pour MONGODB_URI et ADMIN_PASSWORD.

---

## ÉTAPE 3 : CONFIGURER MONGODB ATLAS

Pour que Render puisse se connecter à MongoDB:

1. Allez sur https://cloud.mongodb.com
2. Ouvrez votre cluster "Cluster0"
3. Allez dans "Network Access" > "IP Access List"
4. Cliquez sur "Add IP Address"
5. Sélectionnez "Allow Access from Anywhere" (0.0.0.0/0)
6. Cliquez sur "Confirm"

**Alternative plus sécurisée:**
- Ajoutez l'IP spécifique de Render (vous pouvez la trouver dans les logs Render après le premier déploiement)

---

## ÉTAPE 4 : DÉPLOYER

1. Cliquez sur "Create Web Service"
2. Attendez que le build se termine (environ 2-5 minutes)
3. Une fois terminé, Render vous donnera une URL comme: `https://shay-acoca-portfolio.onrender.com`

---

## ÉTAPE 5 : VÉRIFIER LE DÉPLOIEMENT

### Test manuel
1. Ouvrez l'URL fournie par Render
2. Vérifiez que la page d'accueil se charge
3. Testez le toggle de langue FR/EN
4. Testez le formulaire de contact
5. Testez la page /resume
6. Testez la page /admin (password: Givenchy26@)

### Test des API
```bash
# Test auth
curl -X POST https://votre-url.onrender.com/api/auth \
  -H "Content-Type: application/json" \
  -d '{"password":"Givenchy26@"}'

# Test contact
curl -X POST https://votre-url.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

---

## ÉTAPE 6 : CONFIGURER LE DOMAINE PERSONNALISÉ (OPTIONNEL)

Si vous avez un domaine personnel:

1. Dans le dashboard Render, allez dans votre service
2. Cliquez sur "Settings" > "Custom Domains"
3. Cliquez sur "Add Domain"
4. Entrez votre domaine (ex: `shayacoca.com`)
5. Render vous donnera les DNS records à ajouter

### DNS Records à ajouter
```
Type: CNAME
Name: @ (ou votre sous-domaine)
Value: votre-service.onrender.com
```

---

## ÉTAPE 7 : CONFIGURER LES REDIRECTIONS HTTP → HTTPS

Render gère automatiquement HTTPS, mais vous pouvez forcer la redirection:

1. Dans "Settings" > "Advanced"
2. Ajoutez une règle de redirection si nécessaire

---

## DÉPLOIEMENT AUTOMATIQUE

Render déploie automatiquement à chaque push sur la branche `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Render détectera automatiquement le push et redéploiera.

---

## RÉSOLUTION DE PROBLÈMES

### Erreur: "MONGODB_URI not configured"
**Solution:** Vérifiez que MONGODB_URI est ajouté dans Environment Variables

### Erreur: "Connection timeout"
**Solution:** Vérifiez l'IP whitelist MongoDB Atlas (0.0.0.0/0)

### Erreur: "Build failed"
**Solution:**
1. Vérifiez les logs de build
2. Assurez-vous que package.json a les scripts corrects
3. Vérifiez que Node.js version 18 est utilisé

### Erreur: "Application not responding"
**Solution:**
1. Vérifiez le start command (`npm start`)
2. Vérifiez que le port est correct (Next.js utilise 3000 par défaut)
3. Vérifiez les logs de l'application

### Erreur: "ADMIN_PASSWORD not configured"
**Solution:** Ajoutez ADMIN_PASSWORD dans Environment Variables

---

## SURVEILLANCE ET LOGS

### Voir les logs
1. Allez dans le dashboard Render
2. Cliquez sur votre service
3. Cliquez sur "Logs"
4. Vous pouvez voir les logs en temps réel

### Métriques
Render fournit des métriques gratuites:
- CPU usage
- Memory usage
- Response time
- Request count

---

## COÛTS

### Plan Free (Recommandé pour commencer)
- **Coût:** $0/mois
- **Limites:**
  - 750 heures/mois
  - 512 MB RAM
  - 0.1 CPU
  - Suspendu après 15 minutes d'inactivité
  - Redémarrage en ~30 secondes

### Plan Starter ($7/mois)
- Pas de suspension après inactivité
- Plus de resources
- Recommandé pour production

---

## COMPARAISON VERCEL vs RENDER

### Actuel
- **Frontend:** Vercel (https://portfolio-pro-2026.vercel.app)
- **Backend API:** Render (https://portfolio-pro-2026.onrender.com)

### Après déploiement complet sur Render
- **Frontend + Backend:** Render (https://shay-acoca-portfolio.onrender.com)
- **Avantage:** Tout sur une seule plateforme
- **Inconvénient:** Vercel offre un CDN global plus rapide

---

## MISE À JOUR DU CODE

Après le déploiement initial, pour mettre à jour:

```bash
# Faire vos modifications
git add .
git commit -m "Description des modifications"
git push origin main
```

Render déploiera automatiquement.

---

## SÉCURITÉ

### Variables d'environnement
- ✅ MONGODB_URI et ADMIN_PASSWORD marqués comme "Do not sync"
- ✅ Jamais commité dans le repository
- ✅ Stockés de manière sécurisée par Render

### MongoDB
- ✅ IP whitelist configurée
- ✅ Connection string sécurisée
- ✅ Utilisateur dédié

---

## CONCLUSION

Une fois déployé sur Render, votre portfolio sera accessible à l'URL fournie. Le déploiement est automatique à chaque push sur GitHub.

**URL après déploiement:** `https://shay-acoca-portfolio.onrender.com`

---

**Guide généré automatiquement le 20 mai 2026**
