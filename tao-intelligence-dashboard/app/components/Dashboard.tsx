"use client";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { performance, portfolio, subnets } from "../data/mock";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function Dashboard() {
  return <main>
    <aside>
      <div className="brand"><span className="logo">τ</span><div><strong>TAO Intelligence</strong><small>Private Research Desk</small></div></div>
      <nav>{["Overview","Portfolio","Subnet Rankings","Deep Dives","Opportunity Scanner","Risk Center","Reports","Settings"].map((x,i)=><a className={i===0?"active":""} key={x}>{x}</a>)}</nav>
      <div className="system"><span className="dot"/>Automation online<small>Next weekly scan: Sunday</small></div>
    </aside>
    <section className="content">
      <header><div><p className="eyebrow">INVESTMENT COMMAND CENTER</p><h1>Good morning, Marvin.</h1><p>Portfolio intelligence, subnet rankings, and scheduled research in one place.</p></div><button>Run research scan</button></header>
      <div className="alert"><strong>Research alert:</strong> Two subnet scores changed by more than five points. Review before the next allocation decision.</div>
      <div className="metrics">
        <Card label="Model portfolio" value="$25,000" note="Initial capital"/>
        <Card label="Target range" value="$3M–$5M" note="Aspirational, high-risk"/>
        <Card label="TAO allocation" value="40%" note="$10,000 core position"/>
        <Card label="Risk posture" value="Aggressive" note="No leverage policy"/>
      </div>
      <div className="grid two">
        <article className="panel chart"><div className="panelHead"><div><h2>Portfolio trajectory</h2><p>Illustrative indexed performance</p></div><span className="pill">Sample data</span></div>
          <ResponsiveContainer width="100%" height={280}><AreaChart data={performance}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month"/><YAxis domain={[90,150]}/><Tooltip/><Area type="monotone" dataKey="portfolio" stroke="currentColor" fill="currentColor" fillOpacity={0.12}/><Area type="monotone" dataKey="tao" stroke="currentColor" fillOpacity={0}/></AreaChart></ResponsiveContainer>
        </article>
        <article className="panel"><div className="panelHead"><div><h2>Allocation model</h2><p>Current strategic framework</p></div></div>
          {portfolio.map(p=><div className="allocation" key={p.asset}><div><strong>{p.asset}</strong><span>{money.format(p.invested)} · {p.thesis}</span></div><div className="bar"><i style={{width:`${p.allocation}%`}}/></div><b>{p.allocation}%</b></div>)}
        </article>
      </div>
      <article className="panel tablePanel"><div className="panelHead"><div><h2>Subnet opportunity ranking</h2><p>Composite score based on product, team, adoption, economics, liquidity, moat, and valuation</p></div><button className="secondary">View all subnets</button></div>
        <table><thead><tr><th>Rank</th><th>Subnet</th><th>Sector</th><th>Score</th><th>Change</th><th>Action</th></tr></thead><tbody>{subnets.map(s=><tr key={s.name}><td>#{s.rank}</td><td><strong>{s.name}</strong><small>{s.id}</small></td><td>{s.sector}</td><td><span className="score">{s.score}</span></td><td>{s.trend}</td><td><span className="tag">{s.action}</span></td></tr>)}</tbody></table>
      </article>
      <div className="grid three">
        <article className="panel compact"><h3>Weekly scan</h3><p>Prices, emissions, liquidity, GitHub activity, and material ecosystem changes.</p><strong>Every Sunday · 8:00 AM</strong></article>
        <article className="panel compact"><h3>Twice-monthly research</h3><p>Conviction changes, new candidates, thesis updates, and buy-zone review.</p><strong>1st and 15th · 7:00 AM</strong></article>
        <article className="panel compact"><h3>Investment committee report</h3><p>Performance attribution, risk review, scenarios, and recommended actions.</p><strong>Monthly · 1st business day</strong></article>
      </div>
      <footer>Decision-support system only. Data shown in this prototype is illustrative and is not financial advice.</footer>
    </section>
  </main>
}
function Card({label,value,note}:{label:string,value:string,note:string}){return <article className="metric"><span>{label}</span><strong>{value}</strong><small>{note}</small></article>}
