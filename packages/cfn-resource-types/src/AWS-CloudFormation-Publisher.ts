import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::Publisher`.
 * Register as a publisher in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html}
 */
export type CloudFormationPublisherProperties = {
  /**
   * Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
   */
  AcceptTermsAndConditions: boolean;
  /**
   * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
   * @pattern `arn:aws(-[w]+)*:.+:.+:[0-9]{12}:.+`
   */
  ConnectionArn?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::Publisher`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#aws-resource-cloudformation-publisher-return-values}
 */
export type CloudFormationPublisherAttributes = {
  /**
   * The type of account used as the identity provider when registering this publisher with CloudFormation.
   */
  IdentityProvider: "AWS_Marketplace" | "GitHub" | "Bitbucket";
  /**
   * The publisher id assigned by CloudFormation for publishing in this region.
   * @minLength `1`
   * @maxLength `40`
   * @pattern `[0-9a-zA-Z-]{40}`
   */
  PublisherId: string;
  /**
   * The URL to the publisher's profile with the identity provider.
   * @maxLength `1024`
   * @pattern `(http:|https:)+[^s]+[w]`
   */
  PublisherProfile: string;
  /**
   * Whether the publisher is verified.
   */
  PublisherStatus: "VERIFIED" | "UNVERIFIED";
};
/**
 * Resource type definition for `AWS::CloudFormation::Publisher`.
 * Register as a publisher in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html}
 */
export class CloudFormationPublisher extends $Resource<
  "AWS::CloudFormation::Publisher",
  CloudFormationPublisherProperties,
  CloudFormationPublisherAttributes
> {
  public static readonly Type = "AWS::CloudFormation::Publisher";
  constructor(
    logicalId: string,
    properties: CloudFormationPublisherProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationPublisher.Type, properties, options);
  }
}
