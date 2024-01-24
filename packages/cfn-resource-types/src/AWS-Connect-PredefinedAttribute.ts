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
   * @maxLength `64`
   */
  Name: string;
  /**
   * The values of a predefined attribute.
   */
  Values: {
    /**
     * Predefined attribute values of type string list.
     * @minLength `1`
     * @maxLength `128`
     */
    StringList?: string[];
  };
};
/**
 * Resource Type definition for AWS::Connect::PredefinedAttribute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-predefinedattribute.html}
 */
export class ConnectPredefinedAttribute extends $Resource<
  "AWS::Connect::PredefinedAttribute",
  ConnectPredefinedAttributeProperties,
  Record<string, never>
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
