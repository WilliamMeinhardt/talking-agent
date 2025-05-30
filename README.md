# Talking Agent

Dette er et Next.js-basert prosjekt som lar deg snakke med en AI-agent via stemmen din. Prosjektet bruker ElevenLabs sin API for samtale og talegenerering, og har støtte for talegjenkjenning direkte i nettleseren.

## Funksjoner

- Start og stopp samtale med AI-agent
- Snakk til agenten med mikrofonen din
- Agenten svarer med syntetisk tale
- Mute/unmute agentens stemme
- Brukervennlig og responsivt grensesnitt

## Kom i gang

1. **Installer avhengigheter:**
   ```bash
   npm install
   ```

2. **Sett opp miljøvariabler:**
   Opprett en fil `.env.local` i rotmappen og legg inn din ElevenLabs agent-ID:
   ```
   NEXT_PUBLIC_ELEVENLABS_AGENT_ID=din_agent_id_her
   ```

3. **Start utviklingsserveren:**
   ```bash
   npm run dev
   ```
   Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Bruk

- Trykk på **Start Conversation** for å begynne å snakke med agenten.
- Gi tilgang til mikrofon når du blir spurt.
- Snakk til agenten – svaret kommer som lyd.
- Trykk på **End Conversation** for å avslutte.
- Du kan mute/unmute agenten med volumknappen.

## Feilsøking

- **Ingen lyd?** Sjekk at du har riktig agent-ID i `.env.local` og at du har gitt tilgang til mikrofon.
- **Får ikke startet samtale?** Sjekk konsollen for feilmeldinger og at du har internettforbindelse.
- **Talegjenkjenning virker ikke?** Prøv i Google Chrome, da ikke alle nettlesere støtter Web Speech API.

## Avhengigheter

- [Next.js](https://nextjs.org/)
- [@11labs/react](https://www.npmjs.com/package/@11labs/react)
- [Lucide React](https://lucide.dev/)
- Web Speech API (innebygd i moderne nettlesere)

## Videre arbeid

- Støtte for flere språk
- Bedre feilhåndtering og tilbakemeldinger til bruker
- Mulighet for å velge ulike AI-agenter eller stemmer

---

Laget av [Ditt Navn]  
Innlandet fylkeskommune, 2025
