import React from 'react'

export const Privacy = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Privacy Policy</h1>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc ml-5">
            <li>Name and contact information</li>
            <li>Billing and shipping information</li>
            <li>Order history and preferences</li>
            <li>Communications with us</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc ml-5">
            <li>Process your orders and payments</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We share your information
            only with:
          </p>
          <ul className="list-disc ml-5">
            <li>Service providers who assist in our operations</li>
            <li>Payment processors for secure transactions</li>
            <li>Shipping partners for order delivery</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-5">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">6. Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing
            experience and analyze site traffic.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p>
            If you have questions about our privacy practices, please contact us
            at
            <a
              href="mailto:privacy@Mowga.com"
              className="text-blue-600 underline ml-1"
            >
              privacy@Dowgrab.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
