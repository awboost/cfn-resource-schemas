import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::LaunchWizard::Deployment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-launchwizard-deployment.html}
 */
export type LaunchWizardDeploymentProperties = {
  /**
   * Workload deployment pattern name
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9][a-zA-Z0-9-]*$`
   */
  DeploymentPatternName: string;
  /**
   * Name of LaunchWizard deployment
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[A-Za-z0-9_\s\.-]+$`
   */
  Name: string;
  /**
   * LaunchWizard deployment specifications
   */
  Specifications?: DeploymentSpecifications;
  /**
   * Tags for LaunchWizard deployment
   */
  Tags?: Tags[];
  /**
   * Workload Name for LaunchWizard deployment
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[A-Za-z][a-zA-Z0-9-_]*$`
   */
  WorkloadName: string;
};
/**
 * Attribute type definition for `AWS::LaunchWizard::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-launchwizard-deployment.html#aws-resource-launchwizard-deployment-return-values}
 */
export type LaunchWizardDeploymentAttributes = {
  /**
   * ARN of the LaunchWizard deployment
   * @pattern `^arn:aws(-cn|-us-gov)?:launchwizard:[a-z0-9-]+:[0-9]{12}:deployment/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$`
   */
  Arn: string;
  /**
   * Timestamp of LaunchWizard deployment creation
   */
  CreatedAt: string;
  /**
   * Timestamp of LaunchWizard deployment deletion
   */
  DeletedAt: string;
  /**
   * Deployment ID of the LaunchWizard deployment
   * @minLength `2`
   * @maxLength `128`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  DeploymentId: string;
  /**
   * Resource Group Name created for LaunchWizard deployment
   */
  ResourceGroup: string;
  /**
   * Status of LaunchWizard deployment
   */
  Status: DeploymentStatus;
};
/**
 * Type definition for `AWS::LaunchWizard::Deployment.DeploymentSpecifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-launchwizard-deployment-deploymentspecifications.html}
 */
export type DeploymentSpecifications = Record<string, string>;
/**
 * Type definition for `AWS::LaunchWizard::Deployment.DeploymentStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-launchwizard-deployment-deploymentstatus.html}
 */
export type DeploymentStatus =
  | "COMPLETED"
  | "CREATING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_INITIATING"
  | "DELETE_FAILED"
  | "DELETED"
  | "FAILED"
  | "IN_PROGRESS"
  | "VALIDATING";
/**
 * Type definition for `AWS::LaunchWizard::Deployment.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-launchwizard-deployment-tags.html}
 */
export type Tags = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Definition of AWS::LaunchWizard::Deployment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-launchwizard-deployment.html}
 */
export class LaunchWizardDeployment extends $Resource<
  "AWS::LaunchWizard::Deployment",
  LaunchWizardDeploymentProperties,
  LaunchWizardDeploymentAttributes
> {
  public static readonly Type = "AWS::LaunchWizard::Deployment";
  constructor(
    logicalId: string,
    properties: LaunchWizardDeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LaunchWizardDeployment.Type, properties, options);
  }
}
