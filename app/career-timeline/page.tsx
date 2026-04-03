import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Career Timeline",
  description: "Full career timeline of Subrata Kumar Das.",
  alternates: {
    canonical: "/career-timeline",
  },
  openGraph: {
    title: "Career Timeline | Subrata Kumar Das",
    description: "Full career timeline of Subrata Kumar Das.",
    url: "/career-timeline",
    type: "profile",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Timeline | Subrata Kumar Das",
    description: "Full career timeline of Subrata Kumar Das.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const timeline = [
  { period: "1996", role: "Mechanical Diploma", organisation: "SMIT", type: "education" },
  { period: "1996–1997", role: "Supervisor", organisation: "BPCL vendor, Mumbai" },
  { period: "1997", role: "Health crisis → returned to Odisha", organisation: "—" },
  { period: "1997–2004", role: "C Programming Teacher", organisation: "Lakhotia Computer Center" },
  { period: "1997", role: "6-month computer course", organisation: "APTECH", type: "education" },
  { period: "2004-2006", role: "Officer (data)", organisation: "Sahara India Financial Corp" },
  { period: "2006–2009", role: "Sr. Officer (audit + data)", organisation: "Sahara India Financial Corp" },
  { period: "2009–2014", role: "Jr. Executive / Asst. Sector Manager (4 branches)", organisation: "Sahara India Financial Corp" },
  { period: "2009–2011", role: "BSc IT — while working at Sahara", organisation: "Disha College / Punjab Technical University (Evening Class)", type: "education" },
  { period: "2011-2013", role: "MSc IT — while working at Sahara", organisation: "Disha College / Punjab Technical University (Evening Class)", type: "education" },
  { period: "2014", role: "Left Sahara (SEBI/RBI issue)", organisation: "" },
  { period: "2014–2020", role: "Co-Founder & Tech Lead; shipped 40 Android apps across 40 cities in Odisha", organisation: "Tankadhar Training & Research Center (EdTech)" },
  { period: "2020–2021", role: "Covid pause — transition to mobile dev jobs", organisation: "—" },
  { period: "2021–2022", role: "React Native Developer (remote)", organisation: "Skin Theory, Berlin" },
  { period: "2022–2023", role: "Sr. Software Engineer (remote);", organisation: "NeoSoft Technologies (Indian Insurance client)" },
  { period: "2022–2024", role: "M.Tech CS (AI & ML) — while working", organisation: "Mangalayatan University WILP", type: "education" },
  { period: "2023–2024", role: "Sr. Software Engineer (remote)", organisation: "RIKTAM Technologies (Philipines Ecommerce client)" },
  {
    period: "2024–Present",
    role: "Tech Lead (remote)",
    achievements: [
      "BLE medical device integration (blood pressure monitors, bladder sensors) in React Native",
      "FedRAMP Moderate + HIPAA-aligned encryption and secure storage implementation",
      "On-device AI integration for medical device interpretation in React Native app",
      "React Native version migration 0.59 → 0.76.6 (full New Architecture migration)",
    ],
    organisation: "Krish Services Group (US healthcare client)",
  },
];

export default function CareerTimelinePage() {
  return (
    <div className="sk-page">
      <h1 className="sk-page-heading">Full Career Timeline</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", marginTop: 8, marginBottom: 0 }}>
        A detailed timeline of education, transitions, and roles from 1996 to present.
      </p>
      <div className="sk-squiggle" style={{ marginTop: 16 }} />

      <div style={{ border: "2px solid #1f2937", background: "#fff" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <thead>
            <tr>
              {["Period", "Role", "Organisation"].map((head) => (
                <th
                  key={head}
                  style={{
                    textAlign: "left",
                    padding: "12px 14px",
                    border: "2px solid #1f2937",
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#1f2937",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeline.map((item) => (
              <tr key={`${item.period}-${item.role}`}>
                <td
                  style={{
                    border: "2px solid #1f2937",
                    padding: "12px 14px",
                    verticalAlign: "top",
                    width: "18%",
                    fontWeight: 700,
                    background: item.type === "education" ? "#edf4ff" : "#fff",
                  }}
                >
                  {item.period}
                </td>
                <td
                  style={{
                    border: "2px solid #1f2937",
                    padding: "12px 14px",
                    verticalAlign: "top",
                    width: "47%",
                    lineHeight: 1.45,
                    background: item.type === "education" ? "#edf4ff" : "#fff",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: item.achievements ? 8 : 0 }}>{item.role}</div>
                  {item.achievements ? (
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {item.achievements.map((achievement) => (
                        <li key={achievement} style={{ marginBottom: 6 }}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </td>
                <td
                  style={{
                    border: "2px solid #1f2937",
                    padding: "12px 14px",
                    verticalAlign: "top",
                    width: "35%",
                    lineHeight: 1.45,
                    background: item.type === "education" ? "#edf4ff" : "#fff",
                  }}
                >
                  {item.organisation || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
