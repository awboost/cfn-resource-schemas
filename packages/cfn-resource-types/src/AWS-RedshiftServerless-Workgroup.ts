import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::RedshiftServerless::Workgroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html}
 */
export type RedshiftServerlessWorkgroupProperties = {
  BaseCapacity?: number;
  /**
   * @minLength `1`
   */
  ConfigParameters?: ConfigParameter[];
  EnhancedVpcRouting?: boolean;
  /**
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^(?=^[a-z0-9-]+$).{3,64}$`
   */
  NamespaceName?: string;
  Port?: number;
  PubliclyAccessible?: boolean;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  SecurityGroupIds?: string[];
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  SubnetIds?: string[];
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^(?=^[a-z0-9-]+$).{3,64}$`
   */
  WorkgroupName: string;
};
/**
 * Attribute type definition for `AWS::RedshiftServerless::Workgroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#aws-resource-redshiftserverless-workgroup-return-values}
 */
export type RedshiftServerlessWorkgroupAttributes = {
  Workgroup: Workgroup;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.ConfigParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html}
 */
export type ConfigParameter = {
  /**
   * @maxLength `255`
   */
  ParameterKey?: string;
  /**
   * @maxLength `15000`
   */
  ParameterValue?: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html}
 */
export type Endpoint = {
  Address?: string;
  Port?: number;
  VpcEndpoints?: VpcEndpoint[];
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.NetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html}
 */
export type NetworkInterface = {
  AvailabilityZone?: string;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  SubnetId?: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.VpcEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html}
 */
export type VpcEndpoint = {
  NetworkInterfaces?: NetworkInterface[];
  VpcEndpointId?: string;
  VpcId?: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.Workgroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html}
 */
export type Workgroup = {
  BaseCapacity?: number;
  ConfigParameters?: ConfigParameter[];
  CreationDate?: string;
  Endpoint?: Endpoint;
  EnhancedVpcRouting?: boolean;
  /**
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^[a-z0-9-]+$`
   */
  NamespaceName?: string;
  PubliclyAccessible?: boolean;
  SecurityGroupIds?: string[];
  Status?: WorkgroupStatus;
  SubnetIds?: string[];
  WorkgroupArn?: string;
  WorkgroupId?: string;
  /**
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^[a-z0-9-]*$`
   */
  WorkgroupName?: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.WorkgroupStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroupstatus.html}
 */
export type WorkgroupStatus =
  | "CREATING"
  | "AVAILABLE"
  | "MODIFYING"
  | "DELETING";
/**
 * Definition of AWS::RedshiftServerless::Workgroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html}
 */
export class RedshiftServerlessWorkgroup extends $Resource<
  "AWS::RedshiftServerless::Workgroup",
  RedshiftServerlessWorkgroupProperties,
  RedshiftServerlessWorkgroupAttributes
> {
  public static readonly Type = "AWS::RedshiftServerless::Workgroup";
  public static readonly AttributeNames = ["Workgroup" as const];
  constructor(
    logicalId: string,
    properties: RedshiftServerlessWorkgroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftServerlessWorkgroup.Type,
      properties,
      RedshiftServerlessWorkgroup.AttributeNames,
      options,
    );
  }
}
