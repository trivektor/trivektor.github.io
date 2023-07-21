export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400);
  }

  const { name, email, message } = req.body;
  const authToken = process.env.TWILLIO_AUTH_TOKEN;
  const accountSid = process.env.TWILLIO_ACCOUNT_SID;
  const client = require("twilio")(accountSid, authToken);

  try {
    await client.messages.create({
      body: `${name} (${email}) just sent you a message:
${message}`,
      from: `+${process.env.TWILLIO_PHONE_NUMBER}`,
      to: `+${process.env.MY_PHONE_NUMBER}`,
    });

    res.status(200).send();
  } catch (err) {
    console.log({ err });

    res.status(500).send();
  }
}
