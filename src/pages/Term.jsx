import React from 'react'

export const Term = () => {
    console.log("hello")
  return (
    <section className="py-5 ">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-3xl font-bold flex justify-center text-center">Terms of Service</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using DowGrab, you accept and agree to be bound by
            the terms and provisions of this agreement.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on DowGrab for personal,
            non-commercial transitory viewing only.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">3. Disclaimer</h2>
          <p>
            The materials on DowGrab are provided on an "as is" basis. DowGrab makes
            no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">4. Limitations</h2>
          <p>
            In no event shall DowGrab or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on DowGrab.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">5. Revisions and Errata</h2>
          <p>
            The materials appearing on DowGrab could include technical,
            typographical, or photographic errors. DowGrab does not warrant that
            any of the materials on its website are accurate, complete, or
            current.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">6. Links</h2>
          <p>
            DowGrab has not reviewed all of the sites linked to its website and is
            not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by DowGrab of the
            site.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            7. Site Terms of Use Modifications
          </h2>
          <p>
            DowGrab may revise these terms of use for its website at any time
            without notice. By using this website, you are agreeing to be bound
            by the then-current version of these Terms and Conditions of Use.
          </p>
        </div>
      </div>
    </section>
  );
}
