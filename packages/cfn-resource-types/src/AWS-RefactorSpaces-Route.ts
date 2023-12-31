import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::RefactorSpaces::Route Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html}
 */
export type RefactorSpacesRouteProperties = {
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^app-([0-9A-Za-z]{10}$)`
   */
  ApplicationIdentifier: string;
  DefaultRoute?: DefaultRouteInput;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^env-([0-9A-Za-z]{10}$)`
   */
  EnvironmentIdentifier: string;
  RouteType: RouteType;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^svc-([0-9A-Za-z]{10}$)`
   */
  ServiceIdentifier: string;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  Tags?: Tag[];
  UriPathRoute?: UriPathRouteInput;
};
/**
 * Attribute type definition for `AWS::RefactorSpaces::Route`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#aws-resource-refactorspaces-route-return-values}
 */
export type RefactorSpacesRouteAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\-]+:\w{12}:[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Arn: string;
  PathResourceToId: string;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^rte-([0-9A-Za-z]{10}$)`
   */
  RouteIdentifier: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Route.DefaultRouteInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-defaultrouteinput.html}
 */
export type DefaultRouteInput = {
  ActivationState: RouteActivationState;
};
/**
 * Type definition for `AWS::RefactorSpaces::Route.Method`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-method.html}
 */
export type Method =
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT";
/**
 * Type definition for `AWS::RefactorSpaces::Route.RouteActivationState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-routeactivationstate.html}
 */
export type RouteActivationState = "INACTIVE" | "ACTIVE";
/**
 * Type definition for `AWS::RefactorSpaces::Route.RouteType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-routetype.html}
 */
export type RouteType = "DEFAULT" | "URI_PATH";
/**
 * Type definition for `AWS::RefactorSpaces::Route.Tag`.
 * A label for tagging Environment resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-tag.html}
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
 * Type definition for `AWS::RefactorSpaces::Route.UriPathRouteInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html}
 */
export type UriPathRouteInput = {
  ActivationState: RouteActivationState;
  AppendSourcePath?: boolean;
  IncludeChildPaths?: boolean;
  Methods?: Method[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(/([a-zA-Z0-9._:-]+|\{[a-zA-Z0-9._:-]+\}))+$`
   */
  SourcePath?: string;
};
/**
 * Definition of AWS::RefactorSpaces::Route Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html}
 */
export class RefactorSpacesRoute extends $Resource<
  "AWS::RefactorSpaces::Route",
  RefactorSpacesRouteProperties,
  RefactorSpacesRouteAttributes
> {
  public static readonly Type = "AWS::RefactorSpaces::Route";
  public static readonly AttributeNames = [
    "Arn" as const,
    "PathResourceToId" as const,
    "RouteIdentifier" as const,
  ];
  constructor(
    logicalId: string,
    properties: RefactorSpacesRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RefactorSpacesRoute.Type,
      properties,
      RefactorSpacesRoute.AttributeNames,
      options,
    );
  }
}
