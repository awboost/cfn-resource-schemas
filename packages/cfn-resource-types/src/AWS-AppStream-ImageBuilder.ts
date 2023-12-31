import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::ImageBuilder
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html}
 */
export type AppStreamImageBuilderProperties = {
  AccessEndpoints?: AccessEndpoint[];
  AppstreamAgentVersion?: string;
  Description?: string;
  DisplayName?: string;
  DomainJoinInfo?: DomainJoinInfo;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  ImageArn?: string;
  ImageName?: string;
  InstanceType: string;
  Name: string;
  Tags?: Tag[];
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::AppStream::ImageBuilder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#aws-resource-appstream-imagebuilder-return-values}
 */
export type AppStreamImageBuilderAttributes = {
  StreamingUrl: string;
};
/**
 * Type definition for `AWS::AppStream::ImageBuilder.AccessEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-accessendpoint.html}
 */
export type AccessEndpoint = {
  EndpointType: string;
  VpceId: string;
};
/**
 * Type definition for `AWS::AppStream::ImageBuilder.DomainJoinInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-domainjoininfo.html}
 */
export type DomainJoinInfo = {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedName?: string;
};
/**
 * Type definition for `AWS::AppStream::ImageBuilder.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppStream::ImageBuilder.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Resource Type definition for AWS::AppStream::ImageBuilder
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html}
 */
export class AppStreamImageBuilder extends $Resource<
  "AWS::AppStream::ImageBuilder",
  AppStreamImageBuilderProperties,
  AppStreamImageBuilderAttributes
> {
  public static readonly Type = "AWS::AppStream::ImageBuilder";
  constructor(
    logicalId: string,
    properties: AppStreamImageBuilderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamImageBuilder.Type, properties, options);
  }
}
