export const metadata = {
  title: "Privacy Policy",
  description: "How Chanakya Neeti handles your information, browser storage, advertising and cookies.",
};

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Privacy() {
  return (
    <div className="page prose" lang="en">
      <h1>Privacy Policy</h1>
      <p>This site does not ask you to create an account or give any personal information.</p>

      <h2>Information stored in your browser</h2>
      <p>
        The order you choose with the &ldquo;Shuffle shlokas&rdquo; feature is kept only in your own browser (localStorage). It is
        never sent to our servers.
      </p>

      <h2>Advertising and cookies</h2>
      <p>
        This site may show third-party ads, such as Google AdSense. Third-party vendors, including Google, may use cookies to serve
        ads based on your previous visits to this and other websites. You can turn off personalised advertising in your{" "}
        <a href="https://adssettings.google.com" rel="noopener noreferrer">Google Ad Settings</a>.
      </p>

      <h2>Analytics and logs</h2>
      <p>
        Our hosting provider may keep standard server logs (such as IP address, browser type and pages visited) for security and
        reliability. We do not use these logs to identify individual visitors.
      </p>

      <h2>Children</h2>
      <p>This site is not directed at children under 13, and we do not knowingly collect information from them.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be available on this page.</p>

      <h2>Contact</h2>
      <p>For any questions about this policy: {EMAIL || "a contact email will be added soon"}.</p>
    </div>
  );
}
