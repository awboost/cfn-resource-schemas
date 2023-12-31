import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::PCAConnectorAD::ServicePrincipalName Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html}
 */
export type PCAConnectorADServicePrincipalNameProperties = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector(\/[\w-]+)$`
   */
  ConnectorArn?: string;
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:directory-registration(\/[\w-]+)$`
   */
  DirectoryRegistrationArn?: string;
};
/**
 * Definition of AWS::PCAConnectorAD::ServicePrincipalName Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html}
 */
export class PCAConnectorADServicePrincipalName extends $Resource<
  "AWS::PCAConnectorAD::ServicePrincipalName",
  PCAConnectorADServicePrincipalNameProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::PCAConnectorAD::ServicePrincipalName";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PCAConnectorADServicePrincipalNameProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PCAConnectorADServicePrincipalName.Type,
      properties,
      PCAConnectorADServicePrincipalName.AttributeNames,
      options,
    );
  }
}
