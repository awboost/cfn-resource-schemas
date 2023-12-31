import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::WorkSpacesWeb::TrustStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html}
 */
export type WorkSpacesWebTrustStoreProperties = {
  CertificateList: string[];
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::TrustStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html#aws-resource-workspacesweb-truststore-return-values}
 */
export type WorkSpacesWebTrustStoreAttributes = {
  AssociatedPortalArns: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  TrustStoreArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::TrustStore.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-truststore-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Definition of AWS::WorkSpacesWeb::TrustStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html}
 */
export class WorkSpacesWebTrustStore extends $Resource<
  "AWS::WorkSpacesWeb::TrustStore",
  WorkSpacesWebTrustStoreProperties,
  WorkSpacesWebTrustStoreAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::TrustStore";
  public static readonly AttributeNames = [
    "AssociatedPortalArns" as const,
    "TrustStoreArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebTrustStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWebTrustStore.Type,
      properties,
      WorkSpacesWebTrustStore.AttributeNames,
      options,
    );
  }
}
