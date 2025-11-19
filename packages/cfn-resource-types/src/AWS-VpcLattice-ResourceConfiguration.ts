import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::ResourceConfiguration`.
 * VpcLattice ResourceConfiguration CFN resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html}
 */
export type VpcLatticeResourceConfigurationProperties = {
  AllowAssociationToSharableServiceNetwork?: boolean;
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  CustomDomainName?: string;
  /**
   * @minLength `20`
   * @maxLength `20`
   * @pattern `^dv-[a-fA-F0-9]{17}$`
   */
  DomainVerificationId?: string;
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  GroupDomain?: string;
  /**
   * @minLength `3`
   * @maxLength `40`
   * @pattern `^(?!rcfg-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name: string;
  PortRanges?: string[];
  ProtocolType?: "TCP";
  ResourceConfigurationAuthType?: "NONE" | "AWS_IAM";
  ResourceConfigurationDefinition?:
    | {
        /**
         * @minLength `4`
         * @maxLength `39`
         */
        IpResource: string;
      }
    | {
        /**
         * @maxLength `1224`
         * @pattern `^arn.*`
         */
        ArnResource: string;
      }
    | {
        DnsResource: DnsResource;
      };
  /**
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^rcfg-[0-9a-z]{17}$`
   */
  ResourceConfigurationGroupId?: string;
  ResourceConfigurationType: "GROUP" | "CHILD" | "SINGLE" | "ARN";
  ResourceGatewayId?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::ResourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#aws-resource-vpclattice-resourceconfiguration-return-values}
 */
export type VpcLatticeResourceConfigurationAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9f\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourceconfiguration/rcfg-[0-9a-z]{17}$`
   */
  Arn: string;
  /**
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^rcfg-[0-9a-z]{17}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::VpcLattice::ResourceConfiguration.DnsResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-resourceconfiguration-dnsresource.html}
 */
export type DnsResource = {
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  DomainName: string;
  IpAddressType: "IPV4" | "IPV6" | "DUALSTACK";
};
/**
 * Type definition for `AWS::VpcLattice::ResourceConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-resourceconfiguration-tag.html}
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
  Value?: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::ResourceConfiguration`.
 * VpcLattice ResourceConfiguration CFN resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html}
 */
export class VpcLatticeResourceConfiguration extends $Resource<
  "AWS::VpcLattice::ResourceConfiguration",
  VpcLatticeResourceConfigurationProperties,
  VpcLatticeResourceConfigurationAttributes
> {
  public static readonly Type = "AWS::VpcLattice::ResourceConfiguration";
  constructor(
    logicalId: string,
    properties: VpcLatticeResourceConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeResourceConfiguration.Type, properties, options);
  }
}
