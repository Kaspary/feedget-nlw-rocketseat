import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e4234f9f158d07",
        pass: "a8b2533cb54d90"
    }
});

export class NodemailerAdapter implements MailAdapter {
    
    async sendMail({ subject, body }: SendMailData) {
        transport.sendMail({
            from: 'Equipe Feedget <noreply@feedfet.com>',
            to: 'João Pedro Kaspary <joaopedrokaspary@hotmail.com>',
            subject: subject,
            html: body
        });
    }
}
