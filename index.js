import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/contactus', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const msg = {
        to: 'lifescanvasco@gmail.com', 
        from: 'lifescanvasco@gmail.com',
        templateId: process.env.SENDGRID_TEMPLATE_ID,
        dynamic_template_data: {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent successfully!');
        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));