export const EMAIL = "ayeshatahsin1000@gmail.com";
export const FIVERR_URL = "https://www.fiverr.com/s/K3w4gqE";

export function gmailLink(subject = "Project inquiry", body = "") {
  return (
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(EMAIL)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}