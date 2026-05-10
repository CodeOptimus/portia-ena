export type Certification = {
  name: string;
  issuer: string;
  /** Optional logo URL (or `/...` path in `public/`) for the issuer */
  issuerLogoUrl?: string;
  /** Year earned or expiry note, e.g. "2024" or "Valid through 2026" */
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
};

export type Training = {
  title: string;
  provider: string;
  /** When you finished, e.g. "2025" or "Mar 2025" */
  completed?: string;
  url?: string;
};

/** Edit this list with your real certifications. */
export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    issuerLogoUrl: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
    date: "",
    credentialUrl:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fspecialization%2FARJ51AWFG8P9&urlhash=hOxb&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BwhY732KeSNio6RN9WP1Afw%3D%3D",
    credentialId: "",
  },
  {
    name: "ISO/IEC 27001 Lead Auditor",
    issuer: "Mastermind Assurance",
    issuerLogoUrl:
      "https://import.cdn.thinkific.com/1003487%2Fcustom_site_themes%2Fid%2FmJvRUvXCSYu0ZLm1n5FS_Mastermind%20Text%20Logo.png",
    date: "",
    credentialUrl:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flearn.mastermindassurance.com%2Fcertificates%2Fl7sopedpu9&urlhash=_Pvo&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BwhY732KeSNio6RN9WP1Afw%3D%3D",
    credentialId: "",
  },
  {
    name: "Wallarm API Security Associate",
    issuer: "Wallarm",
    issuerLogoUrl:
      "https://assets.website-files.com/5fe3434623c64c793987363d/5fe35f4dbf861c75ba14e7d9_no-paddings-EN.svg",
    date: "",
    credentialUrl:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwallarm.thinkific.com%2Fcertificates%2Fvgp9pyqetm&urlhash=wj2b&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BwhY732KeSNio6RN9WP1Afw%3D%3D",
    credentialId: "",
  },
  {
    name: "CRPO — Certified Ransomware Protection Officer",
    issuer: "EU Cyber Academy",
    issuerLogoUrl: "https://lwfiles.mycourse.app/cyberriskacademy-public/0186d56ac38fa1a9d7e42c2544f2a702.png",
    date: "",
    credentialUrl:
      "https://www.linkedin.com/in/portia-mawuena/overlay/Certifications/178532761/treasury/?profileId=ACoAADBlOZkBNIJN7tR27eWDwEHNhsto5P2RPV0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BfXUaBYtpShqQjfIAjLlc4Q%3D%3D",
    credentialId: "",
  },
];

/** Courses, bootcamps, and structured training — not formal certs. */
export const trainings: Training[] = [
  {
    title: "Example offensive security lab",
    provider: "Example Academy",
    completed: "2025",
    url: "https://example.com/course",
  },
];
