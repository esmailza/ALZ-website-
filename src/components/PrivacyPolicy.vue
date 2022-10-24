<template>
  <v-dialog v-model="dialog" width="700" :retain-focus="false">
    <template v-slot:activator="{ on, attrs }">
      <a
       style="color:#b0181e;"
        v-bind="attrs"
        v-on="on"
        @click="$emit('click-link')"
      >
        Privacy Policy
      </a>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Privacy Policy
      </v-card-title>

      <v-card-text>
        <div class="container">
          <p></p>
          <div class="section-container border-section-container">
            <div class="container">
              <div class="row">
                <div class="col-md-12 section-container-spacer">
                  <div class="text-center">
                    <p>Last updated June 24, 2021</p>
                    <p>
                      Thank you for choosing to be part of our community at App
                      Development Team (“Company”, “we”, “us”, or “our”). We are
                      committed to protecting your personal information and your
                      right to privacy. If you have any questions or concerns
                      about this privacy notice, or our practices with regards
                      to your personal information, please contact us at
                      appdev+privacy@unlv.edu. When you visit our website
                      <a href="http://web.cs.unlv.edu" title="">
                        web.cs.unlv.edu
                      </a>
                      (the "Website"), and more generally, use any of our
                      services (the "Services", which include the Website), we
                      appreciate that you are trusting us with your personal
                      information. We take your privacy very seriously. In this
                      privacy notice, we seek to explain to you in the clearest
                      way possible what information we collect, how we use it
                      and what rights you have in relation to it. We hope you
                      take some time to read through it carefully, as it is
                      important. If there are any terms in this privacy notice
                      that you do not agree with, please discontinue use of our
                      Services immediately. This privacy notice applies to all
                      information collected through our Services (which, as
                      described above, includes our Website), as well as any
                      related services, sales, marketing or events. Please read
                      this privacy notice carefully as it will help you
                      understand what we do with the information that we
                      collect.
                    </p>
                  </div>
                </div>
              </div>

              <b style="font-size: 24px">
                1. WHAT INFORMATION DO WE COLLECT?
              </b>
              <p>
                <b> In Short:</b>
                <i>We collect information that you provide to us.</i>
                We collect personal information that you voluntarily provide to
                us when you register with the ULABS app, express an interest in
                obtaining information about us or our products and Services,
                when you participate in activities in app or otherwise when you
                contact us. The personal information that we collect depends on
                the context of your interactions with us and the app, the
                choices you make and the products and features you use. The
                personal information we collect may include the following:
              </p>
              <ul>
                <li>
                  <b> Personal Information Provided by You.</b> We collect
                  names; phone numbers; email addresses; contact or
                  authentication data; passwords; and other similar information.
                  All personal information that you provide to us must be true,
                  complete and accurate, and you must notify us of any changes
                  to such personal information.
                </li>
              </ul>
              <br />

              <b style="font-size: 24px">
                2. HOW DO WE USE YOUR INFORMATION?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  We process your information for purposes based on legitimate
                  business interests, the fulfillment of our contract with you,
                  compliance with our legal obligations, and/or your consent.
                </i>
                We use personal information collected via the app for a variety
                of business purposes described below. We process your personal
                information for these purposes in reliance on our legitimate
                business interests, in order to enter into or perform a contract
                with you, with your consent, and/or for compliance with our
                legal obligations. We indicate the specific processing grounds
                we rely on next to each purpose listed below:
              </p>
              <ul>
                <li>
                  <b> To facilitate account creation and logon process. </b>
                </li>
                <li>
                  <b> Request feedback. </b> We may use your information to
                  request feedback and to contact you about your use of our app.
                </li>
                <li>
                  <b> To manage user accounts. </b> We may use your information
                  for the purposes of managing our account and keeping it in
                  working order. To send administrative information to you. We
                  may use your personal information to send you product, service
                  and new feature information and/or information about changes
                  to our terms, conditions, and policies.
                </li>
                <li>
                  <b> To protect our Services. </b> We may use your information
                  as part of our efforts to keep our Website safe and secure
                  (for example, for fraud monitoring and prevention).
                </li>
                <li>
                  <b>
                    To enforce our terms, conditions and policies for business
                    purposes, to comply with legal and regulatory requirements
                    or in connection with our contract.
                  </b>
                </li>
                <li>
                  <b>
                    To respond to legal requests and prevent harm. If we receive
                    a subpoena or other legal request, we may need to inspect
                    the data we hold to determine how to respond.
                  </b>
                </li>
              </ul>
              <br />

              <b style="font-size: 24px">
                3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  We only share information with your consent, to comply with
                  laws, to provide you with services, to protect your rights, or
                  to fulfill business obligations.
                </i>
                We may process or share your data that we hold based on the
                following legal basis:
              </p>
              <ul>
                <li>
                  <b>Consent: </b> We may process your data if you have given us
                  specific consent to use your personal information in a
                  specific purpose.
                </li>
                <li>
                  <b> Legitimate Interests: </b> We may process your data when
                  it is reasonably necessary to achieve our legitimate business
                  interests.
                </li>
                <li>
                  <b> Legal Obligations: </b> We may disclose your information
                  where we are legally required to do so in order to comply with
                  applicable law, governmental requests, a judicial proceeding,
                  court order, or legal process, such as in response to a court
                  order or a subpoena (including in response to public
                  authorities to meet national security or law enforcement
                  requirements).
                </li>
                <li>
                  <b>Vital Interests: </b> We may disclose your information
                  where we believe it is necessary to investigate, prevent, or
                  take action regarding potential violations of our policies,
                  suspected fraud, situations involving potential threats to the
                  safety of any person and illegal activities, or as evidence in
                  litigation in which we are involved.
                </li>
              </ul>
              <br />

              <b style="font-size: 24px">
                4. HOW LONG DO WE KEEP YOUR INFORMATION?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  We keep your information for as long as necessary to fulfill
                  the purposes outlined in this privacy notice unless otherwise
                  required by law.
                </i>
              </p>
              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting or other legal requirements).
              </p>
              <br />

              <b style="font-size: 24px">
                5. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  We aim to protect your personal information through a system
                  of organizational and technical security measures.
                </i>
              </p>
              <p>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, despite our safeguards
                and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security, and
                improperly collect, access, steal, or modify your information.
                Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our app is at your own risk. You should only access the app
                within a secure environment.
              </p>
              <br />

              <b style="font-size: 24px">
                6. DO WE COLLECT INFORMATION FROM MINORS?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  We do not knowingly collect data from or market to children
                  under 18 years of age.
                </i>
              </p>
              <p>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the app, you represent that you
                are at least 18 or that you are the parent or guardian of such a
                minor and consent to such minor dependent's use of the app. If
                we learn that personal information from users less than 18 years
                of age has been collected, we will deactivate the account and
                take reasonable measures to promptly delete such data from our
                records. If you become aware of any data we may have collected
                from children under age 18, please contact us at
                appdev+privacy@unlv.edu.
              </p>
              <br />

              <b style="font-size: 24px"> 7. WHAT ARE YOUR PRIVACY RIGHTS?</b>
              <p>
                <b> In Short: </b>
                <i>
                  You may review, change, or terminate your account at any time.
                </i>
              </p>
              <p>
                Your email and password associated with your account will be
                deleted upon account deletion. We do, however, log names and
                appointments for health and safety reasons. If you have
                questions or comments about your privacy rights, you may email
                us at appdev+privacy@unlv.edu.
              </p>
              <br />

              <b style="font-size: 24px">
                8. CONTROLS FOR DO-NOT-TRACK FEATURES
              </b>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track feature or setting you can
                activate to signal your privacy preference not to have data
                about your online browsing activities monitored and collected.
                At this stage, no uniform technology standard for recognizing
                and implementing DNT signals has been finalized. As such, we do
                not currently respond to DNT browser signals or any other
                mechanism that automatically communicates your choice not to be
                tracked online. If a standard for online tracking is adopted
                that we must follow in the future, we will inform you about that
                practice in a revised version of this privacy notice.
              </p>
              <br />

              <b style="font-size: 24px">
                9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  es, if you are a resident of California, you are granted
                  specific rights regarding access to your personal information.
                </i>
              </p>
              <p>
                California Civil Code Section 1798.83, also known as the
                <b> Shine The Light </b>
                law, permits our users who are California residents to request
                and obtain from us, once a year and free of charge, information
                about categories of personal information (if any) we disclosed
                to third parties for direct marketing purposes and the names and
                addresses of all third parties with which we shared personal
                information in the immediately preceding calendar year. If you
                are a California resident and would like to make such a request,
                please submit your request in writing to us using the contact
                information provided below. If you are under 18 years of age,
                reside in California, and have a registered account with the
                Website, you have the right to request removal of unwanted data
                that you publicly post on the Website. To request removal of
                such data, please contact us using the contact information
                provided below, and include the email address associated with
                your account and a statement that you reside in California. We
                will make sure the data is not publicly displayed on the
                Website, but please be aware that the data may not be completely
                or comprehensively removed from all our systems (e.g. backups,
                etc.).
              </p>
              <br />

              <b style="font-size: 24px">
                10. DO WE MAKE UPDATES TO THIS NOTICE?
              </b>
              <p>
                <b> In Short: </b>
                <i>
                  Yes, we will update this notice as necessary to stay compliant
                  with relevant laws.</i
                >
              </p>
              <p>
                We may update this privacy noticeÂ from time to time. The
                updated version will be indicated by an updated revision date
                and the updated version will be effective as soon as it is
                accessible. If we make material changes to this privacy notice,
                we may notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy noticeÂ frequently to be informed of
                how we are protecting your information.
              </p>
              <br />

              <b style="font-size: 24px">
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </b>
              <p><b> </b> <i></i></p>
              <p>
                If you have questions or comments about this notice, please
                write us to: University of Nevada Las Vegas 4505 S Maryland Pkw
                Box 454019 Las Vegas, NV 89154 United States or send an email
                to: appdev+privacy@unlv.edu
              </p>
              <br />

              <b style="font-size: 24px">
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </b>
              <p><b> </b> <i></i></p>
              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it in some
                circumstances. To request to review, update, or delete your
                personal information, please submit a request by emailing us to
                <a href="mailto:appdev+privacy@unlv.edu"
                  >appdev+privacy@unlv.edu</a
                ><br />. We will respond to your request within 30 days.
              </p>
            </div>
          </div>

          <p></p>
        </div>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "PrivacyPolicy",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
