import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityAgent::TargetDomain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-targetdomain.html}
 */
export type SecurityAgentTargetDomainProperties = {
  /**
   * Tags for the target domain
   */
  Tags?: Tag[];
  /**
   * Domain name of the target domain
   */
  TargetDomainName: string;
  /**
   * Verification method for the target domain
   */
  VerificationMethod: "DNS_TXT" | "HTTP_ROUTE" | "PRIVATE_VPC";
};
/**
 * Attribute type definition for `AWS::SecurityAgent::TargetDomain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-targetdomain.html#aws-resource-securityagent-targetdomain-return-values}
 */
export type SecurityAgentTargetDomainAttributes = {
  /**
   * Timestamp when the target domain was registered
   */
  CreatedAt: string;
  /**
   * Unique identifier of the target domain
   */
  TargetDomainId: string;
  /**
   * Verification details to verify registered target domain
   */
  VerificationDetails: {
    /**
     * Represents DNS TXT verification details
     */
    DnsTxt: {
      /**
       * Record name to be added in DNS for target domain
       */
      DnsRecordName: string;
      /**
       * Type of record to be added in DNS for target domain
       */
      DnsRecordType: "TXT";
      /**
       * Token used to verify domain ownership
       */
      Token: string;
    };
    /**
     * Represents HTTP route verification details
     */
    HttpRoute: {
      /**
       * Route path where verification token should be placed
       */
      RoutePath: string;
      /**
       * Token used to verify domain ownership
       */
      Token: string;
    };
    /**
     * Type of domain ownership verification method
     */
    Method: "DNS_TXT" | "HTTP_ROUTE" | "PRIVATE_VPC";
  };
  /**
   * Current verification status of the registered target domain
   */
  VerificationStatus: "PENDING" | "VERIFIED" | "FAILED" | "UNREACHABLE";
  /**
   * Reason for the current target domain verification status
   */
  VerificationStatusReason: string;
  /**
   * Timestamp when the target domain was last successfully verified
   */
  VerifiedAt: string;
};
/**
 * Type definition for `AWS::SecurityAgent::TargetDomain.DnsVerification`.
 * Represents DNS TXT verification details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-targetdomain-dnsverification.html}
 */
export type DnsVerification = {
  /**
   * Record name to be added in DNS for target domain
   */
  DnsRecordName?: string;
  /**
   * Type of record to be added in DNS for target domain
   */
  DnsRecordType?: "TXT";
  /**
   * Token used to verify domain ownership
   */
  Token?: string;
};
/**
 * Type definition for `AWS::SecurityAgent::TargetDomain.HttpVerification`.
 * Represents HTTP route verification details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-targetdomain-httpverification.html}
 */
export type HttpVerification = {
  /**
   * Route path where verification token should be placed
   */
  RoutePath?: string;
  /**
   * Token used to verify domain ownership
   */
  Token?: string;
};
/**
 * Type definition for `AWS::SecurityAgent::TargetDomain.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-targetdomain-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityAgent::TargetDomain.VerificationDetails`.
 * Verification details to verify registered target domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-targetdomain-verificationdetails.html}
 */
export type VerificationDetails = {
  /**
   * Represents DNS TXT verification details
   */
  DnsTxt?: DnsVerification;
  /**
   * Represents HTTP route verification details
   */
  HttpRoute?: HttpVerification;
  /**
   * Type of domain ownership verification method
   */
  Method?: "DNS_TXT" | "HTTP_ROUTE" | "PRIVATE_VPC";
};
/**
 * Resource Type definition for AWS::SecurityAgent::TargetDomain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-targetdomain.html}
 */
export class SecurityAgentTargetDomain extends $Resource<
  "AWS::SecurityAgent::TargetDomain",
  SecurityAgentTargetDomainProperties,
  SecurityAgentTargetDomainAttributes
> {
  public static readonly Type = "AWS::SecurityAgent::TargetDomain";
  constructor(
    logicalId: string,
    properties: SecurityAgentTargetDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityAgentTargetDomain.Type, properties, options);
  }
}
