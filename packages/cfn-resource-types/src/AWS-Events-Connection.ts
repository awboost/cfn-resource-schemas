import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Events::Connection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export type EventsConnectionProperties = {
  AuthParameters?: AuthParameters;
  AuthorizationType?: "API_KEY" | "BASIC" | "OAUTH_CLIENT_CREDENTIALS";
  /**
   * Description of the connection.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * Name of the connection.
   * @minLength `1`
   * @maxLength `64`
   */
  Name?: string;
};
/**
 * Attribute type definition for `AWS::Events::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#aws-resource-events-connection-return-values}
 */
export type EventsConnectionAttributes = {
  /**
   * The arn of the connection resource.
   */
  Arn: string;
  /**
   * The arn of the secrets manager secret created in the customer account.
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::Events::Connection.ApiKeyAuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html}
 */
export type ApiKeyAuthParameters = {
  ApiKeyName: string;
  ApiKeyValue: string;
};
/**
 * Type definition for `AWS::Events::Connection.AuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html}
 */
export type AuthParameters = {
  ApiKeyAuthParameters?: ApiKeyAuthParameters;
  BasicAuthParameters?: BasicAuthParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
  OAuthParameters?: OAuthParameters;
};
/**
 * Type definition for `AWS::Events::Connection.BasicAuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html}
 */
export type BasicAuthParameters = {
  Password: string;
  Username: string;
};
/**
 * Type definition for `AWS::Events::Connection.ClientParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html}
 */
export type ClientParameters = {
  ClientID: string;
  ClientSecret: string;
};
/**
 * Type definition for `AWS::Events::Connection.ConnectionHttpParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html}
 */
export type ConnectionHttpParameters = {
  BodyParameters?: Parameter[];
  HeaderParameters?: Parameter[];
  QueryStringParameters?: Parameter[];
};
/**
 * Type definition for `AWS::Events::Connection.OAuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html}
 */
export type OAuthParameters = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  AuthorizationEndpoint: string;
  ClientParameters: ClientParameters;
  HttpMethod: "GET" | "POST" | "PUT";
  OAuthHttpParameters?: ConnectionHttpParameters;
};
/**
 * Type definition for `AWS::Events::Connection.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html}
 */
export type Parameter = {
  IsValueSecret?: boolean;
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Events::Connection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export class EventsConnection extends $Resource<
  "AWS::Events::Connection",
  EventsConnectionProperties,
  EventsConnectionAttributes
> {
  public static readonly Type = "AWS::Events::Connection";
  public static readonly AttributeNames = [
    "Arn" as const,
    "SecretArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: EventsConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EventsConnection.Type,
      properties,
      EventsConnection.AttributeNames,
      options,
    );
  }
}
