import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || 'false') === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

function registrationTemplate({ name, email, profilePicUrl }) {
  const imagePart = profilePicUrl
    ? `<p style="margin-top:16px">Your profile picture:</p><img src="${profilePicUrl}" alt="Profile Picture" style="max-width:200px;border-radius:8px;border:1px solid #e5e7eb" />`
    : '';
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:1.5;color:#111827">
    <h1 style="font-size:20px;margin-bottom:8px">Registration Successful 🎉</h1>
    <p>Hi ${name || 'there'},</p>
    <p>Welcome to SecureSpace! Your registration with <strong>${email}</strong> was successful.</p>
    ${imagePart}
    <p style="margin-top:16px">Thanks,<br/>The SecureSpace Team</p>
  </div>
  `;
}

export async function sendRegistrationEmail({ name, email, profilePicUrl }) {
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const html = registrationTemplate({ name, email, profilePicUrl });

  await transporter.sendMail({
    from,
    to: email,
    subject: 'SecureSpace: Registration Successful',
    text: `Hi ${name}, your registration with ${email} was successful. Welcome to SecureSpace!`,
    html
  });
}

export { transporter };