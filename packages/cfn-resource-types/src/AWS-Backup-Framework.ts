import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Backup::Framework`.
 * Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html}
 */
export type BackupFrameworkProperties = {
  /**
   * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
   */
  FrameworkControls: FrameworkControl[];
  /**
   * An optional description of the framework with a maximum 1,024 characters.
   * @minLength `0`
   * @maxLength `1024`
   */
  FrameworkDescription?: string;
  /**
   * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z][_a-zA-Z0-9]*`
   */
  FrameworkName?: string;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  FrameworkTags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Backup::Framework`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#aws-resource-backup-framework-return-values}
 */
export type BackupFrameworkAttributes = {
  /**
   * The date and time that a framework is created, in ISO 8601 representation. The value of CreationTime is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.
   */
  CreationTime: string;
  /**
   * The deployment status of a framework. The statuses are: `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`
   */
  DeploymentStatus: string;
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource
   */
  FrameworkArn: string;
  /**
     * A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. The statuses are:
    
    `ACTIVE` when recording is turned on for all resources governed by the framework.
    
    `PARTIALLY_ACTIVE` when recording is turned off for at least one resource governed by the framework.
    
    `INACTIVE` when recording is turned off for all resources governed by the framework.
    
    `UNAVAILABLE` when AWS Backup is unable to validate recording status at this time.
     */
  FrameworkStatus: string;
};
/**
 * Type definition for `AWS::Backup::Framework.ControlInputParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html}
 */
export type ControlInputParameter = {
  ParameterName: string;
  ParameterValue: string;
};
/**
 * Type definition for `AWS::Backup::Framework.FrameworkControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html}
 */
export type FrameworkControl = {
  /**
   * A list of ParameterName and ParameterValue pairs.
   */
  ControlInputParameters?: ControlInputParameter[];
  /**
   * The name of a control. This name is between 1 and 256 characters.
   */
  ControlName: string;
  /**
   * The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.
   */
  ControlScope?: {
    /**
     * The ID of the only AWS resource that you want your control scope to contain.
     */
    ComplianceResourceIds?: string[];
    /**
     * Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
     */
    ComplianceResourceTypes?: string[];
    /**
     * Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.
     */
    Tags?: Tag[];
  };
};
/**
 * Type definition for `AWS::Backup::Framework.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::Backup::Framework`.
 * Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html}
 */
export class BackupFramework extends $Resource<
  "AWS::Backup::Framework",
  BackupFrameworkProperties,
  BackupFrameworkAttributes
> {
  public static readonly Type = "AWS::Backup::Framework";
  constructor(
    logicalId: string,
    properties: BackupFrameworkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BackupFramework.Type, properties, options);
  }
}
