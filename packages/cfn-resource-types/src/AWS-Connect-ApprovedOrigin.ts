import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Connect::ApprovedOrigin
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html}
 */
export type ConnectApprovedOriginProperties = {
  /**
   * Amazon Connect instance identifier
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceId: string;
  /**
   * Domain name to be added to the allowlist of instance
   * @maxLength `267`
   */
  Origin: string;
};
/**
 * Resource Type definition for AWS::Connect::ApprovedOrigin
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html}
 */
export class ConnectApprovedOrigin extends $Resource<
  "AWS::Connect::ApprovedOrigin",
  ConnectApprovedOriginProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Connect::ApprovedOrigin";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConnectApprovedOriginProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectApprovedOrigin.Type,
      properties,
      ConnectApprovedOrigin.AttributeNames,
      options,
    );
  }
}
