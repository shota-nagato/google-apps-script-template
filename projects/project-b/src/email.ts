import { sendEmail, getUnreadEmails } from "./functions/email1";

declare const global: {
  [key: string]: any;
};

// Email関連の関数をglobalに公開
global.sendEmail = sendEmail;
global.getUnreadEmails = getUnreadEmails; 