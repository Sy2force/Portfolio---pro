# INSTRUCTIONS POUR CORRIGER LES FONCTIONNALITÉS SUR RENDER

## PROBLÈME IDENTIFIÉ
Les variables d'environnement (MONGODB_URI, ADMIN_PASSWORD) n'étaient pas configurées dans render.yaml.

## ÉTAPES POUR CORRIGER SUR RENDER

### 1. Allez sur le dashboard Render
- Connectez-vous à https://dashboard.render.com
- Ouvrez votre service "shay-acoca-portfolio"

### 2. Configurez les variables d'environnement
Dans le dashboard Render:
- Cliquez sur votre service
- Allez dans "Environment"
- Ajoutez les variables suivantes:

```
MONGODB_URI = mongodb+srv://shayaco05_db_user:jLzjvbSdYJlwntcB@cluster0.ticelk0.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
ADMIN_PASSWORD = Givenchy26@
```

### 3. Configurez MongoDB Atlas (IMPORTANT)
Pour que Render puisse se connecter à MongoDB:
- Allez sur https://cloud.mongodb.com
- Ouvrez votre cluster
- Allez dans "Network Access" > "IP Access List"
- Ajoutez l'IP: `0.0.0.0/0` (autorise toutes les IP pour Render)
- OU ajoutez l'IP de Render (plus sécurisé)

### 4. Redémarrez le service Render
- Dans le dashboard Render
- Cliquez sur "Manual Deploy" > "Clear build cache & deploy"
- Attendez que le déploiement soit terminé

### 5. Testez les fonctionnalités
Après le redéploiement, testez:
- Formulaire de contact: POST https://portfolio-pro-2026.onrender.com/api/contact
- Admin dashboard: GET https://portfolio-pro-2026.onrender.com/api/contact (avec Authorization header)

## API ROUTES DISPONIBLES

- `POST /api/contact` - Envoyer un message
- `GET /api/contact` - Récupérer les messages (nécessite auth admin)
- `POST /api/auth` - Authentification admin
- `GET /api/comments` - Récupérer les commentaires
- `POST /api/comments` - Ajouter un commentaire

## ERREURS COURANTES

### Erreur: "Failed to save message"
- Vérifiez que MONGODB_URI est correctement configuré
- Vérifiez que l'IP whitelist MongoDB autorise Render

### Erreur: "Unauthorized"
- Vérifiez que ADMIN_PASSWORD est configuré
- Utilisez le header: `Authorization: Bearer Givenchy26@`

### Erreur: "Connection timeout"
- Vérifiez la connexion MongoDB
- Vérifiez l'IP whitelist MongoDB

## VÉRIFICATION

Après configuration, testez avec curl:
```bash
curl -X POST https://portfolio-pro-2026.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

## SUPPORT

Si les problèmes persistent:
1. Vérifiez les logs Render dans le dashboard
2. Vérifiez les logs MongoDB Atlas
3. Contactez le support Render
