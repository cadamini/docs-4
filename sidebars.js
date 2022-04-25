/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    {
      type: "category",
      label: "Overview",
      items: [
        "overview/index",
        "overview/what-is-zuplo",
        "overview/how-does-zuplo-work",
        "overview/should-you-use-zuplo",
        "overview/handlers",
        "overview/policies",
      ],
    },
    {
      type: "category",
      label: "Quick Starts",
      items: [
        "quickstarts/proxy-public-api",
        "quickstarts/use-api-key-authentication",
        "quickstarts/publish-developer-portal",
        "quickstarts/per-customer-rate-limits",
      ],
    },
    {
      type: "category",
      label: "Policies",
      link: { type: "doc", id: "policies/index" },
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            "policies/api-key-auth",
            "policies/auth0-jwt-auth",
            "policies/aws-cognito-auth",
            "policies/basic-auth",
            "policies/open-id-jwt",
          ],
        },
        "policies/rate-limit",
        {
          type: "category",
          label: "Request Filtering",
          items: [
            "policies/access-control-lists",
            "policies/geo-location",
            "policies/ip-restrictions",
          ],
        },
        {
          type: "category",
          label: "Validation",
          items: ["policies/json-schema-validation"],
        },
        {
          type: "category",
          label: "Request Modification",
          items: ["policies/request-body-rewrite"],
        },
        {
          type: "category",
          label: "Response Modification",
          items: ["policies/response-body-rewrite"],
        },
      ],
    },
    {
      type: "category",
      label: "Handlers",
      items: [
        "handlers/url-rewrite",
        "handlers/aws-lambda",
        "handlers/custom-handler",
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/hello-world-api",
        "examples/proxy-aws-lambda",
        "examples/archiving-requests-to-storage",
        "examples/gateway-over-airtable",
        "examples/gateway-over-salesforce",
        "examples/proxy-a-request-with-body",
        "examples/proxy-a-simple-get-request",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "runtime/zuplo-request",
        "runtime/zuplo-context",
        "runtime/web-standard-apis",
        "runtime/node-modules",
        "runtime/path-matching",
        "runtime/testing-your-api",
        "runtime/reusing-code",
        "runtime/safely-clone-a-request-or-response",
        "runtime/key-value-store",
      ],
    },
    {
      type: "doc",
      id: "sample-apis",
    },
  ],
};

module.exports = sidebars;
