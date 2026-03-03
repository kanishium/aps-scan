export const findings = [
  {
    id: 1,
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    time: "10:45:23",
  },
  {
    id: 2,
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    time: "10:45:23",
  },
  {
    id: 3,
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    time: "10:45:23",
  },
];