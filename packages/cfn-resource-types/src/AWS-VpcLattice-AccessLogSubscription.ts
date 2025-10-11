import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::AccessLogSubscription`.
 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-accesslogsubscription.html}
 */
export type VpcLatticeAccessLogSubscriptionProperties = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  DestinationArn: string;
  /**
   * @minLength `17`
   * @maxLength `2048`
   * @pattern `^((((sn)|(svc)|(rcfg))-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork/sn)|(resourceconfiguration/rcfg)|(service/svc))-[0-9a-z]{17}))$`
   */
  ResourceIdentifier?: string;
  ServiceNetworkLogType?: "SERVICE" | "RESOURCE";
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::AccessLogSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-accesslogsubscription.html#aws-resource-vpclattice-accesslogsubscription-return-values}
 */
export type VpcLatticeAccessLogSubscriptionAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:accesslogsubscription/als-[0-9a-z]{17}$`
   */
  Arn: string;
  /**
   * @minLength `21`
   * @maxLength `21`
   * @pattern `^als-[0-9a-z]{17}$`
   */
  Id: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork/sn)|(service/svc)|(resourceconfiguration/rcfg))-[0-9a-z]{17}$`
   */
  ResourceArn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((sn)|(svc))-[0-9a-z]{17}$`
   */
  ResourceId: string;
};
/**
 * Type definition for `AWS::VpcLattice::AccessLogSubscription.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-accesslogsubscription-tag.html}
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
 * Resource type definition for `AWS::VpcLattice::AccessLogSubscription`.
 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-accesslogsubscription.html}
 */
export class VpcLatticeAccessLogSubscription extends $Resource<
  "AWS::VpcLattice::AccessLogSubscription",
  VpcLatticeAccessLogSubscriptionProperties,
  VpcLatticeAccessLogSubscriptionAttributes
> {
  public static readonly Type = "AWS::VpcLattice::AccessLogSubscription";
  constructor(
    logicalId: string,
    properties: VpcLatticeAccessLogSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeAccessLogSubscription.Type, properties, options);
  }
}
