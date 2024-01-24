import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::NetworkSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html}
 */
export type WorkSpacesWebNetworkSettingsProperties = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * @minLength `2`
   * @maxLength `3`
   */
  SubnetIds: string[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^vpc-[0-9a-z]*$`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::NetworkSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#aws-resource-workspacesweb-networksettings-return-values}
 */
export type WorkSpacesWebNetworkSettingsAttributes = {
  AssociatedPortalArns: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  NetworkSettingsArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::NetworkSettings.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-networksettings-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Definition of AWS::WorkSpacesWeb::NetworkSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html}
 */
export class WorkSpacesWebNetworkSettings extends $Resource<
  "AWS::WorkSpacesWeb::NetworkSettings",
  WorkSpacesWebNetworkSettingsProperties,
  WorkSpacesWebNetworkSettingsAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::NetworkSettings";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebNetworkSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWebNetworkSettings.Type, properties, options);
  }
}
