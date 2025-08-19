import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::PredefinedAttribute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html}
 */
export type ConnectPredefinedAttributeProperties = {
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the predefined attribute.
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * The values of a predefined attribute.
   */
  Values?: {
    /**
     * Predefined attribute values of type string list.
     * @minLength `1`
     * @maxLength `500`
     */
    StringList?: string[];
  };
};
/**
 * Attribute type definition for `AWS::Connect::PredefinedAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html#aws-resource-connect-predefinedattribute-return-values}
 */
export type ConnectPredefinedAttributeAttributes = {
  /**
   * Last modified region.
   * @pattern `[a-z]{2}(-[a-z]+){1,2}(-[0-9])?`
   */
  LastModifiedRegion: string;
  /**
   * Last modified time.
   */
  LastModifiedTime: number;
};
/**
 * Resource Type definition for AWS::Connect::PredefinedAttribute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html}
 */
export class ConnectPredefinedAttribute extends $Resource<
  "AWS::Connect::PredefinedAttribute",
  ConnectPredefinedAttributeProperties,
  ConnectPredefinedAttributeAttributes
> {
  public static readonly Type = "AWS::Connect::PredefinedAttribute";
  constructor(
    logicalId: string,
    properties: ConnectPredefinedAttributeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectPredefinedAttribute.Type, properties, options);
  }
}
