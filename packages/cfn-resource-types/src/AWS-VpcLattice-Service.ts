import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::VpcLattice::Service`.
 * A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html}
 */
export type VpcLatticeServiceProperties = {
  AuthType?: "NONE" | "AWS_IAM";
  /**
   * @maxLength `2048`
   * @pattern `^(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:certificate/[0-9a-z-]+)?$`
   */
  CertificateArn?: string;
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  CustomDomainName?: string;
  DnsEntry?: DnsEntry;
  /**
   * @minLength `3`
   * @maxLength `40`
   * @pattern `^(?!svc-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name?: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html#aws-resource-vpclattice-service-return-values}
 */
export type VpcLatticeServiceAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:service/svc-[0-9a-z]{17}$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `21`
   * @maxLength `21`
   * @pattern `^svc-[0-9a-z]{17}$`
   */
  Id: string;
  LastUpdatedAt: string;
  Status:
    | "ACTIVE"
    | "CREATE_IN_PROGRESS"
    | "DELETE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "DELETE_FAILED";
};
/**
 * Type definition for `AWS::VpcLattice::Service.DnsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-service-dnsentry.html}
 */
export type DnsEntry = {
  DomainName?: string;
  HostedZoneId?: string;
};
/**
 * Type definition for `AWS::VpcLattice::Service.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-service-tag.html}
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
 * Resource type definition for `AWS::VpcLattice::Service`.
 * A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html}
 */
export class VpcLatticeService extends $Resource<
  "AWS::VpcLattice::Service",
  VpcLatticeServiceProperties,
  VpcLatticeServiceAttributes
> {
  public static readonly Type = "AWS::VpcLattice::Service";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedAt" as const,
    "Id" as const,
    "LastUpdatedAt" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VpcLatticeService.Type,
      properties,
      VpcLatticeService.AttributeNames,
      options,
    );
  }
}
