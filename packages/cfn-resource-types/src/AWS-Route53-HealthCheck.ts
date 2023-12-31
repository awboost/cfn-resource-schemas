import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::Route53::HealthCheck.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 */
export type Route53HealthCheckProperties = {
  /**
   * A complex type that contains information about the health check.
   */
  HealthCheckConfig: {
    /**
     * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
     */
    AlarmIdentifier?: AlarmIdentifier;
    /**
     * @maxLength `256`
     */
    ChildHealthChecks?: string[];
    EnableSNI?: boolean;
    /**
     * @min `1`
     * @max `10`
     */
    FailureThreshold?: number;
    /**
     * @maxLength `255`
     */
    FullyQualifiedDomainName?: string;
    /**
     * @max `256`
     */
    HealthThreshold?: number;
    /**
     * @maxLength `45`
     * @pattern `^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$`
     */
    IPAddress?: string;
    InsufficientDataHealthStatus?: "Healthy" | "LastKnownStatus" | "Unhealthy";
    Inverted?: boolean;
    MeasureLatency?: boolean;
    /**
     * @min `1`
     * @max `65535`
     */
    Port?: number;
    /**
     * @maxLength `64`
     */
    Regions?: string[];
    /**
     * @min `10`
     * @max `30`
     */
    RequestInterval?: number;
    /**
     * @maxLength `255`
     */
    ResourcePath?: string;
    /**
     * @minLength `1`
     * @maxLength `255`
     */
    RoutingControlArn?: string;
    /**
     * @maxLength `255`
     */
    SearchString?: string;
    Type:
      | "CALCULATED"
      | "CLOUDWATCH_METRIC"
      | "HTTP"
      | "HTTP_STR_MATCH"
      | "HTTPS"
      | "HTTPS_STR_MATCH"
      | "TCP"
      | "RECOVERY_CONTROL";
  };
  /**
   * An array of key-value pairs to apply to this resource.
   */
  HealthCheckTags?: HealthCheckTag[];
};
/**
 * Attribute type definition for `AWS::Route53::HealthCheck`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-return-values}
 */
export type Route53HealthCheckAttributes = {
  HealthCheckId: string;
};
/**
 * Type definition for `AWS::Route53::HealthCheck.AlarmIdentifier`.
 * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-alarmidentifier.html}
 */
export type AlarmIdentifier = {
  /**
   * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
  /**
   * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
   */
  Region: string;
};
/**
 * Type definition for `AWS::Route53::HealthCheck.HealthCheckTag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html}
 */
export type HealthCheckTag = {
  /**
   * The key name of the tag.
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Route53::HealthCheck.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 */
export class Route53HealthCheck extends $Resource<
  "AWS::Route53::HealthCheck",
  Route53HealthCheckProperties,
  Route53HealthCheckAttributes
> {
  public static readonly Type = "AWS::Route53::HealthCheck";
  public static readonly AttributeNames = ["HealthCheckId" as const];
  constructor(
    logicalId: string,
    properties: Route53HealthCheckProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53HealthCheck.Type,
      properties,
      Route53HealthCheck.AttributeNames,
      options,
    );
  }
}
