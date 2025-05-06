# SSGS Calculator

Un'applicazione Node.js per eseguire operazioni matematiche di base (+, -, *, /, ^) con input dell'utente.

## Funzionalità

- Supporta le seguenti operazioni:
  - Addizione (`+`)
  - Sottrazione (`-`)
  - Moltiplicazione (`*`)
  - Divisione (`/`)
  - Potenza (`^`)
- Gestione degli errori:
  - Controllo della divisione per zero.
  - Richiesta di ripetere l'input in caso di errore.
- Interfaccia interattiva tramite terminale.
- Messaggi di saluto casuali alla fine dell'esecuzione.

## Requisiti

- Node.js (versione 22 o superiore)

## Installazione

1. Clona il repository o scarica i file del progetto:
   ```bash
   git clone https://github.com/StefanoNoce/ssgs-calc.git
   cd ssgs-calc
   ```
2. Installa le dipendenze:
   ```bash
   npm ci
   ```

## Esecuzione

Per avviare l'applicazione, esegui il comando seguente dalla root del progetto:
```bash
npm start
```

## Test

Per eseguire i test automatizzati con Jest e generare il report di coverage:
```bash
npm test
```

L'obiettivo è raggiungere il 100% di coverage per tutte le metriche (Statements, Branches, Functions, Lines).

## Integrazione Continua (CI)

Questo progetto utilizza GitHub Actions per eseguire automaticamente i test e verificare la coverage ad ogni push. La pipeline esegue i seguenti passaggi:
- Installa le dipendenze.
- Esegue i test con Jest.
- Genera e carica il report di coverage.

Puoi trovare la configurazione della pipeline nel file `.github/workflows/test.yml`.
