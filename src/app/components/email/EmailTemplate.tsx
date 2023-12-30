import * as React from 'react';

interface EmailTemplateProps {
  assigned: string;
  reporter: string;
  task: object;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  assigned, reporter, task
}: any) => (
  <div>
    <h1>Hello, {assigned}!</h1>
    <p>You have a new task from {reporter}.</p>
    <br></br>
    <p>Access the task via fast link:</p>
    <a href={`${process.env.HOST}/dashboard/todos/tasks/${task._id}`}>
      {`${process.env.HOST}/dashboard/todos/tasks/${task._id}`}
    </a>
  </div>
);
