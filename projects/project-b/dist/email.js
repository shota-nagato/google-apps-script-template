var global = this;
// projects/project-b/src/email.ts
function sendEmail() {
}
function getUnreadEmails() {
}
"use strict";
(() => {
  // projects/project-b/src/functions/email1.ts
  function sendEmail(to, subject, body) {
    GmailApp.sendEmail(to, subject, body);
    console.log(`Email sent to: ${to}`);
  }
  function getUnreadEmails() {
    const threads = GmailApp.getInboxThreads(0, 10);
    const unreadMessages = [];
    threads.forEach((thread) => {
      if (thread.isUnread()) {
        unreadMessages.push(...thread.getMessages());
      }
    });
    return unreadMessages;
  }

  // projects/project-b/src/email.ts
  global.sendEmail = sendEmail;
  global.getUnreadEmails = getUnreadEmails;
})();
