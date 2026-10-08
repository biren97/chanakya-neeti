export const metadata = { title: "संपर्क और प्रतिक्रिया" };

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Contact() {
  return (
    <div className="page prose">
      <h1>संपर्क और प्रतिक्रिया</h1>
      <p>आपकी प्रतिक्रिया इस साइट को बेहतर बनाती है। श्लोक में कोई त्रुटि मिले, अर्थ में सुधार का सुझाव हो, या अपना कोई अनुभव साझा करना हो, तो हमें लिखें।</p>
      {EMAIL ? (
        <p><a className="btn primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent("चाणक्य नीति साइट पर प्रतिक्रिया")}`}>ईमेल भेजें: {EMAIL}</a></p>
      ) : (
        <p>संपर्क ईमेल जल्द जोड़ा जाएगा।</p>
      )}
      <h2>किन बातों पर लिखें</h2>
      <ul>
        <li>श्लोक की वर्तनी या क्रम में त्रुटि</li>
        <li>अर्थ या सार को और स्पष्ट करने के सुझाव</li>
        <li>किसी श्लोक से जुड़ा आपका वास्तविक जीवन का अनुभव</li>
        <li>तकनीकी समस्या या सुझाव</li>
      </ul>
    </div>
  );
}
