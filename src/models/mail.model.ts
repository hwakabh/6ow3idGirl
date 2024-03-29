export interface Contact {
  email: string,
  name: string
}

export interface MailBody extends Contact {
  message: string
}

export interface ReqBodySendMail {
  sender: Contact;
  to: Contact[];
  subject: string;
  textContent: string;
}

export interface RespBodySendMail {
  messageId: string
}
