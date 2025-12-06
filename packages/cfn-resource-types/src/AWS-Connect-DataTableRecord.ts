import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::DataTableRecord
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatablerecord.html}
 */
export type ConnectDataTableRecordProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataTableArn?: string;
  DataTableRecord?: {
    PrimaryValues?: Value[];
    Values: Value[];
  };
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn?: string;
};
/**
 * Attribute type definition for `AWS::Connect::DataTableRecord`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatablerecord.html#aws-resource-connect-datatablerecord-return-values}
 */
export type ConnectDataTableRecordAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  RecordId: string;
};
/**
 * Type definition for `AWS::Connect::DataTableRecord.Value`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-datatablerecord-value.html}
 */
export type Value = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  AttributeId?: string;
  AttributeValue?: string;
};
/**
 * Resource Type definition for AWS::Connect::DataTableRecord
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-datatablerecord.html}
 */
export class ConnectDataTableRecord extends $Resource<
  "AWS::Connect::DataTableRecord",
  ConnectDataTableRecordProperties,
  ConnectDataTableRecordAttributes
> {
  public static readonly Type = "AWS::Connect::DataTableRecord";
  constructor(
    logicalId: string,
    properties: ConnectDataTableRecordProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectDataTableRecord.Type, properties, options);
  }
}
