import express from 'express';
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer.adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackService } from './services/submit-feedback.service';

export const routes = express.Router();

routes.post('/feedback', async (req, res) => {

    console.log('REQUEST /feedback')

    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerAdapter = new NodemailerAdapter();
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbackRepository, 
        nodemailerAdapter
    );

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send();
})