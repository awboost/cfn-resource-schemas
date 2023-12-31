import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::PCAConnectorAD::TemplateGroupAccessControlEntry Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html}
 */
export type PCAConnectorADTemplateGroupAccessControlEntryProperties = {
  AccessRights: AccessRights;
  /**
   * @maxLength `256`
   * @pattern `^[\x20-\x7E]+$`
   */
  GroupDisplayName: string;
  /**
   * @minLength `7`
   * @maxLength `256`
   * @pattern `^S-[0-9]-([0-9]+-){1,14}[0-9]+$`
   */
  GroupSecurityIdentifier?: string;
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector(\/[\w-]+)\/template(\/[\w-]+)$`
   */
  TemplateArn?: string;
};
/**
 * Type definition for `AWS::PCAConnectorAD::TemplateGroupAccessControlEntry.AccessRight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessright.html}
 */
export type AccessRight = "ALLOW" | "DENY";
/**
 * Type definition for `AWS::PCAConnectorAD::TemplateGroupAccessControlEntry.AccessRights`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessrights.html}
 */
export type AccessRights = {
  AutoEnroll?: AccessRight;
  Enroll?: AccessRight;
};
/**
 * Definition of AWS::PCAConnectorAD::TemplateGroupAccessControlEntry Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html}
 */
export class PCAConnectorADTemplateGroupAccessControlEntry extends $Resource<
  "AWS::PCAConnectorAD::TemplateGroupAccessControlEntry",
  PCAConnectorADTemplateGroupAccessControlEntryProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::PCAConnectorAD::TemplateGroupAccessControlEntry";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PCAConnectorADTemplateGroupAccessControlEntryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PCAConnectorADTemplateGroupAccessControlEntry.Type,
      properties,
      PCAConnectorADTemplateGroupAccessControlEntry.AttributeNames,
      options,
    );
  }
}
