process.env.MAIL_URL = 'smtp://postmaster%40sandboxca79aa82946f4dae955b96b830c6a598.mailgun.org:PASSWORD@smtp.mailgun.org:587';

AccountsTemplates.configure({
    reCaptcha: {
        secretKey: 'YOUR_KEY'
    },
});
