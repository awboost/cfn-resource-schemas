import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::UserAccessLoggingSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html}
 */
export type WorkSpacesWebUserAccessLoggingSettingsProperties = {
  /**
   * Kinesis stream ARN to which log events are published.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:[\w+=/,.@-]+:kinesis:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:stream/.+`
   */
  KinesisStreamArn: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::UserAccessLoggingSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html#aws-resource-workspacesweb-useraccessloggingsettings-return-values}
 */
export type WorkSpacesWebUserAccessLoggingSettingsAttributes = {
  AssociatedPortalArns: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  UserAccessLoggingSettingsArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::UserAccessLoggingSettings.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-useraccessloggingsettings-tag.html}
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
 * Definition of AWS::WorkSpacesWeb::UserAccessLoggingSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html}
 */
export class WorkSpacesWebUserAccessLoggingSettings extends $Resource<
  "AWS::WorkSpacesWeb::UserAccessLoggingSettings",
  WorkSpacesWebUserAccessLoggingSettingsProperties,
  WorkSpacesWebUserAccessLoggingSettingsAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::UserAccessLoggingSettings";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebUserAccessLoggingSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWebUserAccessLoggingSettings.Type,
      properties,
      options,
    );
  }
}
