import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::RefactorSpaces::Application Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html}
 */
export type RefactorSpacesApplicationProperties = {
  ApiGatewayProxy?: ApiGatewayProxyInput;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^env-([0-9A-Za-z]{10}$)`
   */
  EnvironmentIdentifier: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!app-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$`
   */
  Name: string;
  ProxyType: ProxyType;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  Tags?: Tag[];
  /**
   * @minLength `12`
   * @maxLength `21`
   * @pattern `^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::RefactorSpaces::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#aws-resource-refactorspaces-application-return-values}
 */
export type RefactorSpacesApplicationAttributes = {
  /**
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[a-z0-9]{10}$`
   */
  ApiGatewayId: string;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^app-([0-9A-Za-z]{10}$)`
   */
  ApplicationIdentifier: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\-]+:\w{12}:[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Arn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:elasticloadbalancing:[a-zA-Z0-9\\-]+:\\w{12}:[a-zA-Z_0-9+=,.@\\-_\/]+$`
   */
  NlbArn: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^(?!internal-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+.*[^-]$`
   */
  NlbName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^http://[-a-zA-Z0-9+\x38@#/%?=~_|!:,.;]*[-a-zA-Z0-9+\x38@#/%=~_|]$`
   */
  ProxyUrl: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[-a-zA-Z0-9_]*$`
   */
  StageName: string;
  /**
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[a-z0-9]{10}$`
   */
  VpcLinkId: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Application.ApiGatewayEndpointType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayendpointtype.html}
 */
export type ApiGatewayEndpointType = "REGIONAL" | "PRIVATE";
/**
 * Type definition for `AWS::RefactorSpaces::Application.ApiGatewayProxyInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayproxyinput.html}
 */
export type ApiGatewayProxyInput = {
  EndpointType?: ApiGatewayEndpointType;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[-a-zA-Z0-9_]*$`
   */
  StageName?: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Application.ProxyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-proxytype.html}
 */
export type ProxyType = "API_GATEWAY";
/**
 * Type definition for `AWS::RefactorSpaces::Application.Tag`.
 * A label for tagging Environment resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:).+`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::RefactorSpaces::Application Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html}
 */
export class RefactorSpacesApplication extends $Resource<
  "AWS::RefactorSpaces::Application",
  RefactorSpacesApplicationProperties,
  RefactorSpacesApplicationAttributes
> {
  public static readonly Type = "AWS::RefactorSpaces::Application";
  public static readonly AttributeNames = [
    "ApiGatewayId" as const,
    "ApplicationIdentifier" as const,
    "Arn" as const,
    "NlbArn" as const,
    "NlbName" as const,
    "ProxyUrl" as const,
    "StageName" as const,
    "VpcLinkId" as const,
  ];
  constructor(
    logicalId: string,
    properties: RefactorSpacesApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RefactorSpacesApplication.Type,
      properties,
      RefactorSpacesApplication.AttributeNames,
      options,
    );
  }
}
