import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: PCAConnectorADServicePrincipalNameProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PCAConnectorADServicePrincipalName.Type,
      properties,
      options,
    );
  }
}
