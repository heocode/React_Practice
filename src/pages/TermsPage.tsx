const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using Reweb ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not access or use our Service.

We reserve the right to update these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.`,
  },
  {
    title: '2. Description of Service',
    content: `Reweb is a visual website builder that allows users to create, edit, and export websites using a drag-and-drop interface powered by React, Tailwind CSS, and Shadcn UI components.

The Service includes access to our web-based editor, component library, export functionality, and any associated tools, features, or content we provide.`,
  },
  {
    title: '3. User Accounts',
    content: `To access certain features of the Service, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Maintain the security of your account credentials
• Notify us immediately of any unauthorised use of your account
• Accept responsibility for all activities that occur under your account

You may not use another person's account without permission. We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    title: '4. Intellectual Property',
    content: `The Service and its original content (excluding user-generated content), features, and functionality are and will remain the exclusive property of Reweb and its licensors.

Code generated and exported by the Service belongs to you. You retain full ownership of websites and code you create using Reweb. However, the underlying templates, component designs, and the Reweb platform itself remain our intellectual property.

Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Reweb.`,
  },
  {
    title: '5. User Content',
    content: `You retain ownership of any content you create or upload to the Service. By using the Service, you grant Reweb a non-exclusive, worldwide, royalty-free license to use, reproduce, and display your content solely for the purpose of providing the Service to you.

You are solely responsible for your content and the consequences of sharing it. You represent and warrant that your content does not violate any third-party rights or applicable laws.`,
  },
  {
    title: '6. Prohibited Uses',
    content: `You agree not to use the Service to:

• Violate any applicable laws or regulations
• Transmit any unsolicited or unauthorised advertising or promotional material
• Impersonate any person or entity or misrepresent your affiliation
• Interfere with or disrupt the integrity or performance of the Service
• Attempt to gain unauthorised access to the Service or its related systems
• Use the Service to create or distribute malware, spyware, or other harmful code
• Scrape, crawl, or index the Service without our prior written consent`,
  },
  {
    title: '7. Payments and Subscriptions',
    content: `Certain features of the Service require a paid subscription. By subscribing, you agree to pay all applicable fees as described on our Pricing page.

Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time from your account settings, effective at the end of the current billing period.

We reserve the right to modify our pricing at any time. We will provide at least 30 days notice before any price changes take effect.`,
  },
  {
    title: '8. Disclaimer of Warranties',
    content: `The Service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Reweb does not warrant that the Service will be uninterrupted, error-free, or completely secure.

To the fullest extent permitted by law, Reweb disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Reweb shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the Service.

Our total liability to you for any claims arising from your use of the Service shall not exceed the amount you paid to Reweb in the twelve months preceding the claim.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Reweb is incorporated, without regard to its conflict of law provisions.

Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.`,
  },
  {
    title: '11. Contact',
    content: `If you have any questions about these Terms of Service, please contact us:

Email: legal@reweb.so
Address: Reweb Inc., 123 Builder Lane, San Francisco, CA 94105`,
  },
]

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-24">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-2">Last updated: April 2025</p>
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-lg">
            Please read these terms carefully before using Reweb.
          </p>
        </div>

        {/* Quick nav */}
        <nav className="p-5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mb-12">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">Contents</p>
          <ol className="space-y-1">
            {sections.map(s => (
              <li key={s.title}>
                <a
                  href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map(s => (
            <section
              key={s.title}
              id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{s.title}</h2>
              <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-7 whitespace-pre-line">
                {s.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-400 dark:text-zinc-600">
          These terms were last updated on April 5, 2025.
        </div>
      </div>
    </div>
  )
}
