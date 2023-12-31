import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::PCAConnectorAD::DirectoryRegistration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html}
 */
export type PCAConnectorADDirectoryRegistrationProperties = {
  /**
   * @pattern `^d-[0-9a-f]{10}$`
   */
  DirectoryId: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::PCAConnectorAD::DirectoryRegistration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html#aws-resource-pcaconnectorad-directoryregistration-return-values}
 */
export type PCAConnectorADDirectoryRegistrationAttributes = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:directory-registration(\/[\w-]+)$`
   */
  DirectoryRegistrationArn: string;
};
/**
 * Type definition for `AWS::PCAConnectorAD::DirectoryRegistration.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-directoryregistration-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Definition of AWS::PCAConnectorAD::DirectoryRegistration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html}
 */
export class PCAConnectorADDirectoryRegistration extends $Resource<
  "AWS::PCAConnectorAD::DirectoryRegistration",
  PCAConnectorADDirectoryRegistrationProperties,
  PCAConnectorADDirectoryRegistrationAttributes
> {
  public static readonly Type = "AWS::PCAConnectorAD::DirectoryRegistration";
  public static readonly AttributeNames = ["DirectoryRegistrationArn" as const];
  constructor(
    logicalId: string,
    properties: PCAConnectorADDirectoryRegistrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PCAConnectorADDirectoryRegistration.Type,
      properties,
      PCAConnectorADDirectoryRegistration.AttributeNames,
      options,
    );
  }
}
