import * as React from 'react';

interface EmailTemplateProps {
  assigned: string;
  reporter: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  assigned, reporter
} : any) => (
  <div>
    <h1>Hello, {assigned}!</h1>
    <p>You have a new task from {reporter}.</p>
  </div>
);
