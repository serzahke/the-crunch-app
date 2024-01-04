
import { EmailInviteUserByOrganization } from '@/components/email/EmailInviteUserByOrganization';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {invitedBy, email } = await request.json();
    
    try {
        const data = await resend.emails.send({
            from: 'Crunch <onboarding@resend.dev>',
            to: [`${email}`],
            subject: "Your invited to crunch",
            text: '',
            react: EmailInviteUserByOrganization({ 
              invitedBy: invitedBy,
              email: email
            }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
