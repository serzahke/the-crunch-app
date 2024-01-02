import * as React from 'react';

interface EmailTemplateProps {
  invitedBy: string;
  email: string;
}

export const EmailInviteUserByOrganization: React.FC<Readonly<EmailTemplateProps>> = ({
  invitedBy, email
}: any) => (
  <div>
    <h1>Hello!</h1>
    <p>You're invited to a project by' {invitedBy}.</p>
    <br></br>
    <p>Access the project via signing in crunch:</p>
    <a href={`${process.env.HOST}/signin`}>
      {`${process.env.HOST}/signin`}
    </a>
  </div>
);
