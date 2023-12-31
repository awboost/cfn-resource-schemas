import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
   * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$`
   */
  IntegrationAssociationId: string;
};
/**
 * Type definition for `AWS::Connect::IntegrationAssociation.IntegrationType`.
 * Specifies the integration type to be associated with the instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-integrationassociation-integrationtype.html}
 */
export type IntegrationType = "LEX_BOT" | "LAMBDA_FUNCTION";
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
  public static readonly AttributeNames = ["IntegrationAssociationId" as const];
  constructor(
    logicalId: string,
    properties: ConnectIntegrationAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectIntegrationAssociation.Type,
      properties,
      ConnectIntegrationAssociation.AttributeNames,
      options,
    );
  }
}
