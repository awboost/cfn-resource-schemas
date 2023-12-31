import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Connect::ViewVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html}
 */
export type ConnectViewVersionProperties = {
  /**
   * The description for the view version.
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `^([\p{L}\p{N}_.:\/=+\-@,]+[\p{L}\p{Z}\p{N}_.:\/=+\-@,]*)$`
   */
  VersionDescription?: string;
  /**
   * The Amazon Resource Name (ARN) of the view for which a version is being created.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*view/[-:a-zA-Z0-9]*$`
   */
  ViewArn: string;
  /**
   * The view content hash to be checked.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9]{64}$`
   */
  ViewContentSha256?: string;
};
/**
 * Attribute type definition for `AWS::Connect::ViewVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#aws-resource-connect-viewversion-return-values}
 */
export type ConnectViewVersionAttributes = {
  /**
   * The version of the view.
   */
  Version: number;
  /**
   * The Amazon Resource Name (ARN) of the created view version.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*view/[-:a-zA-Z0-9]*$`
   */
  ViewVersionArn: string;
};
/**
 * Resource Type definition for AWS::Connect::ViewVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html}
 */
export class ConnectViewVersion extends $Resource<
  "AWS::Connect::ViewVersion",
  ConnectViewVersionProperties,
  ConnectViewVersionAttributes
> {
  public static readonly Type = "AWS::Connect::ViewVersion";
  public static readonly AttributeNames = [
    "Version" as const,
    "ViewVersionArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: ConnectViewVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectViewVersion.Type,
      properties,
      ConnectViewVersion.AttributeNames,
      options,
    );
  }
}
