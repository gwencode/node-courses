// uncaughtException est associé aux erreurs
// non gérées générées de manière synchrone

setTimeout(() => {
  throw new Error("oops");
}, 1000);

process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err);
});

// unhandledRejection est associé aux erreurs non gérées
// générées de manière asynchrone par des promesses

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection", err);
});

// Créons une promesse qui est immédiatement rejetée
const rejectedPromise = new Promise((resolve, reject) => {
  reject(new Error("Oops, something went wrong with the promise!"));
});

// Attendez un certain temps pour que l'événement puisse être capturé
setTimeout(() => {
  // Essayez de consommer la promesse rejetée (ce qui générera une erreur non gérée)
  rejectedPromise.catch((err) => {
    // Dans une application réelle, vous devriez normalement gérer les erreurs de promesse ici
    console.error("Caught promise rejection:", err.message);
  });
}, 1000);
