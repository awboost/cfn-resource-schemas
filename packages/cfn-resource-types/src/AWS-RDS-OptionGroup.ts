import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::OptionGroup resource creates an option group, to enable and configure features that are specific to a particular DB engine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html}
 */
export type RDSOptionGroupProperties = {
  /**
   * Indicates the name of the engine that this option group can be applied to.
   */
  EngineName: string;
  /**
   * Indicates the major engine version associated with this option group.
   */
  MajorEngineVersion: string;
  /**
   * Indicates what options are available in the option group.
   */
  OptionConfigurations?: OptionConfiguration[];
  /**
   * Provides a description of the option group.
   */
  OptionGroupDescription: string;
  /**
   * Specifies the name of the option group.
   */
  OptionGroupName?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::OptionGroup.OptionConfiguration`.
 * The OptionConfiguration property type specifies an individual option, and its settings, within an AWS::RDS::OptionGroup resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html}
 */
export type OptionConfiguration = {
  /**
   * A list of DBSecurityGroupMembership name strings used for this option.
   */
  DBSecurityGroupMemberships?: string[];
  /**
   * The configuration of options to include in a group.
   */
  OptionName: string;
  /**
   * The option settings to include in an option group.
   */
  OptionSettings?: OptionSetting[];
  /**
   * The version for the option.
   */
  OptionVersion?: string;
  /**
   * The optional port for the option.
   */
  Port?: number;
  /**
   * A list of VpcSecurityGroupMembership name strings used for this option.
   */
  VpcSecurityGroupMemberships?: string[];
};
/**
 * Type definition for `AWS::RDS::OptionGroup.OptionSetting`.
 * The OptionSetting property type specifies the value for an option within an OptionSetting property.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionsetting.html}
 */
export type OptionSetting = {
  /**
   * The name of the option that has settings that you can set.
   */
  Name?: string;
  /**
   * The current value of the option setting.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::RDS::OptionGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::RDS::OptionGroup resource creates an option group, to enable and configure features that are specific to a particular DB engine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html}
 */
export class RDSOptionGroup extends $Resource<
  "AWS::RDS::OptionGroup",
  RDSOptionGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::OptionGroup";
  constructor(
    logicalId: string,
    properties: RDSOptionGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSOptionGroup.Type, properties, options);
  }
}
