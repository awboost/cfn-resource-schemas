import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectoryService::MicrosoftAD
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html}
 */
export type DirectoryServiceMicrosoftADProperties = {
  CreateAlias?: boolean;
  Edition?: string;
  EnableSso?: boolean;
  Name: string;
  Password: string;
  ShortName?: string;
  VpcSettings: VpcSettings;
};
/**
 * Attribute type definition for `AWS::DirectoryService::MicrosoftAD`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#aws-resource-directoryservice-microsoftad-return-values}
 */
export type DirectoryServiceMicrosoftADAttributes = {
  Alias: string;
  DnsIpAddresses: string[];
  Id: string;
};
/**
 * Type definition for `AWS::DirectoryService::MicrosoftAD.VpcSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-microsoftad-vpcsettings.html}
 */
export type VpcSettings = {
  SubnetIds: string[];
  VpcId: string;
};
/**
 * Resource Type definition for AWS::DirectoryService::MicrosoftAD
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html}
 */
export class DirectoryServiceMicrosoftAD extends $Resource<
  "AWS::DirectoryService::MicrosoftAD",
  DirectoryServiceMicrosoftADProperties,
  DirectoryServiceMicrosoftADAttributes
> {
  public static readonly Type = "AWS::DirectoryService::MicrosoftAD";
  constructor(
    logicalId: string,
    properties: DirectoryServiceMicrosoftADProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DirectoryServiceMicrosoftAD.Type, properties, options);
  }
}
