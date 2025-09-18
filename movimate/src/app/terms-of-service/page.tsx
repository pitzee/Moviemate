"use client";

import { Container, Text, Box, Heading } from "@radix-ui/themes";

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <Container size="4" py="8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Box className="text-center mb-12">
            <Heading
              size="8"
              weight="bold"
              style={{
                color: "var(--gray-12)",
                marginBottom: "16px",
                background:
                  "linear-gradient(135deg, var(--violet-9), var(--purple-9))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Terms of Service
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                marginBottom: "8px",
              }}
            >
              Last updated: {currentDate}
            </Text>
            <Text
              size="4"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              These Terms of Service govern your use of Moviemate and our
              services.
            </Text>
          </Box>

          {/* Introduction */}
          <Box className="mb-8">
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              Welcome to Moviemate! These Terms of Service (&quot;Terms&quot;)
              govern your use of our movie recommendation application and
              services. By accessing or using Moviemate, you agree to be bound
              by these Terms.
            </Text>
          </Box>

          {/* Acceptance of Terms */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              1. Acceptance of Terms
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              By accessing and using Moviemate, you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree
              to abide by the above, please do not use this service.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              These Terms apply to all visitors, users, and others who access or
              use the service.
            </Text>
          </Box>

          {/* Description of Service */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              2. Description of Service
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              Moviemate is a movie recommendation application that provides:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Access to trending and popular movies
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Personalized movie recommendations
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Movie search functionality
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Ability to save favorite movies locally
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Detailed movie information and cast details
                </Text>
              </li>
            </ul>
          </Box>

          {/* User Responsibilities */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              3. User Responsibilities
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              As a user of Moviemate, you agree to:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Use the service only for lawful purposes
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Not attempt to interfere with or disrupt the service
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Not use the service to transmit any harmful or malicious
                  content
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Respect the intellectual property rights of others
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Provide accurate information when contacting us
                </Text>
              </li>
            </ul>
          </Box>

          {/* Intellectual Property */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              4. Intellectual Property Rights
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              The service and its original content, features, and functionality
              are and will remain the exclusive property of the developer and
              are protected by international copyright, trademark, patent, trade
              secret, and other intellectual property laws.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              Movie data and images are provided by The Movie Database (TMDB)
              and are subject to their terms of use and licensing agreements.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any of our material without our prior written
              consent.
            </Text>
          </Box>

          {/* Prohibited Uses */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              5. Prohibited Uses
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              You may not use our service:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  For any unlawful purpose or to solicit others to perform
                  unlawful acts
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To submit false or misleading information
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To upload or transmit viruses or any other type of malicious
                  code
                </Text>
              </li>
            </ul>
          </Box>

          {/* Service Availability */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              6. Service Availability
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We strive to provide continuous service availability, but we do
              not guarantee that the service will be available at all times. The
              service may be temporarily unavailable due to:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Scheduled maintenance or updates
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Technical difficulties or server issues
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Third-party API limitations or outages
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Force majeure events beyond our control
                </Text>
              </li>
            </ul>
          </Box>

          {/* Disclaimer of Warranties */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              7. Disclaimer of Warranties
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              The information on this service is provided on an &quot;as
              is&quot; basis. To the fullest extent permitted by law, this
              Company:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Excludes all representations and warranties relating to this
                  service and its contents
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Does not warrant that the service will be constantly available
                  or available at all
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Does not warrant the accuracy, completeness, or reliability of
                  any information provided
                </Text>
              </li>
            </ul>
          </Box>

          {/* Limitation of Liability */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              8. Limitation of Liability
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              In no event shall Moviemate, nor its developer, be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your use of
              the service.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              Our total liability to you for all damages shall not exceed the
              amount you paid us, if any, for accessing the service, or one
              hundred dollars ($100), whichever is greater.
            </Text>
          </Box>

          {/* Termination */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              9. Termination
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We may terminate or suspend your access to our service
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              Upon termination, your right to use the service will cease
              immediately. All provisions of the Terms which by their nature
              should survive termination shall survive termination.
            </Text>
          </Box>

          {/* Changes to Terms */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              10. Changes to Terms
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days notice prior to any new terms taking
              effect.
            </Text>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              By continuing to access or use our service after those revisions
              become effective, you agree to be bound by the revised terms.
            </Text>
          </Box>

          {/* Contact Information */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              11. Contact Information
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              If you have any questions about these Terms of Service, please
              contact us:
            </Text>
            <Box
              style={{
                padding: "20px",
                borderRadius: "12px",
                backgroundColor: "var(--gray-2)",
                border: "1px solid var(--gray-4)",
              }}
            >
              <Text
                size="3"
                weight="bold"
                style={{ color: "var(--gray-12)", marginBottom: "8px" }}
              >
                Petros Birkneh
              </Text>
              <Text
                size="3"
                style={{ color: "var(--violet-9)", marginBottom: "4px" }}
              >
                Email: pitzee421@gmail.com
              </Text>
              <Text size="3" style={{ color: "var(--gray-11)" }}>
                ALX Ethiopia Frontend Pro Dev Student
              </Text>
            </Box>
          </Box>

          {/* Governing Law */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "var(--gray-12)", marginBottom: "16px" }}
            >
              12. Governing Law
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              These Terms shall be interpreted and governed by the laws of
              Ethiopia, without regard to its conflict of law provisions. Our
              failure to enforce any right or provision of these Terms will not
              be considered a waiver of those rights.
            </Text>
          </Box>
        </div>
      </Container>
    </div>
  );
}
