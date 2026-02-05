import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::IntegrationAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html}
 */
export type ConnectIntegrationAssociationProperties = {
  /**
   * Amazon Connect instance identifier
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceId: string;
  /**
   * ARN of Integration being associated with the instance
   * @minLength `1`
   * @maxLength `140`
   */
  IntegrationArn: string;
  /**
   * Specifies the integration type to be associated with the instance
   */
  IntegrationType: IntegrationType;
};
/**
 * Attribute type definition for `AWS::Connect::IntegrationAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#aws-resource-connect-integrationassociation-return-values}
 */
export type ConnectIntegrationAssociationAttributes = {
  /**
   * Identifier of the association with Connect Instance
   */
  IntegrationAssociationId: string;
};
/**
 * Type definition for `AWS::Connect::IntegrationAssociation.IntegrationType`.
 * Specifies the integration type to be associated with the instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-integrationassociation-integrationtype.html}
 */
export type IntegrationType =
  | "LEX_BOT"
  | "LAMBDA_FUNCTION"
  | "APPLICATION"
  | "CASES_DOMAIN";
/**
 * Resource Type definition for AWS::Connect::IntegrationAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html}
 */
export class ConnectIntegrationAssociation extends $Resource<
  "AWS::Connect::IntegrationAssociation",
  ConnectIntegrationAssociationProperties,
  ConnectIntegrationAssociationAttributes
> {
  public static readonly Type = "AWS::Connect::IntegrationAssociation";
  constructor(
    logicalId: string,
    properties: ConnectIntegrationAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectIntegrationAssociation.Type, properties, options);
  }
}
