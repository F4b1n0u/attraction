process.env.MAIL_URL = 'smtp://postmaster%40sandboxca79aa82946f4dae955b96b830c6a598.mailgun.org:PASSWORD@smtp.mailgun.org:587';

AccountsTemplates.configure({
    reCaptcha: {
        secretKey: '6LeRowcTAAAAAITLjSBT2l3nK3xXCdT4m4H6q1th'
    },
});
