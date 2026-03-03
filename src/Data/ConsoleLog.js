export const activityLogs = [
  {
    time: "09:00:00",
    parts: [
      { text: "I'll begin a systematic penetration test on " },
      { text: "helpdesk.democorp.com", type: "url" },
      { text: ". Let me start with reconnaissance and enumeration." },
    ],
  },
  {
    time: "09:03:00",
    parts: [
      { text: "Great! I found a login page. Comment: " },
      { text: '"TODO: Delete the testing account (test:test)"', type: "highlight" },
      { text: ". Login redirects to " },
      { text: "/password/test", type: "path" },
      { text: "." },
    ],
  },
  {
    time: "09:06:00",
    parts: [
      { text: "Accessed dashboard using header " },
      { text: "X-UserId: 10032", type: "header" },
      { text: ". Possible " },
      { text: "**IDOR vulnerability**", type: "danger" },
    ],
  },
  {
    time: "09:06:00",
    parts: [
      { text: "Accessed dashboard using header " },
      { text: "X-UserId: 10032", type: "header" },
      { text: ". Possible " },
      { text: "**IDOR vulnerability**", type: "danger" },
    ],
  },
  {
    time: "09:06:00",
    parts: [
      { text: "Accessed dashboard using header " },
      { text: "X-UserId: 10032", type: "header" },
      { text: ". Possible " },
      { text: "**IDOR vulnerability**", type: "danger" },
    ],
  },
  {
    time: "09:06:00",
    parts: [
      { text: "Accessed dashboard using header " },
      { text: "X-UserId: 10032", type: "header" },
      { text: ". Possible " },
      { text: "**IDOR vulnerability**", type: "danger" },
    ],
  },
];