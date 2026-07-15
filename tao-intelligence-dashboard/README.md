# TAO Intelligence Dashboard

A deployable prototype for a private Bittensor investment-research dashboard.

## Included
- Responsive dashboard for desktop and mobile
- Model portfolio and subnet opportunity rankings
- Illustrative performance chart
- Weekly and twice-monthly Vercel cron configuration
- Secured refresh route placeholder
- Architecture ready for Supabase, market APIs, GitHub data, alerts, and PDF report generation

## Run locally
1. Install Node.js 20.9 or later.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Deploy to Vercel
1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel.
3. Add an environment variable named `CRON_SECRET`.
4. Deploy.

## Production implementation roadmap
### Phase 1
- Supabase authentication and private access
- Portfolio transaction tables
- Live market and Bittensor data ingestion
- Historical metric storage

### Phase 2
- Opportunity scoring engine
- Weekly and twice-monthly automated research jobs
- Email alerts and report archive
- Admin controls for approving research conclusions

### Phase 3
- News, GitHub, governance, emissions, and validator monitoring
- Scenario models and portfolio attribution
- Monthly PDF investment committee report

## Important
All data in the prototype is illustrative. The refresh endpoint is a safe placeholder and does not call external APIs or execute trades.
