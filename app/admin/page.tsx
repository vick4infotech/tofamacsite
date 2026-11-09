import {isAdmin,configReady} from "@/lib/admin-auth";
import {LockKeyhole,ArrowUpRight,ShieldCheck} from "lucide-react";
import {AdminWorkspace} from "./workspace";
import {getSiteSettings} from "@/lib/site-settings";
import {databaseReady} from "@/lib/db";
import {getSupportMessages} from "@/lib/support";
export const dynamic="force-dynamic";
function Login({error,configured}:{error:boolean,configured:boolean}) {
 return <section className="admin-login-page"><div className="admin-login-card">
 <div className="admin-login-brand"><div className="admin-login-brand-mark">T</div><span>TOFAMAC <strong>SEO</strong></span></div>
 <div className="admin-login-icon"><LockKeyhole size={25}/></div>
 <h1>Welcome back</h1><p className="admin-muted">Sign in to your website administration.</p>
 {!configured&&<div className="admin-error">Admin login is not configured. Add ADMIN_PASSWORD and ADMIN_SESSION_SECRET to Vercel environment variables.</div>}
 {error&&<div className="admin-error">The username or password is incorrect. Please try again.</div>}
 <form action="/admin/login" method="POST" className="admin-login-form">
 <label htmlFor="username">Username</label><input id="username" name="username" type="text" defaultValue="admin" required autoComplete="username" />
 <div className="admin-between"><label htmlFor="password">Password</label><span className="admin-hint">Secure access</span></div>
 <input id="password" name="password" type="password" placeholder="Enter your password" required autoComplete="current-password" />
 <button type="submit" disabled={!configured} className="admin-primary admin-login-button">Sign in to dashboard <ArrowUpRight size={17}/></button>
 </form><div className="admin-secure"><ShieldCheck size={15}/> Protected with a server-side login and secure session cookie</div>
 </div><p className="admin-login-bottom">© 2026 Tofamac SEO · Admin interface · <a href="/">Back to website</a></p></section>
}

export default async function AdminPage({searchParams}:{searchParams:Promise<{error?:string}>}) {
 const query=await searchParams;
 if(!(await isAdmin()))return <Login error={query.error==="invalid"} configured={configReady()}/>;
 const connected=databaseReady();
 let messages: Awaited<ReturnType<typeof getSupportMessages>>=[];
 let problem="";
 if(connected){try{messages=await getSupportMessages()}catch{problem="Database tables not available. Run the supplied SQL in Supabase."}}
 return <AdminWorkspace initialMessages={messages} initialSettings={await getSiteSettings()} connected={connected} problem={problem}/>;
}
