import { MailAdapter } from "../adapters/mail.adapter";
import { FeedbacksRepository } from "../repositories/feedbacks.repository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    constructor(
        private feedbacksRespository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ){}

    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, comment, screenshot } = request;
        
        
        if (!type) {
            throw new Error('Type is required.');
        }

        if (!comment) {
            throw new Error('Comment is required.');
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.');
        }

        this.feedbacksRespository.create({
            type,
            comment,
            screenshot
        });
        
        this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img style="display:block;width:100px;height:100px;" src="${screenshot}" />` : '',
                '</div>',
            ].join('')
        })

    }
}