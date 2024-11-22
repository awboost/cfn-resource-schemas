import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApiGateway::DomainNameAccessAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html}
 */
export type ApiGatewayDomainNameAccessAssociationProperties = {
  /**
   * The source of the domain name access association resource.
   */
  AccessAssociationSource: string;
  /**
   * The source type of the domain name access association resource.
   */
  AccessAssociationSourceType: "VPCE";
  /**
   * The amazon resource name (ARN) of the domain name resource.
   */
  DomainNameArn: string;
  /**
   * An array of arbitrary tags (key-value pairs) to associate with the domainname access association.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ApiGateway::DomainNameAccessAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#aws-resource-apigateway-domainnameaccessassociation-return-values}
 */
export type ApiGatewayDomainNameAccessAssociationAttributes = {
  /**
   * The amazon resource name (ARN) of the domain name access association resource.
   */
  DomainNameAccessAssociationArn: string;
};
/**
 * Type definition for `AWS::ApiGateway::DomainNameAccessAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainnameaccessassociation-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ApiGateway::DomainNameAccessAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html}
 */
export class ApiGatewayDomainNameAccessAssociation extends $Resource<
  "AWS::ApiGateway::DomainNameAccessAssociation",
  ApiGatewayDomainNameAccessAssociationProperties,
  ApiGatewayDomainNameAccessAssociationAttributes
> {
  public static readonly Type = "AWS::ApiGateway::DomainNameAccessAssociation";
  constructor(
    logicalId: string,
    properties: ApiGatewayDomainNameAccessAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayDomainNameAccessAssociation.Type,
      properties,
      options,
    );
  }
}
