
import { EmailTemplate } from '@/components/email/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const getUserByUsername = async (username: any) => {
    try {
      const res = await fetch(`${process.env.HOST}/api/useByUsername/${username}`, {
        cache: "no-store"
      })
  
      if (!res.ok) {
        throw new Error("Faild to find user")
      }
  
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }

export async function POST(request: Request) {
    const { reporter, assigned, task } = await request.json();
    const { user } = await getUserByUsername(assigned)
    

    try {
        const data = await resend.emails.send({
            from: 'Crunch <onboarding@resend.dev>',
            to: [`${user.email}`],
            subject: 'You have new task',
            text: '',
            react: EmailTemplate({ assigned: user.username, reporter: reporter, task: task }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
