export function sendEmail(to: string, subject: string, body: string): void {
  GmailApp.sendEmail(to, subject, body)
  console.log(`Email sent to: ${to}`)
}

export function getUnreadEmails(): GoogleAppsScript.Gmail.GmailMessage[] {
  const threads = GmailApp.getInboxThreads(0, 10)
  const unreadMessages: GoogleAppsScript.Gmail.GmailMessage[] = []

  threads.forEach((thread) => {
    if (thread.isUnread()) {
      unreadMessages.push(...thread.getMessages())
    }
  })

  return unreadMessages
}
