"use client";

import { Container, Text, Box, Heading } from "@radix-ui/themes";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              This Privacy Policy explains how Moviemate collects, uses, and
              protects your information.
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
              Moviemate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our movie recommendation application.
            </Text>
          </Box>

          {/* Information We Collect */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              1. Information We Collect
            </Heading>

            <Box className="mb-6">
              <Heading
                size="5"
                weight="bold"
                style={{ color: "var(--violet-9)", marginBottom: "12px" }}
              >
                Personal Information
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                We may collect personal information that you voluntarily provide
                to us, including:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    Contact information (email address) if you choose to contact
                    us
                  </Text>
                </li>
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    Any feedback or communications you send to us
                  </Text>
                </li>
              </ul>
            </Box>

            <Box className="mb-6">
              <Heading
                size="5"
                weight="bold"
                style={{ color: "var(--violet-9)", marginBottom: "12px" }}
              >
                Local Storage Data
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                Our application uses local storage to enhance your experience:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    Favorite movies list (stored locally on your device)
                  </Text>
                </li>
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    User preferences and settings
                  </Text>
                </li>
              </ul>
            </Box>

            <Box className="mb-6">
              <Heading
                size="5"
                weight="bold"
                style={{ color: "var(--violet-9)", marginBottom: "12px" }}
              >
                Automatically Collected Information
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                We may automatically collect certain information when you use
                our application:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    Device information (browser type, operating system)
                  </Text>
                </li>
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    Usage data (pages visited, features used)
                  </Text>
                </li>
                <li>
                  <Text
                    size="3"
                    style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                  >
                    IP address and general location information
                  </Text>
                </li>
              </ul>
            </Box>
          </Box>

          {/* How We Use Information */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              2. How We Use Your Information
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We use the information we collect for the following purposes:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To provide and maintain our movie recommendation service
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To personalize your experience and show relevant movie
                  recommendations
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To store your favorite movies locally on your device
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To respond to your inquiries and provide customer support
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To improve our application and develop new features
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  To analyze usage patterns and optimize performance
                </Text>
              </li>
            </ul>
          </Box>

          {/* Data Sharing */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              3. Information Sharing and Disclosure
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  When required by law or to protect our rights
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  With service providers who assist us in operating our
                  application
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  When you explicitly consent to such sharing
                </Text>
              </li>
            </ul>
          </Box>

          {/* Data Security */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              4. Data Security
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We implement appropriate security measures to protect your
              personal information:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Data is stored locally on your device and not transmitted to
                  our servers
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  We use secure connections (HTTPS) for all data transmission
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Regular security assessments and updates
                </Text>
              </li>
            </ul>
          </Box>

          {/* Third-Party Services */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              5. Third-Party Services
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              Our application integrates with third-party services:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  <strong>The Movie Database (TMDB)</strong> - We fetch movie
                  data from TMDB API. Their privacy policy applies to data
                  collected by their service.
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  <strong>Vercel</strong> - Our application is hosted on Vercel.
                  Their privacy policy applies to hosting-related data.
                </Text>
              </li>
            </ul>
          </Box>

          {/* Your Rights */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              6. Your Rights
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              You have the following rights regarding your personal information:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Access and review your personal information
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Request correction of inaccurate information
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Request deletion of your personal information
                </Text>
              </li>
              <li>
                <Text
                  size="3"
                  style={{ color: "var(--gray-11)", lineHeight: "1.7" }}
                >
                  Clear your local storage data at any time through your browser
                </Text>
              </li>
            </ul>
          </Box>

          {/* Contact Information */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              7. Contact Us
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
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

          {/* Changes to Privacy Policy */}
          <Box className="mb-8">
            <Heading
              size="6"
              weight="bold"
              style={{ color: "black", marginBottom: "16px" }}
            >
              8. Changes to This Privacy Policy
            </Heading>
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                lineHeight: "1.7",
              }}
            >
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date. You are
              advised to review this Privacy Policy periodically for any
              changes.
            </Text>
          </Box>
        </div>
      </Container>
    </div>
  );
}
