import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::NimbleStudio::Studio
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html}
 */
export type NimbleStudioStudioProperties = {
  AdminRoleArn: string;
  DisplayName: string;
  StudioEncryptionConfiguration?: StudioEncryptionConfiguration;
  StudioName: string;
  Tags?: Record<string, string>;
  UserRoleArn: string;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::Studio`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#aws-resource-nimblestudio-studio-return-values}
 */
export type NimbleStudioStudioAttributes = {
  HomeRegion: string;
  SsoClientId: string;
  StudioId: string;
  StudioUrl: string;
};
/**
 * Type definition for `AWS::NimbleStudio::Studio.StudioEncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html}
 */
export type StudioEncryptionConfiguration = {
  KeyArn?: string;
  KeyType: string;
};
/**
 * Resource Type definition for AWS::NimbleStudio::Studio
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html}
 */
export class NimbleStudioStudio extends $Resource<
  "AWS::NimbleStudio::Studio",
  NimbleStudioStudioProperties,
  NimbleStudioStudioAttributes
> {
  public static readonly Type = "AWS::NimbleStudio::Studio";
  constructor(
    logicalId: string,
    properties: NimbleStudioStudioProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NimbleStudioStudio.Type, properties, options);
  }
}
