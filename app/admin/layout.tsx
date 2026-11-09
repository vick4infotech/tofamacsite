import type { Metadata } from "next";
import "./admin.css";
export const metadata:Metadata={title:"Admin Preview | Tofamac SEO",robots:{index:false,follow:false}};
export default function AdminLayout({children}:{children:React.ReactNode}) {return <main className="admin-app">{children}</main>}
