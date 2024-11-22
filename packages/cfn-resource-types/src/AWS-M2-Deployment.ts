import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::M2::Deployment`.
 * Represents a deployment resource of an AWS Mainframe Modernization (M2) application to a specified environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html}
 */
export type M2DeploymentProperties = {
  /**
   * The application ID.
   * @pattern `^\S{1,80}$`
   */
  ApplicationId: string;
  /**
   * The version number of the application to deploy
   */
  ApplicationVersion: number;
  /**
   * The environment ID.
   * @pattern `^\S{1,80}$`
   */
  EnvironmentId: string;
};
/**
 * Attribute type definition for `AWS::M2::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#aws-resource-m2-deployment-return-values}
 */
export type M2DeploymentAttributes = {
  /**
   * The deployment ID.
   * @pattern `^\S{1,80}$`
   */
  DeploymentId: string;
  /**
   * The status of the deployment.
   */
  Status: string;
};
/**
 * Resource type definition for `AWS::M2::Deployment`.
 * Represents a deployment resource of an AWS Mainframe Modernization (M2) application to a specified environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html}
 */
export class M2Deployment extends $Resource<
  "AWS::M2::Deployment",
  M2DeploymentProperties,
  M2DeploymentAttributes
> {
  public static readonly Type = "AWS::M2::Deployment";
  constructor(
    logicalId: string,
    properties: M2DeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, M2Deployment.Type, properties, options);
  }
}
