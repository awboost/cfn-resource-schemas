import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::RDS::OptionGroup`` resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html}
 */
export type RDSOptionGroupProperties = {
  /**
     * Specifies the name of the engine that this option group should be associated with.
     Valid Values:
      +   ``mariadb``
      +   ``mysql``
      +   ``oracle-ee``
      +   ``oracle-ee-cdb``
      +   ``oracle-se2``
      +   ``oracle-se2-cdb``
      +   ``postgres``
      +   ``sqlserver-ee``
      +   ``sqlserver-se``
      +   ``sqlserver-ex``
      +   ``sqlserver-web``
     */
  EngineName: string;
  /**
   * Specifies the major version of the engine that this option group should be associated with.
   */
  MajorEngineVersion: string;
  /**
   * A list of all available options for an option group.
   */
  OptionConfigurations?: OptionConfiguration[];
  /**
   * The description of the option group.
   */
  OptionGroupDescription: string;
  /**
     * The name of the option group to be created.
     Constraints:
      +  Must be 1 to 255 letters, numbers, or hyphens
      +  First character must be a letter
      +  Can't end with a hyphen or contain two consecutive hyphens
      
     Example: ``myoptiongroup``
     If you don't specify a value for ``OptionGroupName`` property, a name is automatically created for the option group.
      This value is stored as a lowercase string.
     */
  OptionGroupName?: string;
  /**
   * Tags to assign to the option group.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::OptionGroup.OptionConfiguration`.
 * The ``OptionConfiguration`` property type specifies an individual option, and its settings, within an ``AWS::RDS::OptionGroup`` resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html}
 */
export type OptionConfiguration = {
  /**
   * A list of DB security groups used for this option.
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
   * A list of VPC security group names used for this option.
   */
  VpcSecurityGroupMemberships?: string[];
};
/**
 * Type definition for `AWS::RDS::OptionGroup.OptionSetting`.
 * The ``OptionSetting`` property type specifies the value for an option within an ``OptionSetting`` property.
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
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-tag.html}
 */
export type Tag = {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The ``AWS::RDS::OptionGroup`` resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.
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
