import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RedshiftServerless::Workgroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html}
 */
export type RedshiftServerlessWorkgroupProperties = {
  BaseCapacity?: number;
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
   * @minLength `0`
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
  /**
   * @minLength `1`
   */
  ConfigParameters: {
    /**
     * @minLength `0`
     * @maxLength `255`
     */
    ParameterKey: string;
    /**
     * @minLength `0`
     * @maxLength `15000`
     */
    ParameterValue: string;
  }[];
  Workgroup: {
    BaseCapacity: number;
    ConfigParameters: {
      /**
       * @minLength `0`
       * @maxLength `255`
       */
      ParameterKey: string;
      /**
       * @minLength `0`
       * @maxLength `15000`
       */
      ParameterValue: string;
    }[];
    CreationDate: string;
    Endpoint: {
      Address: string;
      Port: number;
      VpcEndpoints: {
        NetworkInterfaces: {
          AvailabilityZone: string;
          NetworkInterfaceId: string;
          PrivateIpAddress: string;
          SubnetId: string;
        }[];
        VpcEndpointId: string;
        VpcId: string;
      }[];
    };
    EnhancedVpcRouting: boolean;
    /**
     * @minLength `3`
     * @maxLength `64`
     * @pattern `^[a-z0-9-]+$`
     */
    NamespaceName: string;
    PubliclyAccessible: boolean;
    SecurityGroupIds: string[];
    Status: WorkgroupStatus;
    SubnetIds: string[];
    WorkgroupArn: string;
    WorkgroupId: string;
    /**
     * @minLength `3`
     * @maxLength `64`
     * @pattern `^[a-z0-9-]*$`
     */
    WorkgroupName: string;
  };
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
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
  constructor(
    logicalId: string,
    properties: RedshiftServerlessWorkgroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftServerlessWorkgroup.Type, properties, options);
  }
}
