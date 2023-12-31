import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::CloudFormation::StackSet`.
 * StackSet as a resource provides one-click experience for provisioning a StackSet and StackInstances
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html}
 */
export type CloudFormationStackSetProperties = {
  /**
   * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
   * @minLength `20`
   * @maxLength `2048`
   */
  AdministrationRoleARN?: string;
  /**
   * Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED.
   */
  AutoDeployment?: AutoDeployment;
  /**
   * Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
   */
  CallAs?: "SELF" | "DELEGATED_ADMIN";
  /**
   * In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.
   */
  Capabilities?: Capability[];
  /**
   * A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.
   * @minLength `1`
   * @maxLength `64`
   */
  ExecutionRoleName?: string;
  /**
   * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
   */
  ManagedExecution?: {
    /**
     * When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
     */
    Active?: boolean;
  };
  /**
   * The user-specified preferences for how AWS CloudFormation performs a stack set operation.
   */
  OperationPreferences?: OperationPreferences;
  /**
   * The input parameters for the stack set template.
   */
  Parameters?: Parameter[];
  /**
   * Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
   */
  PermissionModel: "SERVICE_MANAGED" | "SELF_MANAGED";
  /**
   * A group of stack instances with parameters in some specific accounts and regions.
   */
  StackInstancesGroup?: StackInstances[];
  /**
   * The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9\-]{0,127}$`
   */
  StackSetName: string;
  /**
   * The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   * @minLength `1`
   * @maxLength `51200`
   */
  TemplateBody?: string;
  /**
   * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.
   * @minLength `1`
   * @maxLength `5120`
   */
  TemplateURL?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::StackSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#aws-resource-cloudformation-stackset-return-values}
 */
export type CloudFormationStackSetAttributes = {
  /**
   * The ID of the stack set that you're creating.
   */
  StackSetId: string;
};
/**
 * Type definition for `AWS::CloudFormation::StackSet.AutoDeployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html}
 */
export type AutoDeployment = {
  /**
   * If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
   */
  Enabled?: boolean;
  /**
   * If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True.
   */
  RetainStacksOnAccountRemoval?: boolean;
};
/**
 * Type definition for `AWS::CloudFormation::StackSet.Capability`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-capability.html}
 */
export type Capability =
  | "CAPABILITY_IAM"
  | "CAPABILITY_NAMED_IAM"
  | "CAPABILITY_AUTO_EXPAND";
/**
 * Type definition for `AWS::CloudFormation::StackSet.DeploymentTargets`.
 *  The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html}
 */
export type DeploymentTargets = {
  /**
   * The filter type you want to apply on organizational units and accounts.
   */
  AccountFilterType?: "NONE" | "UNION" | "INTERSECTION" | "DIFFERENCE";
  /**
   * AWS accounts that you want to create stack instances in the specified Region(s) for.
   * @minLength `1`
   */
  Accounts?: string[];
  /**
   * Returns the value of the AccountsUrl property.
   * @minLength `1`
   * @maxLength `5120`
   * @pattern `(s3://|http(s?)://).+`
   */
  AccountsUrl?: string;
  /**
   * The organization root ID or organizational unit (OU) IDs to which StackSets deploys.
   * @minLength `1`
   */
  OrganizationalUnitIds?: string[];
};
/**
 * Type definition for `AWS::CloudFormation::StackSet.OperationPreferences`.
 * The user-specified preferences for how AWS CloudFormation performs a stack set operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html}
 */
export type OperationPreferences = {
  FailureToleranceCount?: number;
  /**
   * @max `100`
   */
  FailureTolerancePercentage?: number;
  /**
   * @min `1`
   */
  MaxConcurrentCount?: number;
  /**
   * @max `100`
   */
  MaxConcurrentPercentage?: number;
  /**
   * The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time
   */
  RegionConcurrencyType?: RegionConcurrencyType;
  RegionOrder?: string[];
};
/**
 * Type definition for `AWS::CloudFormation::StackSet.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html}
 */
export type Parameter = {
  /**
   * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
   */
  ParameterKey: string;
  /**
   * The input value associated with the parameter.
   */
  ParameterValue: string;
};
/**
 * Type definition for `AWS::CloudFormation::StackSet.RegionConcurrencyType`.
 * The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-regionconcurrencytype.html}
 */
export type RegionConcurrencyType = "SEQUENTIAL" | "PARALLEL";
/**
 * Type definition for `AWS::CloudFormation::StackSet.StackInstances`.
 * Stack instances in some specific accounts and Regions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html}
 */
export type StackInstances = {
  /**
   *  The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
   */
  DeploymentTargets: DeploymentTargets;
  /**
   * A list of stack set parameters whose values you want to override in the selected stack instances.
   */
  ParameterOverrides?: Parameter[];
  /**
   * The names of one or more Regions where you want to create stack instances using the specified AWS account(s).
   * @minLength `1`
   */
  Regions: string[];
};
/**
 * Type definition for `AWS::CloudFormation::StackSet.Tag`.
 * Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation StackSet.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:.*)[a-zA-Z0-9\s\:\_\.\/\=\+\-]+$`
   */
  Key: string;
  /**
   * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudFormation::StackSet`.
 * StackSet as a resource provides one-click experience for provisioning a StackSet and StackInstances
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html}
 */
export class CloudFormationStackSet extends $Resource<
  "AWS::CloudFormation::StackSet",
  CloudFormationStackSetProperties,
  CloudFormationStackSetAttributes
> {
  public static readonly Type = "AWS::CloudFormation::StackSet";
  public static readonly AttributeNames = ["StackSetId" as const];
  constructor(
    logicalId: string,
    properties: CloudFormationStackSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationStackSet.Type,
      properties,
      CloudFormationStackSet.AttributeNames,
      options,
    );
  }
}
