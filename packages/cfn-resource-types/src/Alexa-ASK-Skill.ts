import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for Alexa::ASK::Skill
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html}
 */
export type AlexaASKSkillProperties = {
  AuthenticationConfiguration: AuthenticationConfiguration;
  SkillPackage: SkillPackage;
  VendorId: string;
};
/**
 * Attribute type definition for `Alexa::ASK::Skill`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html#aws-resource-ask-skill-return-values}
 */
export type AlexaASKSkillAttributes = {
  Id: string;
};
/**
 * Type definition for `Alexa::ASK::Skill.AuthenticationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html}
 */
export type AuthenticationConfiguration = {
  ClientId: string;
  ClientSecret: string;
  RefreshToken: string;
};
/**
 * Type definition for `Alexa::ASK::Skill.Overrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-overrides.html}
 */
export type Overrides = {
  Manifest?: Record<string, any>;
};
/**
 * Type definition for `Alexa::ASK::Skill.SkillPackage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html}
 */
export type SkillPackage = {
  Overrides?: Overrides;
  S3Bucket: string;
  S3BucketRole?: string;
  S3Key: string;
  S3ObjectVersion?: string;
};
/**
 * Resource Type definition for Alexa::ASK::Skill
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html}
 */
export class AlexaASKSkill extends $Resource<
  "Alexa::ASK::Skill",
  AlexaASKSkillProperties,
  AlexaASKSkillAttributes
> {
  public static readonly Type = "Alexa::ASK::Skill";
  constructor(
    logicalId: string,
    properties: AlexaASKSkillProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AlexaASKSkill.Type, properties, options);
  }
}
