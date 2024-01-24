import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::AppBlockBuilder.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html}
 */
export type AppStreamAppBlockBuilderProperties = {
  AccessEndpoints?: AccessEndpoint[];
  AppBlockArns?: string[];
  Description?: string;
  DisplayName?: string;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  InstanceType: string;
  Name: string;
  Platform: string;
  Tags?: Tag[];
  VpcConfig: VpcConfig;
};
/**
 * Attribute type definition for `AWS::AppStream::AppBlockBuilder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#aws-resource-appstream-appblockbuilder-return-values}
 */
export type AppStreamAppBlockBuilderAttributes = {
  Arn: string;
  CreatedTime: string;
};
/**
 * Type definition for `AWS::AppStream::AppBlockBuilder.AccessEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-accessendpoint.html}
 */
export type AccessEndpoint = {
  EndpointType: string;
  VpceId: string;
};
/**
 * Type definition for `AWS::AppStream::AppBlockBuilder.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppStream::AppBlockBuilder.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Resource Type definition for AWS::AppStream::AppBlockBuilder.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html}
 */
export class AppStreamAppBlockBuilder extends $Resource<
  "AWS::AppStream::AppBlockBuilder",
  AppStreamAppBlockBuilderProperties,
  AppStreamAppBlockBuilderAttributes
> {
  public static readonly Type = "AWS::AppStream::AppBlockBuilder";
  constructor(
    logicalId: string,
    properties: AppStreamAppBlockBuilderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamAppBlockBuilder.Type, properties, options);
  }
}
