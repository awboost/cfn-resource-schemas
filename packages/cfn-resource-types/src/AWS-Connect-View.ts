import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::View
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html}
 */
export type ConnectViewProperties = {
  /**
   * The actions of the view in an array.
   * @maxLength `1000`
   */
  Actions: string[];
  /**
   * The description of the view.
   * @minLength `0`
   * @maxLength `4096`
   * @pattern `^([\p{L}\p{N}_.:\/=+\-@,]+[\p{L}\p{Z}\p{N}_.:\/=+\-@,]*)$`
   */
  Description?: string;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the view.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^([\p{L}\p{N}_.:\/=+\-@]+[\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$`
   */
  Name: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The template of the view as JSON.
   */
  Template: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Connect::View`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html#aws-resource-connect-view-return-values}
 */
export type ConnectViewAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the view.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*view/[-:$a-zA-Z0-9]*$`
   */
  ViewArn: string;
  /**
   * The view content hash.
   * @pattern `^[a-zA-Z0-9]{64}$`
   */
  ViewContentSha256: string;
  /**
   * The view id of the view.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^[a-zA-Z0-9\_\-:\/$]+$`
   */
  ViewId: string;
};
/**
 * Type definition for `AWS::Connect::View.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-view-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. . You can specify a value that is maximum of 256 Unicode characters
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::View
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html}
 */
export class ConnectView extends $Resource<
  "AWS::Connect::View",
  ConnectViewProperties,
  ConnectViewAttributes
> {
  public static readonly Type = "AWS::Connect::View";
  constructor(
    logicalId: string,
    properties: ConnectViewProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectView.Type, properties, options);
  }
}
