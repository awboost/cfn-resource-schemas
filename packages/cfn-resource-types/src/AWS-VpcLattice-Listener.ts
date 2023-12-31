import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::VpcLattice::Listener`.
 * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html}
 */
export type VpcLatticeListenerProperties = {
  DefaultAction: DefaultAction;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!listener-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name?: string;
  /**
   * @min `1`
   * @max `65535`
   */
  Port?: number;
  Protocol: "HTTP" | "HTTPS";
  /**
   * @minLength `21`
   * @maxLength `2048`
   * @pattern `^((svc-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:service/svc-[0-9a-z]{17}))$`
   */
  ServiceIdentifier?: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::Listener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html#aws-resource-vpclattice-listener-return-values}
 */
export type VpcLatticeListenerAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:service/svc-[0-9a-z]{17}/listener/listener-[0-9a-z]{17}$`
   */
  Arn: string;
  /**
   * @minLength `26`
   * @maxLength `26`
   * @pattern `^listener-[0-9a-z]{17}$`
   */
  Id: string;
  /**
   * @minLength `21`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:service/svc-[0-9a-z]{17}$`
   */
  ServiceArn: string;
  /**
   * @minLength `21`
   * @maxLength `21`
   * @pattern `^svc-[0-9a-z]{17}$`
   */
  ServiceId: string;
};
/**
 * Type definition for `AWS::VpcLattice::Listener.DefaultAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-defaultaction.html}
 */
export type DefaultAction = {
  FixedResponse?: FixedResponse;
  Forward?: Forward;
};
/**
 * Type definition for `AWS::VpcLattice::Listener.FixedResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-fixedresponse.html}
 */
export type FixedResponse = {
  /**
   * @min `100`
   * @max `599`
   */
  StatusCode: number;
};
/**
 * Type definition for `AWS::VpcLattice::Listener.Forward`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-forward.html}
 */
export type Forward = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  TargetGroups: WeightedTargetGroup[];
};
/**
 * Type definition for `AWS::VpcLattice::Listener.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-tag.html}
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
 * Type definition for `AWS::VpcLattice::Listener.WeightedTargetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-weightedtargetgroup.html}
 */
export type WeightedTargetGroup = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((tg-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:targetgroup/tg-[0-9a-z]{17}))$`
   */
  TargetGroupIdentifier: string;
  /**
   * @min `1`
   * @max `999`
   */
  Weight?: number;
};
/**
 * Resource type definition for `AWS::VpcLattice::Listener`.
 * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html}
 */
export class VpcLatticeListener extends $Resource<
  "AWS::VpcLattice::Listener",
  VpcLatticeListenerProperties,
  VpcLatticeListenerAttributes
> {
  public static readonly Type = "AWS::VpcLattice::Listener";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "ServiceArn" as const,
    "ServiceId" as const,
  ];
  constructor(
    logicalId: string,
    properties: VpcLatticeListenerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VpcLatticeListener.Type,
      properties,
      VpcLatticeListener.AttributeNames,
      options,
    );
  }
}
