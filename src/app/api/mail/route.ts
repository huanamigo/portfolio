import { VercelInviteUserEmail } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const preview = {
    username: 'alanturing',
    userImage: `/static/vercel-user.png`,
    invitedByUsername: 'Alan',
    invitedByEmail: 'alan.turing@example.com',
    teamName: 'Enigma',
    teamImage: `/static/vercel-team.png`,
    inviteLink: 'https://vercel.com/teams/invite/foo',
    inviteFromIp: '204.13.186.218',
    inviteFromLocation: 'São Paulo, Brazil',
  };

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['taktycznydrugimail@gmail.com'],
      subject: 'Hello world',
      react: VercelInviteUserEmail(preview),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
