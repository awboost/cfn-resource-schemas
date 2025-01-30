import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::PublicTypeVersion`.
 * Test and Publish a resource that has been registered in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html}
 */
export type CloudFormationPublicTypeVersionProperties = {
  /**
   * The Amazon Resource Number (ARN) of the extension.
   * @pattern `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+`
   */
  Arn?: string;
  /**
   * A url to the S3 bucket where logs for the testType run will be available
   */
  LogDeliveryBucket?: string;
  /**
   * The version number of a public third-party extension
   * @minLength `5`
   * @maxLength `64`
   */
  PublicVersionNumber?: string;
  /**
   * The kind of extension
   */
  Type?: "RESOURCE" | "MODULE" | "HOOK";
  /**
     * The name of the type being registered.
    
    We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * @pattern `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
     */
  TypeName?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::PublicTypeVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#aws-resource-cloudformation-publictypeversion-return-values}
 */
export type CloudFormationPublicTypeVersionAttributes = {
  /**
   * The Amazon Resource Number (ARN) assigned to the public extension upon publication
   * @maxLength `1024`
   * @pattern `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+`
   */
  PublicTypeArn: string;
  /**
   * The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
   * @minLength `1`
   * @maxLength `40`
   * @pattern `[0-9a-zA-Z-]{1,40}`
   */
  PublisherId: string;
  /**
   * The Amazon Resource Number (ARN) of the extension with the versionId.
   * @pattern `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+`
   */
  TypeVersionArn: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::PublicTypeVersion`.
 * Test and Publish a resource that has been registered in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html}
 */
export class CloudFormationPublicTypeVersion extends $Resource<
  "AWS::CloudFormation::PublicTypeVersion",
  CloudFormationPublicTypeVersionProperties,
  CloudFormationPublicTypeVersionAttributes
> {
  public static readonly Type = "AWS::CloudFormation::PublicTypeVersion";
  constructor(
    logicalId: string,
    properties: CloudFormationPublicTypeVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationPublicTypeVersion.Type, properties, options);
  }
}
