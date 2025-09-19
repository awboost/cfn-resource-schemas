import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html}
 */
export type ServiceCatalogPortfolioPrincipalAssociationProperties = {
  /**
   * The language code.
   */
  AcceptLanguage?: string;
  /**
   * The portfolio identifier.
   */
  PortfolioId?: string;
  /**
   * The ARN of the principal (user, role, or group).
   * @pattern `arn:(aws|aws-cn|aws-us-gov):iam::[0-9]*:(role|user|group)\/.*`
   */
  PrincipalARN?: string;
  /**
   * The principal type. The supported value is IAM if you use a fully defined Amazon Resource Name (ARN), or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters.
   */
  PrincipalType: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html}
 */
export class ServiceCatalogPortfolioPrincipalAssociation extends $Resource<
  "AWS::ServiceCatalog::PortfolioPrincipalAssociation",
  ServiceCatalogPortfolioPrincipalAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::ServiceCatalog::PortfolioPrincipalAssociation";
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioPrincipalAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogPortfolioPrincipalAssociation.Type,
      properties,
      options,
    );
  }
}
