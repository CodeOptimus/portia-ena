export type Certification = {
  name: string;
  issuer: string;
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
    name: "Example Security Certification",
    issuer: "Example Issuer",
    date: "2025",
    credentialUrl: "https://example.com/verify",
    credentialId: "ABC-123",
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
