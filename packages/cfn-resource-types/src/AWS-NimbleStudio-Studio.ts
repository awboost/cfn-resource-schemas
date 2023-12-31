import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::NimbleStudio::Studio`.
 * Represents a studio that contains other Nimble Studio resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html}
 */
export type NimbleStudioStudioProperties = {
  /**
   * <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
   */
  AdminRoleArn: string;
  /**
   * <p>A friendly name for the studio.</p>
   * @maxLength `64`
   */
  DisplayName: string;
  /**
   * <p>Configuration of the encryption method that is used for the studio.</p>
   */
  StudioEncryptionConfiguration?: StudioEncryptionConfiguration;
  /**
   * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.</p>
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^[a-z0-9]*$`
   */
  StudioName: string;
  Tags?: Tags;
  /**
   * <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>
   */
  UserRoleArn: string;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::Studio`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#aws-resource-nimblestudio-studio-return-values}
 */
export type NimbleStudioStudioAttributes = {
  /**
   * <p>The Amazon Web Services Region where the studio resource is located.</p>
   * @maxLength `50`
   * @pattern `[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]`
   */
  HomeRegion: string;
  /**
   * <p>The Amazon Web Services SSO application client ID used to integrate with Amazon Web Services SSO to enable Amazon Web Services SSO users to log in to Nimble Studio portal.</p>
   */
  SsoClientId: string;
  StudioId: string;
  /**
   * <p>The address of the web page for the studio.</p>
   */
  StudioUrl: string;
};
/**
 * Type definition for `AWS::NimbleStudio::Studio.StudioEncryptionConfiguration`.
 * <p>Configuration of the encryption method that is used for the studio.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html}
 */
export type StudioEncryptionConfiguration = {
  /**
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   * @minLength `4`
   * @pattern `^arn:.*`
   */
  KeyArn?: string;
  /**
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   */
  KeyType: StudioEncryptionConfigurationKeyType;
};
/**
 * Type definition for `AWS::NimbleStudio::Studio.StudioEncryptionConfigurationKeyType`.
 * <p>The type of KMS key that is used to encrypt studio data.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfigurationkeytype.html}
 */
export type StudioEncryptionConfigurationKeyType =
  | "AWS_OWNED_KEY"
  | "CUSTOMER_MANAGED_KEY";
/**
 * Type definition for `AWS::NimbleStudio::Studio.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::NimbleStudio::Studio`.
 * Represents a studio that contains other Nimble Studio resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html}
 */
export class NimbleStudioStudio extends $Resource<
  "AWS::NimbleStudio::Studio",
  NimbleStudioStudioProperties,
  NimbleStudioStudioAttributes
> {
  public static readonly Type = "AWS::NimbleStudio::Studio";
  public static readonly AttributeNames = [
    "HomeRegion" as const,
    "SsoClientId" as const,
    "StudioId" as const,
    "StudioUrl" as const,
  ];
  constructor(
    logicalId: string,
    properties: NimbleStudioStudioProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NimbleStudioStudio.Type,
      properties,
      NimbleStudioStudio.AttributeNames,
      options,
    );
  }
}
