import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RefactorSpaces::Service Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html}
 */
export type RefactorSpacesServiceProperties = {
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^app-([0-9A-Za-z]{10}$)`
   */
  ApplicationIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9-_\s\.\!\*\#\@\']+$`
   */
  Description?: string;
  EndpointType: ServiceEndpointType;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^env-([0-9A-Za-z]{10}$)`
   */
  EnvironmentIdentifier: string;
  LambdaEndpoint?: LambdaEndpointInput;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!svc-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$`
   */
  Name: string;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  Tags?: Tag[];
  UrlEndpoint?: UrlEndpointInput;
  /**
   * @minLength `12`
   * @maxLength `21`
   * @pattern `^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$`
   */
  VpcId?: string;
};
/**
 * Attribute type definition for `AWS::RefactorSpaces::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#aws-resource-refactorspaces-service-return-values}
 */
export type RefactorSpacesServiceAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\-]+:\w{12}:[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Arn: string;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^svc-([0-9A-Za-z]{10}$)`
   */
  ServiceIdentifier: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Service.LambdaEndpointInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-lambdaendpointinput.html}
 */
export type LambdaEndpointInput = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Service.ServiceEndpointType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-serviceendpointtype.html}
 */
export type ServiceEndpointType = "LAMBDA" | "URL";
/**
 * Type definition for `AWS::RefactorSpaces::Service.Tag`.
 * A label for tagging Environment resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-tag.html}
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Service.UrlEndpointInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-urlendpointinput.html}
 */
export type UrlEndpointInput = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https?://[-a-zA-Z0-9+\x38@#/%?=~_|!:,.;]*[-a-zA-Z0-9+\x38@#/%=~_|]$`
   */
  HealthUrl?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https?://[-a-zA-Z0-9+\x38@#/%?=~_|!:,.;]*[-a-zA-Z0-9+\x38@#/%=~_|]$`
   */
  Url: string;
};
/**
 * Definition of AWS::RefactorSpaces::Service Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html}
 */
export class RefactorSpacesService extends $Resource<
  "AWS::RefactorSpaces::Service",
  RefactorSpacesServiceProperties,
  RefactorSpacesServiceAttributes
> {
  public static readonly Type = "AWS::RefactorSpaces::Service";
  constructor(
    logicalId: string,
    properties: RefactorSpacesServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RefactorSpacesService.Type, properties, options);
  }
}
