import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::DataTableAttribute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatableattribute.html}
 */
export type ConnectDataTableAttributeProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataTableArn?: string;
  /**
     * @minLength `0`
     * @maxLength `250`
     * @pattern `^[\P{C}
        ]+$`
     */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}\p{Z}\p{N}\-_.:=@'|]+$`
   */
  Name?: string;
  Primary?: boolean;
  Validation?: {
    Enum?: {
      Strict?: boolean;
      Values?: string[];
    };
    ExclusiveMaximum?: number;
    ExclusiveMinimum?: number;
    /**
     * @min `0`
     */
    MaxLength?: number;
    /**
     * @min `0`
     */
    MaxValues?: number;
    Maximum?: number;
    /**
     * @min `0`
     */
    MinLength?: number;
    /**
     * @min `0`
     */
    MinValues?: number;
    Minimum?: number;
    /**
     * @min `0`
     */
    MultipleOf?: number;
  };
  ValueType?: "TEXT" | "NUMBER" | "BOOLEAN" | "TEXT_LIST" | "NUMBER_LIST";
};
/**
 * Attribute type definition for `AWS::Connect::DataTableAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatableattribute.html#aws-resource-connect-datatableattribute-return-values}
 */
export type ConnectDataTableAttributeAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  AttributeId: string;
  /**
   * @pattern `[a-z]{2}(-[a-z]+){1,2}(-[0-9])?`
   */
  LastModifiedRegion: string;
  LastModifiedTime: number;
  LockVersion: {
    Attribute: string;
    DataTable: string;
  };
};
/**
 * Resource Type definition for AWS::Connect::DataTableAttribute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatableattribute.html}
 */
export class ConnectDataTableAttribute extends $Resource<
  "AWS::Connect::DataTableAttribute",
  ConnectDataTableAttributeProperties,
  ConnectDataTableAttributeAttributes
> {
  public static readonly Type = "AWS::Connect::DataTableAttribute";
  constructor(
    logicalId: string,
    properties: ConnectDataTableAttributeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectDataTableAttribute.Type, properties, options);
  }
}
