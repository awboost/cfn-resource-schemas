import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::TargetGroup`.
 * A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html}
 */
export type VpcLatticeTargetGroupProperties = {
  Config?: TargetGroupConfig;
  /**
   * @minLength `3`
   * @maxLength `128`
   * @pattern `^(?!tg-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Targets?: Target[];
  Type: "IP" | "LAMBDA" | "INSTANCE" | "ALB";
};
/**
 * Attribute type definition for `AWS::VpcLattice::TargetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#aws-resource-vpclattice-targetgroup-return-values}
 */
export type VpcLatticeTargetGroupAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:targetgroup/tg-[0-9a-z]{17}$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `20`
   * @maxLength `20`
   * @pattern `^tg-[0-9a-z]{17}$`
   */
  Id: string;
  LastUpdatedAt: string;
  Status:
    | "CREATE_IN_PROGRESS"
    | "ACTIVE"
    | "DELETE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "DELETE_FAILED";
};
/**
 * Type definition for `AWS::VpcLattice::TargetGroup.HealthCheckConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-healthcheckconfig.html}
 */
export type HealthCheckConfig = {
  Enabled?: boolean;
  /**
   * @min `5`
   * @max `300`
   */
  HealthCheckIntervalSeconds?: number;
  /**
   * @min `1`
   * @max `120`
   */
  HealthCheckTimeoutSeconds?: number;
  /**
   * @min `2`
   * @max `10`
   */
  HealthyThresholdCount?: number;
  Matcher?: Matcher;
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `(^/[a-zA-Z0-9@:%_+.~#?&/=-]*$|(^$))`
   */
  Path?: string;
  /**
   * @min `1`
   * @max `65535`
   */
  Port?: number;
  Protocol?: "HTTP" | "HTTPS";
  ProtocolVersion?: "HTTP1" | "HTTP2";
  /**
   * @min `2`
   * @max `10`
   */
  UnhealthyThresholdCount?: number;
};
/**
 * Type definition for `AWS::VpcLattice::TargetGroup.Matcher`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-matcher.html}
 */
export type Matcher = {
  /**
   * @minLength `3`
   * @maxLength `2000`
   * @pattern `^[0-9-,]+$`
   */
  HttpCode: string;
};
/**
 * Type definition for `AWS::VpcLattice::TargetGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::VpcLattice::TargetGroup.Target`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-target.html}
 */
export type Target = {
  Id: string;
  /**
   * @min `1`
   * @max `65535`
   */
  Port?: number;
};
/**
 * Type definition for `AWS::VpcLattice::TargetGroup.TargetGroupConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-targetgroupconfig.html}
 */
export type TargetGroupConfig = {
  HealthCheck?: HealthCheckConfig;
  IpAddressType?: "IPV4" | "IPV6";
  LambdaEventStructureVersion?: "V1" | "V2";
  /**
   * @min `1`
   * @max `65535`
   */
  Port?: number;
  Protocol?: "HTTP" | "HTTPS" | "TCP";
  ProtocolVersion?: "HTTP1" | "HTTP2" | "GRPC";
  /**
   * @minLength `5`
   * @maxLength `2048`
   * @pattern `^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$`
   */
  VpcIdentifier?: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::TargetGroup`.
 * A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html}
 */
export class VpcLatticeTargetGroup extends $Resource<
  "AWS::VpcLattice::TargetGroup",
  VpcLatticeTargetGroupProperties,
  VpcLatticeTargetGroupAttributes
> {
  public static readonly Type = "AWS::VpcLattice::TargetGroup";
  constructor(
    logicalId: string,
    properties: VpcLatticeTargetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeTargetGroup.Type, properties, options);
  }
}
