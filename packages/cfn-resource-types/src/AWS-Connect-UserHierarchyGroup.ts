import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::UserHierarchyGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html}
 */
export type ConnectUserHierarchyGroupProperties = {
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the user hierarchy group.
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * The Amazon Resource Name (ARN) for the parent user hierarchy group.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group/[-a-zA-Z0-9]*$`
   */
  ParentGroupArn?: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::UserHierarchyGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html#aws-resource-connect-userhierarchygroup-return-values}
 */
export type ConnectUserHierarchyGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the user hierarchy group.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group/[-a-zA-Z0-9]*$`
   */
  UserHierarchyGroupArn: string;
};
/**
 * Type definition for `AWS::Connect::UserHierarchyGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchygroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::UserHierarchyGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html}
 */
export class ConnectUserHierarchyGroup extends $Resource<
  "AWS::Connect::UserHierarchyGroup",
  ConnectUserHierarchyGroupProperties,
  ConnectUserHierarchyGroupAttributes
> {
  public static readonly Type = "AWS::Connect::UserHierarchyGroup";
  constructor(
    logicalId: string,
    properties: ConnectUserHierarchyGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectUserHierarchyGroup.Type, properties, options);
  }
}
