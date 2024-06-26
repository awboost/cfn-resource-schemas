import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Amplify::Domain resource allows you to connect a custom domain to your app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html}
 */
export type AmplifyDomainProperties = {
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `d[a-z0-9]+`
   */
  AppId: string;
  AutoSubDomainCreationPatterns?: string[];
  /**
   * @maxLength `1000`
   * @pattern `^$|^arn:.+:iam::\d{12}:role.+`
   */
  AutoSubDomainIAMRole?: string;
  CertificateSettings?: CertificateSettings;
  /**
   * @maxLength `255`
   * @pattern `^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$`
   */
  DomainName: string;
  EnableAutoSubDomain?: boolean;
  /**
   * @maxLength `255`
   */
  SubDomainSettings: SubDomainSetting[];
};
/**
 * Attribute type definition for `AWS::Amplify::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#aws-resource-amplify-domain-return-values}
 */
export type AmplifyDomainAttributes = {
  /**
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  Arn: string;
  Certificate: {
    /**
     * @pattern `"^arn:aws:acm:[a-z0-9-]+:\d{12}:certificate\/.+$"`
     */
    CertificateArn: string;
    CertificateType: "AMPLIFY_MANAGED" | "CUSTOM";
    /**
     * @maxLength `1000`
     */
    CertificateVerificationDNSRecord: string;
  };
  /**
   * @maxLength `1000`
   */
  CertificateRecord: string;
  DomainStatus: string;
  /**
   * @maxLength `1000`
   */
  StatusReason: string;
  UpdateStatus: string;
};
/**
 * Type definition for `AWS::Amplify::Domain.Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificate.html}
 */
export type Certificate = {
  /**
   * @pattern `"^arn:aws:acm:[a-z0-9-]+:\d{12}:certificate\/.+$"`
   */
  CertificateArn?: string;
  CertificateType?: "AMPLIFY_MANAGED" | "CUSTOM";
  /**
   * @maxLength `1000`
   */
  CertificateVerificationDNSRecord?: string;
};
/**
 * Type definition for `AWS::Amplify::Domain.CertificateSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-certificatesettings.html}
 */
export type CertificateSettings = {
  CertificateType?: "AMPLIFY_MANAGED" | "CUSTOM";
  /**
   * @pattern `^arn:aws:acm:[a-z0-9-]+:\d{12}:certificate\/.+$`
   */
  CustomCertificateArn?: string;
};
/**
 * Type definition for `AWS::Amplify::Domain.SubDomainSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html}
 */
export type SubDomainSetting = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `(?s).+`
   */
  BranchName: string;
  /**
   * @maxLength `255`
   * @pattern `(?s).*`
   */
  Prefix: string;
};
/**
 * The AWS::Amplify::Domain resource allows you to connect a custom domain to your app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html}
 */
export class AmplifyDomain extends $Resource<
  "AWS::Amplify::Domain",
  AmplifyDomainProperties,
  AmplifyDomainAttributes
> {
  public static readonly Type = "AWS::Amplify::Domain";
  constructor(
    logicalId: string,
    properties: AmplifyDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmplifyDomain.Type, properties, options);
  }
}
