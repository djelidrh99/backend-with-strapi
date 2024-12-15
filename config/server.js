module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Lier l'hôte à 0.0.0.0
  port: env.int('PORT', 1337), // Utiliser le port depuis les variables d'environnement ou 1337 par défaut
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Configuration du serveur pour augmenter les timeouts
  server: {
    keepAliveTimeout: 120000, // 120 secondes
    headersTimeout: 120000,   // 120 secondes
  },
});