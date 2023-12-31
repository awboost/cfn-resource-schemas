import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::CloudFormation::ResourceDefaultVersion`.
 * The default version of a resource that has been registered in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html}
 */
export type CloudFormationResourceDefaultVersionProperties = {
  /**
     * The name of the type being registered.
    
    We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     */
  TypeName?: string;
  /**
   * The Amazon Resource Name (ARN) of the type version.
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$`
   */
  TypeVersionArn?: string;
  /**
   * The ID of an existing version of the resource to set as the default.
   * @pattern `^[A-Za-z0-9-]{1,128}$`
   */
  VersionId?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::ResourceDefaultVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#aws-resource-cloudformation-resourcedefaultversion-return-values}
 */
export type CloudFormationResourceDefaultVersionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a ResourceDefaultVersion
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$`
   */
  Arn: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::ResourceDefaultVersion`.
 * The default version of a resource that has been registered in the CloudFormation Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html}
 */
export class CloudFormationResourceDefaultVersion extends $Resource<
  "AWS::CloudFormation::ResourceDefaultVersion",
  CloudFormationResourceDefaultVersionProperties,
  CloudFormationResourceDefaultVersionAttributes
> {
  public static readonly Type = "AWS::CloudFormation::ResourceDefaultVersion";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: CloudFormationResourceDefaultVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationResourceDefaultVersion.Type,
      properties,
      CloudFormationResourceDefaultVersion.AttributeNames,
      options,
    );
  }
}
