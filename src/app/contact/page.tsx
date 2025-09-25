import React from 'react'

const ContactPage = () => {
  return (
      <div>
        <h1>Contact Me</h1>
        <p>ご覧いただきありがとうございました。</p>
        <p>ご意見・ご質問などあればお気軽にご連絡ください。</p>
        <div>
          <input type="text" placeholder="お名前" />
          <input type="email" placeholder="ご返信先メールアドレス" />
          <textarea placeholder="お問い合わせ内容" />
          <button type="submit">送信</button>
        </div>
      </div>
  )
}

export default ContactPage
