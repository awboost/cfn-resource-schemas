import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::DirectoryConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html}
 */
export type AppStreamDirectoryConfigProperties = {
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
  DirectoryName: string;
  OrganizationalUnitDistinguishedNames: string[];
  ServiceAccountCredentials: ServiceAccountCredentials;
};
/**
 * Type definition for `AWS::AppStream::DirectoryConfig.CertificateBasedAuthProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-certificatebasedauthproperties.html}
 */
export type CertificateBasedAuthProperties = {
  CertificateAuthorityArn?: string;
  Status?: string;
};
/**
 * Type definition for `AWS::AppStream::DirectoryConfig.ServiceAccountCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html}
 */
export type ServiceAccountCredentials = {
  AccountName: string;
  AccountPassword: string;
};
/**
 * Resource Type definition for AWS::AppStream::DirectoryConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html}
 */
export class AppStreamDirectoryConfig extends $Resource<
  "AWS::AppStream::DirectoryConfig",
  AppStreamDirectoryConfigProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::DirectoryConfig";
  constructor(
    logicalId: string,
    properties: AppStreamDirectoryConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamDirectoryConfig.Type, properties, options);
  }
}
